import { useContext, useEffect, useState } from "react";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Button from "../../../ui/Button";
import { PageContext } from "../../../../context/PageContext";
import { stringifyPage } from "../../../../model/Page";
import FileInput from "../../../ui/FileInput";


export default function ContentMedia(){

    const context = useContext(PageContext);

    const [logo,setLogo] = useState<File | null>(null);
    const [coverImage,setCoverImage] = useState<File | null>(null);
    const [gallery,setGallery] = useState<File[]>([]);


    useEffect(()=>{

        if(!context?.page) return;

        setLogo(context.page.branding.logo);
        setCoverImage(context.page.branding.coverImage);
        setGallery(context.page.branding.gallery ?? []);

    },[context?.page]);



    const handleSave = ()=>{

        if(!context){
            console.log("No PageContext");
            return;
        }

        const updatedPage = context.updatePage({ branding:{...context.page.branding,logo, coverImage, gallery }});
        console.log("UPDATED PAGE:",updatedPage);

        if(updatedPage){
            console.log(stringifyPage(updatedPage));
        }

    };



    return (

        <CollapsibleSection
            title="MEDIA"
            label="ADD IMAGES THAT REPRESENT YOUR BUSINESS">

            <div className="space-y-6 mt-5">
                <div className=" rounded-2xl border border-border bg-white p-5">

                    <h3 className="font-heading font-semibold">
                        Logo
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        Used as your business identity.
                    </p>

                    <FileInput 
                        label="UPLOAD LOGO"
                        value={logo}
                        onChange={setLogo}
                        accept="image/png,image/jpeg,image/webp"
                        maxFiles={1}
                        multiple={false}
                    />
                </div>

                <div className=" rounded-2xl border border-border bg-white p-5">
                    <h3 className="font-heading font-semibold">
                        Cover Image
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        The main image customers see first.
                    </p>

                    {/* Cover Image */}
                    <FileInput
                        label="UPLOAD COVER IMAGE"
                        value={coverImage}
                        onChange={setCoverImage}
                        accept="image/png,image/jpeg,image/webp"
                        maxFiles={1}
                        multiple={false}
                    />
                </div>

                <div className="  rounded-2xl  border  border-border  bg-white  p-5">
                    <h3 className="font-heading font-semibold">
                        Gallery
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                        Add up to 5 images for your page.
                    </p>

                    <FileInput
                        label="GALLERY"
                        description="Add up to 5 images shown on your public page."
                        value={gallery}
                        onChange={setGallery}
                        accept="image/png,image/jpeg,image/webp"
                        multiple
                        maxFiles={5}
                    />
                </div>

                <div className="flex justify-end">
                    <Button onClick={handleSave}>
                        Save changes
                    </Button>
                </div>
            </div>
        </CollapsibleSection>

    );
}