import DashboardNavbar from "../components/layout/DashboardNavBar";
import DashboardHero from "../components/layout/DashboardHero";
import BusinessInfo from "../components/dashboard/BusinessInfo";
import SocialMedia from "../components/dashboard/SocialLinksSection";
import ContactsSection from "../components/dashboard/ContactsSection";
import PageStyleSection from "../components/dashboard/PageStyleSection";
import MediaSection from "../components/dashboard/MediaSection";
import FaqSection from "../components/dashboard/FaqtSection";

function Dashboard(){
    return (

        <>
            <DashboardNavbar />
            <DashboardHero />

            <BusinessInfo />
            <ContactsSection />
            <SocialMedia />
            <PageStyleSection/> 
            <MediaSection/>   
            <FaqSection/>
              
        </>    
    );
}    

export default Dashboard;