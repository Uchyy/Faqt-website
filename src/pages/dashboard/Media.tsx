import { ReactNode, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import { useDashboardData } from "../../context/DashBoardDataContext";
import DashboardContentBase from "../../components/ui/DashboardContentBase";
import FileUpload, { type FileUploadRef, } from "../../components/ui/upload/FileUpload";
import { Trash2, X, FilePlus} from "lucide-react"
import HorizontalCarousel from "../../components/ui/HorizontalCarousel";
import AlertDialog from "../../components/ui/AlertDialog";
import { useNotification } from "../../context/NotificationContext";

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


    const [deleteLogo, setDeleteLogo] = useState(false);
    const [deleteCoverImage, setDeleteCoverImage] = useState(false);
    const [deleteImage, setDeleteImage] = useState<string | null>(null);
    const {showNotification}=useNotification();

    const deleteMedia = (type: MediaType, url?: string) => {
        if (type === "logo") {
            updatePage({
                branding: {
                    ...page.branding,
                    logo: { url: "", name: "" },
                },
            });

            showNotification({
                message:"Logo deleted successfully",
                type:"success"
            });
            return;
        }

        if (type === "cover") {
            updatePage({
                branding: {
                    ...page.branding,
                    coverImage: { url: "", name: "" },
                },
            });

            showNotification({
                message:"Cover image deleted successfully",
                type:"success"
            });
            return;
        }

        updatePage({
            branding: {
                ...page.branding,
                gallery: page.branding.gallery.filter(
                    (image) => image.url !== url
                ),
            },
        });
    };

    const uploadMedia = async ( type: MediaType, files: File[],) => {
        if (files.length === 0) return;

        try {

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

                showNotification({
                    message:"Logo uploaded successfully",
                    type:"success"
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

                showNotification({
                    message:"Cover image uploaded successfully",
                    type:"success"
                });

                return;
            }

            const gallery = await Promise.all(
                files.map(async (file) => ({
                    url: await uploadFile(file),
                    name: file.name,
                })),
            );

            updatePage({
                branding: {
                    ...page.branding,
                    gallery: [...page.branding.gallery, ...gallery],
                },
            });

            showNotification({
                message:"Gallery updated successfully",
                type:"success"
            });
        } catch (error) {
            showNotification({
                message:"Uploading failed",
                type:"error"
            });
            console.error(`Failed to upload ${type}:`, error);
        } 
    };

    const handleDeleteOpenChange = (open: boolean, type: string) => {
        if (type === "cover") {
            if (!page.branding.coverImage.url) return;
            setDeleteCoverImage(open);
            return;
        }

        if (!page.branding.logo.url) return;
        setDeleteLogo(open);
    };

    return (
        <DashboardContentBase
            title="MEDIA"
            label="ADD IMAGES THAT REPRESENT YOUR BUSINESS">
            <div className="mt-5 space-y-6 overflow-hidden">

                <MediaSection
                    title="Logo"
                    description="This logo represents your business on your public page."
                    current={ page.branding.logo?.url
                        ? (
                            <img
                                src={page.branding.logo.url}
                                alt="Current logo"
                                className="h-30 w-30 object-contain rounded-full"
                            />
                        )  : null
                    }
                    disabled={!page.branding.logo?.url}
                    uploadRef={logoUploadRef}
                    onDelete={() => handleDeleteOpenChange(true, "logo")}
                    fileUpload = { <FileUpload
                        ref={logoUploadRef}
                        label="UPLOAD LOGO"
                        accept="image/png,image/jpeg,image/webp"
                        multiple={false}
                        onSelect={(files) =>
                            uploadMedia("logo", files)
                        }
                    />}
                    recommendation="Recommended: use a PNG or WebP with a transparent background. Square logos work best."
                    onChange={() => logoUploadRef.current?.open()}>
                </MediaSection>

                <MediaSection
                    title="Cover Image"
                    description="This image is used as the hero background on your public page."
                    disabled={!page.branding.coverImage?.url}
                    current={ page.branding.coverImage?.url  
                        ? (
                            <img
                                src={page.branding.coverImage.url}
                                alt="Current cover"
                                className="h-48 w-full rounded-2xl object-cover"
                            />
                        )
                        : null
                    }
                    uploadRef={coverUploadRef}
                    onChange={() => coverUploadRef.current?.open()}
                    onDelete={() => handleDeleteOpenChange(true, "cover")}
                    fileUpload = {  <FileUpload
                        ref={coverUploadRef}
                        label="UPLOAD COVER IMAGE"
                        accept="image/png,image/jpeg,image/webp"
                        multiple={false}
                        onSelect={(files) => uploadMedia("cover", files) }
                    />}
                    recommendation="Recommended: Use a wide, high-quality image with enough space around the main subject for a clean banner.">
                </MediaSection>


                <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5">
                    <div className="flex flex-row justify-between items-center h-fit">

                        <div className="flex flex-col mb-3 gap-1 sm:max-w-2xl mr-3">
                            <span className="font-heading text-sm md:text-lg font-bold"> Gallery </span>
                            <span className="font-unica uppercase text-xs md:text-base "> Showcase your business with images of your space services and more </span>
                        </div>

                        <Button 
                            variant="solid"
                            className="w-fit p-2 items-center"
                            onClick={() => galleryUploadRef.current?.open()}
                            icon={<FilePlus color="white" width={"fit"} size={20}/>}
                            rounded={false}>    
                                <span className="hidden font-bold text-white text-xs md:text-sm">Add Image</span>
                        </Button>

                    </div>

                    { page.branding.gallery ? (
                        <HorizontalCarousel className=" overflow-hidden mb-3">
                            {page.branding.gallery.map((image) => (
                                <div key={`${image.url}-${image.name}`} className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={image.url}
                                        alt=""
                                        className="h-32 w-full object-cover"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setDeleteImage(image.url)}
                                        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-600">
                                        <X size={16} />
                                    </button>

                                    <div className="hidden">
                                        <FileUpload
                                            ref={galleryUploadRef}
                                            label="UPLOAD IMAGE"
                                            accept="image/png,image/jpeg,image/webp"
                                            multiple
                                            onSelect={(files) => uploadMedia("gallery", files)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </HorizontalCarousel>
                    ) : (
                        <div className="flex h-full items-center justify-center border border-border w-full p-10 rounded-3xl">
                            <span className="font-heading font-bold ">
                                No gallery.
                            </span>
                        </div>
                    )}

                    <p className="mt-2 text-xs font-medium bg-accent/10 text-black/50 p-3 rounded-xl"> Recommended: Use clear, high-quality images that showcase your business, products, services, or space. </p>

                </div>

            </div>


            {/* DELETE CONFIRMATIONS */}
            <AlertDialog
                open={deleteCoverImage}
                onOpenChange={(open) => handleDeleteOpenChange(open, "cover")}
                title={ "Delete Cover Image"}
                actionText="Delete"
                onAction= {() => deleteMedia("cover",)}
                type="delete">
                    <span className="text-center font-red/500"> This action will remove your <strong> cover image 
                        </strong> from your public page.</span>
            </AlertDialog>

            <AlertDialog
                open={!!deleteImage}
                onOpenChange={(open) => { if (!open) setDeleteImage(null); }}
                title="Delete Image from Gallery"
                actionText="Delete"
                onAction={() => {
                    deleteMedia("gallery", deleteImage ?? undefined);
                    setDeleteImage(null);
                }}
                type="delete">
                <span className="text-center">
                    This action will remove this image from your public page.
                </span>
            </AlertDialog>

            <AlertDialog
                open={deleteLogo}
                onOpenChange={(open) => handleDeleteOpenChange(open, "logo")}
                title={ "Delete Logo"}
                actionText="Delete"
                onAction= {() => deleteMedia("logo", )}
                type="delete">
                    <span className="text-center font-red/500"> This action will remove your <strong> logo 
                        </strong> from your public page.</span>
            </AlertDialog>
        </DashboardContentBase>
    );
}




type MediaSectionProps = {
    title: string;
    description: string;
    recommendation?: string;
    current?: ReactNode;
    fileUpload: ReactNode;
    onChange: (() => void)
    onDelete: (() => void)
    uploadRef: React.RefObject<FileUploadRef | null>;
    disabled: boolean
};

function MediaSection({ title, description, current, fileUpload, onChange, recommendation, uploadRef, onDelete, disabled }: Readonly<MediaSectionProps>) {
        
    return (
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-5">

            <div className="flex flex-col mb-3 gap-1">
                <span className="font-heading text-sm md:text-lg font-bold"> {title} </span>
                <span className="font-unica uppercase text-xs md:text-base "> {description} </span>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap:4 lg:gap-10 w-full lg:w-7xl">
                    
                {current ? ( <div className="flex justify-center items-center px-4 py-7 rounded-3xl border border-black/10 p-4 w-full">
                    {current}
                </div>
                ) : (
                    fileUpload
                )}

                <div className=" flex flex-col mt-3 lg:mt-0 lg:flex-col gap-4 lg:gap-6 items-center justify-center w-full lg:w-[40%]">
                    <Button 
                        variant="dashboard"
                        className="w-full items-center text-xs md:text-xs"
                        onClick={onChange}
                        icon={<FilePlus color="white" size={17}/>}
                        rounded={false}>                                
                            <span className="font-bold text-white text-xs md:text-xs">Change Image</span>
                    </Button>

                    <Button 
                        variant="outline"
                        className="w-full"
                        color="red"
                        icon={<Trash2 size={17}/>}
                        onClick={onDelete}
                        disabled = {disabled}
                        rounded={false}>                                
                            <span className="font-bold text-red/10 uppercase">Remove Image</span>
                    </Button>
                </div>

                {current && <div className="hidden">{fileUpload}</div>}
            </div>

            <p className="mt-2 text-xs font-medium bg-accent/10 text-black/50 p-3 rounded-xl"> {recommendation} </p>
        </div>
    );
}

