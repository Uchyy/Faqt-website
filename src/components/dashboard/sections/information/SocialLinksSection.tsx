import { useContext, useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons'
import { PageContext } from "../../../../context/PageContext";
import { stringifyPage } from "../../../../model/Page";
import CollapsibleSection from "../../../ui/CollapsibleSection";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";


export default function SocialMedia() {
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [twitter, setTwitter] = useState("");
    const [youTube, setYouTube] = useState("");
  
    const context = useContext(PageContext);
  
    useEffect(() => {
      if (!context?.page) return;
  
      setInstagram(context.page.social.instagram);
      setFacebook(context.page.social.facebook);
      setTiktok(context.page.social.tiktok);
      setTwitter(context.page.social.x);
      setYouTube(context.page.social.youtube);
  
    }, [context?.page]);
  
  
    const handleSave = () => {
      const updatedPage = context?.updatePage({ social: {...context.page.social, instagram, facebook, tiktok, x: twitter, youtube: youTube} });
  
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
      title="SOCIAL MEDIA"
      label="Let customers discover and connect with you"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">

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

        <Button onClick={handleSave}>
            Save changes
        </Button>

      </div>
    </CollapsibleSection>
  );
}