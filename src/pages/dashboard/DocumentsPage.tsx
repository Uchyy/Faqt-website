import { useContext, useEffect, useState } from "react";
import DocumentUpload from "../../components/ui/upload/DocumentUpload";
import { PageContext } from "../../context/PageContext";
import { BusinessDocument } from "../../model/BusinessDocument";
import DashboardContentBase from "../../components/ui/DashboardContentBase";

export default function DocumentPage() {

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



    return (

        <DashboardContentBase title="Media & Documents" label="LET CUSTOMERS ACCESS USEFUL INFORMATION ANYTIME">
            <div className="space-y-6 w-full">
              <DocumentUpload
                files={documents}
                onChange={setDocuments}
                maxFiles={4} />

            </div>

            
        </DashboardContentBase>

    );
}