import CollapsibleSection from "../ui/CollapsibleSection";
import Input from "../ui/Input";
import { useState } from "react";
import { SocialIcon } from 'react-social-icons'
import Button from "../ui/Button";

export default function SocialMedia() {
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youTube, setYouTube] = useState("");

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
          icon={<SocialIcon  bgColor="none" fgColor="#833AB4" network="instagram" />}
          iconPosition="right"

        />

        <Input
          label="FACEBOOK"
          placeholder="Page name or url..."
          value={facebook}
          onChange={setFacebook}
          icon={<SocialIcon bgColor="none" fgColor="#1877F2" network="facebook" />}
          iconPosition="right"
        />

        <Input
          label="TIKTOK"
          placeholder="@handle or url"
          value={tiktok}
          onChange={setTiktok}
          icon={<SocialIcon bgColor="none" fgColor="black" network="tiktok" />}
          iconPosition="right"
        />

        <Input
          label="X / TWITTER"
          placeholder="@handle or url.."
          value={twitter}
          onChange={setTwitter}
          icon={<SocialIcon bgColor="none" fgColor="black" network="twitter" />}
          iconPosition="right"
        />

        <Input
          label="YOUTUBE"
          placeholder="@channel or url.."
          value={youTube}
          onChange={setYouTube}
          icon={<SocialIcon bgColor="none" fgColor="#FF0000" network="youtube" />}
          iconPosition="right"
        />

        <div></div> <div></div>

        <Button >
            Save
        </Button>

      </div>
    </CollapsibleSection>
  );
}