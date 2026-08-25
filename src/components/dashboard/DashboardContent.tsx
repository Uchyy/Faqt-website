import { useDashboardUI } from "../../context/DashboardUIContext";

import HomePage from "../../pages/dashboard/HomePage";
import BusinessInfoPage from "../../pages/dashboard/BuisnessInfoPage";
import SocialMedia from "../../pages/dashboard/SocialMedia";

import PageStyleSection from "./sections/appearance/PageStyleSection";

import SharePageSection from "./sections/share/SharePageSection";
import AppearancePage from "../../pages/dashboard/Appearance.";
import Media from "../../pages/dashboard/Media";
import DocumentPage from "../../pages/dashboard/DocumentsPage";
import FaqsPage from "../../pages/dashboard/Faqs";

export default function DashboardContent() {
    const { activeSubSection } = useDashboardUI();

    switch (activeSubSection) {
        case "business-information":
            return <BusinessInfoPage />;
        
        case "home":
            return <HomePage />;

        case "socials":
            return <SocialMedia />;

        case "theme":
            return <AppearancePage />;

        case "branding":
            return <PageStyleSection />;

        case "faqs":
            return <FaqsPage />;

        case "services":
            return null;

        case "media":
            return <Media />;

        case "documents":
            return <DocumentPage />;

        case "opening-hours":
            return null;

        case "enquiries":
            return null;

        case "updates":
            return null;

        case "share":
            return <SharePageSection />;

        case "settings":
            return null;

        case "account":
            return null;

        case "help":
            return null;

        default:
            return null;
    }
}