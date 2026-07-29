import { ContactSection, SocialSection } from "../../model/Page";
import { FaqtItem } from "../../model/FaqtItem";
import { useBrandTheme } from "../context/BrandThemeContext";
import { Phone, Mail, Globe, MapPin, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Styles } from "../../model/Styles";
import ContactBlock from "../ui/ContactBlock";
import SocialBlock from "../ui/SocialBlock";
import FaqtBlock from "../ui/FaqtBlock";

type PublicBodyProps = {
  contact: ContactSection;
  address: string
  social: SocialSection;
  faqts: FaqtItem[];
  style: Styles;
};

export default function PublicBody({  contact, social, faqts, address, style }: Readonly<PublicBodyProps>) {

    const theme = useBrandTheme();
    


  return (
    <section className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-12 md:px-10"
      style={{ background: theme.background,  color: theme.foreground,}} >

      <ContactBlock  contact= {contact} style={style}/>

      {/* FAQTS */}
      <FaqtBlock address={address} faqts={faqts} style={style} />
     
      {/* SOCIALS */}
      <SocialBlock social={social} style={style}      />

    </section>
  );
}


