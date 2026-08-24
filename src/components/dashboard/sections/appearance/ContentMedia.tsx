import { useState } from "react";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import { useDashboardData } from "../../../../context/DashBoardDataContext";


/**
 * Upload a file to your storage provider.
 *
 * Replace the implementation with your actual upload logic
 * (S3, Supabase Storage, Cloudinary, etc.).
 *
 * The function should return the stored file URL/key.
 */
async function uploadFile(file: File): Promise<string> {
    // TODO: Replace with actual storage upload
    console.log("Uploading file:", file);

    // Temporary placeholder
    return URL.createObjectURL(file);
}


export default function ContentMedia() {

    const { page, updatePage } = useDashboardData();

    /*
     * These are temporary browser File objects.
     *
     * They should NOT be stored directly in Page.
     */
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);

    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        try {
            setIsSaving(true);

            let logo = page.branding.logo;
            let coverImage = page.branding.coverImage;
            let gallery = page.branding.gallery;

 
            if (logoFile) {
                const url = await uploadFile(logoFile);
                logo = {url}
            }

            if (coverImageFile) {
                const url = await uploadFile(coverImageFile);

                coverImage = {url}
            }

            if (galleryFiles.length > 0) {
                const uploadedGallery = await Promise.all(
                    galleryFiles.map(async (file) => {
                        const url = await uploadFile(file);
                        return{url}
                    })
                );

                gallery = uploadedGallery;
            }


            updatePage({
                branding: {
                    ...page.branding,
                    logo,
                    coverImage,
                    gallery,
                },
            });

            setLogoFile(null);
            setCoverImageFile(null);
            setGalleryFiles([]);

        } catch (error) {
            console.error("Failed to save media:", error);
        } finally {
            setIsSaving(false);
        }
    };


    return (
        <CollapsibleSection
            title="MEDIA"
            label="ADD IMAGES THAT REPRESENT YOUR BUSINESS"
        >

            <div className="space-y-6 mt-5">

                <div className="rounded-2xl border border-border bg-white p-5">

                    <h3 className="font-heading font-semibold">
                        Logo
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        Used as your business identity.
                    </p>

                    <FileInput
                        label="UPLOAD LOGO"
                        value={logoFile}
                        onChange={setLogoFile}
                        accept="image/png,image/jpeg,image/webp"
                        maxFiles={1}
                        multiple={false}
                    />

                </div>


                <div className="rounded-2xl border border-border bg-white p-5">

                    <h3 className="font-heading font-semibold">
                        Cover Image
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        The main image customers see first.
                    </p>

                    <FileInput
                        label="UPLOAD COVER IMAGE"
                        value={coverImageFile}
                        onChange={setCoverImageFile}
                        accept="image/png,image/jpeg,image/webp"
                        maxFiles={1}
                        multiple={false}
                    />

                </div>


                <div className="rounded-2xl border border-border bg-white p-5">

                    <h3 className="font-heading font-semibold">
                        Gallery
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        Add up to 5 images for your page.
                    </p>

                    <FileInput
                        label="GALLERY"
                        description="Add up to 5 images shown on your public page."
                        value={galleryFiles}
                        onChange={setGalleryFiles}
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        maxFiles={5}
                    />

                </div>


                <div className="flex justify-end">
                    <Button
                        onClick={handleSave}
                        disabled={isSaving}
                    >
                        {isSaving ? "Saving..." : "Save changes"}
                    </Button>
                </div>

            </div>

        </CollapsibleSection>
    );
}