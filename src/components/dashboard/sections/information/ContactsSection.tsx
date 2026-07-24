import validator from "validator";
import { useContext, useEffect, useState } from "react"
import {Globe, Mail} from "lucide-react"
import { isValidPhoneNumber } from "libphonenumber-js";
import { PageContext } from "../../../../context/PageContext";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Input from "../../../ui/Input";
import FaqtPhoneInput from "../../../ui/PhoneInput";
import Button from "../../../ui/Button";
import { useNotification } from "../../../../context/NotificationContext";


export default function ContactsSection() {

  const context = useContext(PageContext);
  const {showNotification}=useNotification();

  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsApp, setwhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  useEffect(() => {
    if (!context?.page) return;

    setEmail(context.page.contact.email);
    setPhone(context.page.contact.phone);
    setWebsite(context.page.contact.website);
    setwhatsApp(context.page.contact.whatsapp);

  }, [context?.page]);

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
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    console.log("Form valid:", { phone, email, website, whatsApp });
    const updatedPage = context?.updatePage({  contact:{...context.page.contact, email, website, whatsapp: whatsApp},});
    console.log("UPDATED PAGE:", updatedPage);

    showNotification({
        message:"Please complete all fields",
        type:"error"
    });

    // later: auth logic here
  };

  return (
    <CollapsibleSection
      title="Contact Info"
      label="Let your customers reach you"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

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

        <FaqtPhoneInput
          label="PHONE"
          value={phone}
          onChange={setPhone}
          error={errors.phone}
          onClearError={() =>
            setErrors((prev) => ({ ...prev, phone: undefined }))
          }
        />

        <FaqtPhoneInput
          label="WHATSAPP"
          value={whatsApp}
          onChange={setwhatsApp}
        />

        <div></div>

        <Button onClick={handleSave}>
            Save changes
            
        </Button>

      </div>
    </CollapsibleSection>
  );
}