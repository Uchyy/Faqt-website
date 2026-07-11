import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useContext, useState, useEffect } from "react";
import Button from "../ui/Button";
import {FolderPen, MapPin, Tag, FileText} from "lucide-react"
import { PageContext } from "../../context/PageContext";
import { stringifyPage } from "../../model/Page";

export default function BusinessInfo() {

  const [businessName, setBusinessName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [errors, setErrors] = useState<{ businessName?: string; shortDescription?: string,  address?: string, tagline?: string }>({});

  const context = useContext(PageContext);

  useEffect(() => {
    if (!context?.page) return;

    setBusinessName(context.page.businessName);
    setShortDescription(context.page.shortDescription);
    setLongDescription(context.page.longDescription);
    setAddress(context.page.address);
    setTagline(context.page.tagline);

  }, [context?.page]);

  const validate = () => {
    const newErrors: { businessName?: string; shortDescription?: string,  address?: string, tagline?: string  } = {};

    if (!businessName) {
      newErrors.businessName = "Business name is required";
    }
    
    if (!shortDescription) {
      newErrors.shortDescription = "A short description is required";
    }

    if (!address) {
      newErrors.address = "Business address is required";
    }

    if (!tagline) {
      newErrors.tagline = "Tagline is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    console.log("Form valid:", { businessName, address, tagline, shortDescription });
    const updatedPage = context?.updatePage({ businessName, address, tagline, shortDescription, longDescription });

    if (!context) {
      console.log("No PageContext available");
      return;
    }

    console.log("UPDATED PAGE:", updatedPage);
    if(updatedPage){
      console.log( "Page updated:", stringifyPage(updatedPage) );
    } 
  };

  return (
    <CollapsibleSection
      title="Business Info"
      label="LET YOUR CUSTOMERS KNOW YOU"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <Input
          label="BUSINESS NAME"
          placeholder="Bean & Brew Coffee"
          value={businessName}
          onChange={setBusinessName}
          icon= {<FolderPen size={18} />}
          iconPosition="right"
          error={errors.businessName}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, businessName: undefined }))
          }
        />

        <Input
          label="ADDRESS"
          placeholder="25 High Street, Portsmouth PO1 3AB"
          value={address}
          icon= {<MapPin size={18} />}
          iconPosition="right"
          onChange={setAddress}
          error={errors.address}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, address: undefined }))
          }
        />

        <Input
          label="SHORT DESCRIPTION"
          placeholder="Specialty coffee, homemade pastries, and a cosy space to work or catch up with friends."
          value={shortDescription}
          onChange={setShortDescription}
          icon= {<FileText size={18} />}
          iconPosition="right"
          maxLength={120}
          error={errors.shortDescription}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, shortDescription: undefined }))
          }
        />

        <Input
          label="TAGLINE"
          placeholder="Where every cup feels like home."
          maxLength={60}
          value={tagline}
          icon= {<Tag size={18} />}
          iconPosition="right"
          error={errors.tagline}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, tagline: undefined }))
          }
          onChange={setTagline}
        />

        <Input
          label="LONG DESCRIPTION"
          placeholder="Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes, breakfast, and light lunches. Whether you're grabbing a quick takeaway or relaxing with friends, we're here to make every visit memorable."
          value={longDescription}
          onChange={setLongDescription}
          icon= {<FileText size={18} />}
          iconPosition="right"
          rows={3}
          maxLength={300}
        />

        <div></div> <div></div>

        <Button onClick={handleSave}>
            Save changes
        </Button>

      </div>
    </CollapsibleSection>
  );
}