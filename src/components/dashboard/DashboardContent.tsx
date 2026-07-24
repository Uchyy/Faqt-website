import { useDashboardUI } from "../../context/DashboardUIContext";
import PageStyleSection from "./sections/appearance/PageStyleSection";
import MediaSection from "./sections/content/MediaSection" ;
import FaqSection from "./sections/content/FaqtSection";
import BannerSection from "./sections/content/BannerSection";
import SharePageSection from "./sections/share/SharePageSection";
import ContentMedia from "./sections/appearance/ContentMedia";
import SocialMedia from "./sections/information/SocialLinksSection";
import ContactsSection from "./sections/information/ContactsSection";
import BusinessInfo from "./sections/information/BusinessInfo";


export default function DashboardContent(){

    const { activeSection } = useDashboardUI();
    switch(activeSection){

        case "information":
            return (
                <div className="space-y-6">
                    <BusinessInfo />
                    <ContactsSection />
                    <SocialMedia />
                </div>
            );

        case "appearance":
            return (
                <div className="space-y-6">
                    <PageStyleSection />
                    <ContentMedia />
                </div>
            );

        case "content":
            return (
                <div className="space-y-6">
                    <BannerSection />
                    <MediaSection />
                    <FaqSection />
                </div>
            );

        case "share":
            return (
                <div className="space-y-6">
                    <SharePageSection />
                </div>
            );

        default: return null;
    }
}