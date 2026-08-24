import { ReactNode, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import { useDashboardData } from "../../context/DashBoardDataContext";
import DashboardContentBase from "../../components/ui/DashboardContentBase";
import FileUpload, {
    type FileUploadRef,
} from "../../components/ui/upload/FileUpload";
import { useMediaQuery } from "../../utils/useScreenSize";

async function uploadFile(file: File): Promise<string> {
    console.log("Uploading file:", file);

    return "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400";
}

type MediaType = "logo" | "cover" | "gallery";

export default function Media() {
    const { page, updatePage } = useDashboardData();

    const logoUploadRef = useRef<FileUploadRef>(null);
    const coverUploadRef = useRef<FileUploadRef>(null);
    const galleryUploadRef = useRef<FileUploadRef>(null);

    const [uploading, setUploading] = useState<MediaType | null>(null);

    const uploadMedia = async (
        type: MediaType,
        files: File[],
    ) => {
        if (files.length === 0) return;

        try {
            setUploading(type);

            if (type === "logo") {
                const file = files[0];

                const url = await uploadFile(file);

                updatePage({
                    branding: {
                        ...page.branding,
                        logo: {
                            url,
                            name: file.name,
                        },
                    },
                });

                return;
            }

            if (type === "cover") {
                const file = files[0];

                const url = await uploadFile(file);

                updatePage({
                    branding: {
                        ...page.branding,
                        coverImage: {
                            url,
                            name: file.name,
                        },
                    },
                });

                return;
            }

            const gallery = await Promise.all(
                files.slice(0, 5).map(async (file) => {
                    const url = await uploadFile(file);

                    return {
                        url,
                        name: file.name,
                    };
                }),
            );

            updatePage({
                branding: {
                    ...page.branding,
                    gallery,
                },
            });
        } catch (error) {
            console.error(`Failed to upload ${type}:`, error);
        } finally {
            setUploading(null);
        }
    };

    return (
        <DashboardContentBase
            title="MEDIA"
            label="ADD IMAGES THAT REPRESENT YOUR BUSINESS">
            <div className="mt-5 space-y-6">

                <MediaSection
                    title="Logo"
                    description="Used as your business identity."
                    current={
                        page.branding.logo?.url
                            ? (
                                <img
                                    src={page.branding.logo.url}
                                    alt="Current logo"
                                    className="h-20 w-20 object-contain"
                                />
                            )
                            : null
                    }
                    currentLabel="Current logo"
                    changeLabel="Change logo"
                    uploadRef={logoUploadRef}
                    uploading={uploading === "logo"}
                    onChange={() => logoUploadRef.current?.open()}>

                    <FileUpload
                        ref={logoUploadRef}
                        label="UPLOAD LOGO"
                        accept="image/png,image/jpeg,image/webp"
                        multiple={false}
                        onSelect={(files) =>
                            uploadMedia("logo", files)
                        }
                    />

                    <p className="text-xs text-muted-foreground">
                        Recommended: use a PNG or WebP with a transparent
                        background. Square logos work best.
                    </p>
                </MediaSection>

                <MediaSection
                    title="Cover Image"
                    description="The main image customers see first."
                    current={
                        page.branding.coverImage?.url
                            ? (
                                <img
                                    src={page.branding.coverImage.url}
                                    alt="Current cover"
                                    className="h-48 w-full rounded-2xl object-cover"
                                />
                            )
                            : null
                    }
                    currentLabel="Current cover image"
                    changeLabel="Change cover"
                    uploadRef={coverUploadRef}
                    uploading={uploading === "cover"}
                    onChange={() => coverUploadRef.current?.open()}
                    currentRounded={false}>
                    <FileUpload
                        ref={coverUploadRef}
                        label="UPLOAD COVER IMAGE"
                        accept="image/png,image/jpeg,image/webp"
                        multiple={false}
                        onSelect={(files) =>
                            uploadMedia("cover", files)
                        }
                    />

                    <p className="text-xs text-muted-foreground">
                        Recommended: use a wide image with enough space
                        around the main subject.
                    </p>
                </MediaSection>

                <MediaSection
                    title="Gallery"
                    description="Add up to 5 images for your page."
                    uploadRef={galleryUploadRef}
                    uploading={uploading === "gallery"}
                    onChange={() => galleryUploadRef.current?.open()}
                    currentRounded={false}>

                    <FileUpload
                        ref={galleryUploadRef}
                        label="GALLERY"
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        onSelect={(files) => uploadMedia("gallery", files)}
                    />

                    <p className="text-xs text-muted-foreground">
                        You can upload up to 5 images. PNG, JPEG and WebP
                        are supported.
                    </p>
                </MediaSection>

            </div>
        </DashboardContentBase>
    );
}


type MediaSectionProps = {
    title: string;
    description: string;
    current?: ReactNode;
    currentLabel?: string;
    changeLabel?: string;
    uploadRef: React.RefObject<FileUploadRef | null>;
    uploading: boolean;
    onChange: () => void;
    currentRounded?: boolean;
    children: ReactNode;
};

function MediaSection({ title, description, current, currentLabel = "Current image", changeLabel = "Change image", uploading, onChange, currentRounded = true, children, }: Readonly<MediaSectionProps>) {
        
    const isDesktop = useMediaQuery("(min-width:1024px)");

    return (
        <div className="rounded-2xl border border-border bg-white p-5">

            <h3 className="font-heading font-semibold">
                {title}
            </h3>

            <p className="mt-1 mb-4 text-sm text-muted-foreground">
                {description}
            </p>

            <div className={ current && uploading === false  ? "grid grid-cols-1 gap-4 lg:grid-cols-2"  : ""}>
                {current && (
                    <CurrentSection
                        label={currentLabel}
                        image={current}
                        buttonText={ uploading ? "Uploading..." : changeLabel }
                        onChange={onChange}
                        rounded={currentRounded}
                    />
                )}

                <div className="flex flex-col gap-4">
                    {children}

                    {uploading && (
                        <p className="text-xs font-medium text-accent">
                            Uploading...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

type CurrentSectionProps = {
    label: string;
    image?: ReactNode;
    onChange: () => void;
    buttonText: string;
    rounded?: boolean;
};

function CurrentSection({ label, image, onChange, buttonText, rounded = true,}: Readonly<CurrentSectionProps>) {
    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-black/10 p-4">

            <span className="self-start font-unica text-sm font-bold uppercase">
                {label}
            </span>

            {image ? ( <div className={`mx-auto p-1 ${  rounded ? "rounded-full" : ""}`}>
                    {image}
                </div>
            ) : (
                <div className="mx-auto flex h-30 w-fit items-center justify-center rounded-full bg-accent/10 p-3 text-sm text-muted-foreground">
                    No image uploaded
                </div>
            )}

            <Button
                variant="outline"
                className="mx-auto w-[30%] rounded-2xl"
                onClick={onChange}>
                {buttonText}
            </Button>
        </div>
    );
}