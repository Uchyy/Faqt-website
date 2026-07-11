import CollapsibleSection from "../ui/CollapsibleSection";
import { useState } from "react";
import Button from "../ui/Button";
import { Plus } from "lucide-react";
import DocumentUpload from "../ui/DocumentUpload";

export default function BusinessInfo() {

 const [documents, setDocuments] = useState<File[]>([]);

  return (
    <CollapsibleSection
      title="Media & Documents"
      label="LET CUSTOMERS ACCESS USEFUL INFORMATION ANYTIME"> 

      <div>  

        {/* Uplaod documents */}
        <DocumentUpload
            files={documents}
            onChange={setDocuments}
            maxFiles={2}
        />

        <div className="flex justify-end">
            <Button className="w-1/2">
                Save
            </Button>
        </div>

      </div>
    </CollapsibleSection>
  );
}