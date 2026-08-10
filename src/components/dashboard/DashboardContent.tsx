import { useDashboardUI } from "../../context/DashboardUIContext";
import PageStyleSection from "./sections/appearance/PageStyleSection";
import MediaSection from "./sections/content/MediaSection" ;
import FaqSection from "./sections/content/FaqtSection";
import BannerSection from "./sections/content/BannerSection";
import SharePageSection from "./sections/share/SharePageSection";
import ContentMedia from "./sections/appearance/ContentMedia";
import ContactsSection from "./sections/information/ContactsSection";
import HomePage from "../../pages/dashboard/HomePage";
import BusinessInfoPage from "../../pages/dashboard/BuisnessInfoPage";
import SocialMedia from "../../pages/dashboard/SocialMedia";


export default function DashboardContent(){

    const { activeSubSection } = useDashboardUI();
    switch(activeSubSection){

        case "home":
            return <HomePage />
        case "business":
            return   <BusinessInfoPage />
        case "contact":
            return <ContactsSection />
        case "socials":
            return <SocialMedia />
        case "style":
            return <PageStyleSection />
        case "media-content":
            return <ContentMedia />
        case "banner":
            return <BannerSection />
        case "faqt":
            return <FaqSection />
        case "media":
            return <MediaSection />
        case "share":
            return <SharePageSection />
        case "settings":
            return null;
        case "help":
            return null;
        case "account":
        case "theme":
        case "enquiry":
        case "openingHours":
        case "services": 

        default: return null;
    }
}