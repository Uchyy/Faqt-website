import CollapsibleSection from "../../../ui/CollapsibleSection";
import { useContext, useEffect, useState } from "react";
import Button from "../../../ui/Button";
import DocumentUpload from "../../../ui/DocumentUpload";
import { PageContext } from "../../../../context/PageContext";
import { stringifyPage } from "../../../../model/Page";
import { BusinessDocument } from "../../../../model/BusinessDocument";

export default function BusinessInfo() {

    const [documents, setDocuments] = useState<BusinessDocument[]>([]);
    const [errors, setErrors] = useState<{ documents?: string }>({});
    const context = useContext(PageContext);

    useEffect(() => {
        if (!context?.page) return;
        setDocuments(context.page.documents ?? []);

    }, [context?.page]);


    const validate = () => {
        const newErrors:{documents?:string} = {};
        if(documents.length === 0){
            newErrors.documents = "Please upload at least one document";
        }

        const missingTitle = documents.some(
            document => !document.title.trim()
        );

        if(missingTitle){
            newErrors.documents = "Please add a title for all documents";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSave = () => {
        if(!validate()) return;
        if(!context){
            console.log("No PageContext available");
            return;
        }
        const updatedPage = context.updatePage({
            documents
        });

        console.log("UPDATED PAGE:", updatedPage);
        if(updatedPage){ console.log( "Page updated:", stringifyPage(updatedPage) ); }
    };

    return (

        <CollapsibleSection title="Media & Documents" label="LET CUSTOMERS ACCESS USEFUL INFORMATION ANYTIME">
            <div className="space-y-6">
              <DocumentUpload
                files={documents}
                onChange={setDocuments}
                maxFiles={2} />

                <div className="flex justify-end">

                    <Button onClick={handleSave} className="w-1/2">
                        Save changes
                    </Button>
                </div>
            </div>
        </CollapsibleSection>

    );
}