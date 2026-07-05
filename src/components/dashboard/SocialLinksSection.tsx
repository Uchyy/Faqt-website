import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";

export default function SocialMedia() {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [twitter, setTwitter] = useState("");

  return (
    <CollapsibleSection
      title="SOCIAL MEDIA"
      label="Let customers discover and connect with you"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <Input
          label=" INSTAGRAM"
          placeholder="@mybusiness"
          value={instagram}
          onChange={setInstagram}
        />

        <Input
          label="FACEBOOK"
          placeholder="Page name or url..."
          value={facebook}
          onChange={setFacebook}
        />

        <Input
          label="TIKTOK"
          placeholder="@handle or url"
          value={tiktok}
          onChange={setTiktok}
        />

        <Input
          label="X / TWITTER"
          placeholder="@handl or url.."
          value={twitter}
          onChange={setTwitter}
        />

        <Button >
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}