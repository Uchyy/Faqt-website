import { useDashboardUI } from "../../context/DashboardUIContext";

import BusinessInfo from "../dashboard/BusinessInfo";
import SocialMedia from "../dashboard/SocialLinksSection";
import ContactsSection from "../dashboard/ContactsSection";
import PageStyleSection from "../dashboard/PageStyleSection";
import MediaSection from "../dashboard/MediaSection" ;
import FaqSection from "../dashboard/FaqtSection";
import BannerSection from "../dashboard/BannerSection";
import SharePageSection from "../dashboard/SharePageSection";


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


        default:
            return null;
    }
}