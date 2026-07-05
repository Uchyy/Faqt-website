import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react"
import Button from "../ui/Button";

export default function ContactsSection() {

  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsApp, setwhatsApp] = useState("");
  const [email, setEmail] = useState("");

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
        />

        <Input
          label="PHONE"
          placeholder="0700 02"
          type="tel"
          value={phone}
          onChange={setPhone}
        />

        <Input
          label="EMAIL"
          placeholder="myfaqt@example.com"
          value={email}
          onChange={setEmail}
        />

        <Input
          label="WHATSAPP"
          placeholder="+ 1 555 000 000"
          value={whatsApp}
          onChange={setwhatsApp}
        />

        <Button >
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}