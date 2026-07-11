import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";
import {FolderPen, MapPin, Tag, FileText} from "lucide-react"
import { useNavigate } from "@tanstack/react-router";

export default function BusinessInfo() {

  const [businessName, setBusinessName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [errors, setErrors] = useState<{ businessName?: string; shortDescription?: string,  address?: string, tagline?: string }>({});

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


    // later: auth logic here
  };

  return (
    <CollapsibleSection
      title="Business Info"
      label="LET YOUR CUSTOMERS KNOW YOU"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <Input
          label="BUSINESS NAME"
          placeholder="What should we call you?"
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
          placeholder="Where can we find you?"
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
          placeholder="Tell your customers what you do in one sentence"
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
          placeholder="What makes you memorable?"
          maxLength={60}
          value={tagline}
          icon= {<Tag size={18} />}
          iconPosition="right"
          error={errors.shortDescription}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, shortDescription: undefined }))
          }
          onChange={setTagline}
        />

        <Input
          label="LONG DESCRIPTION"
          placeholder="Share your story, services, and what customers can expect."
          value={longDescription}
          onChange={setLongDescription}
          icon= {<FileText size={18} />}
          iconPosition="right"
          rows={3}
          maxLength={300}
        />

        <div></div> <div></div>

        <Button onClick={handleSave}>
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}