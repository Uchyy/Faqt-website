import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react"
import Button from "../ui/Button";
import {Globe, Mail} from "lucide-react"
import PhoneInput from "../ui/PhoneInput";
import { isValidPhoneNumber } from "libphonenumber-js";


export default function ContactsSection() {

  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsApp, setwhatsApp] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { phone?: string; email?: string  } = {};
    console.log(JSON.stringify(phone));

    if (!phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    console.log("Form valid:", { phone, email });


    // later: auth logic here
  };

  return (
    <CollapsibleSection
      title="Contact Info"
      label="Let your customers reach you"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <Input
          label="WEBSITE"
          placeholder="https://www.myfaqtpage.com"
          value={website}
          onChange={setWebsite}
          icon= {<Globe size={18} />}
          iconPosition="right"
        />

        <Input
          label="EMAIL"
          placeholder="myfaqt@example.com"
          value={email}
          onChange={setEmail}
          icon= {<Mail size={18} />}
          iconPosition="right"
          error={errors.email}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, email: undefined }))
          }
        />

        <PhoneInput
          label="PHONE"
          value={phone}
          onChange={setPhone}
          error={errors.phone}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, phone: undefined }))
          }
        />

        <PhoneInput
          label="WHATSAPP"
          value={whatsApp}
          onChange={setwhatsApp}
        />

        <div></div>

        <Button onClick={handleSave}>
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}