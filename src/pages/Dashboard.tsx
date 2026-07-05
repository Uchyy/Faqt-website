import DashboardNavbar from "../components/layout/DashboardNavBar";
import DashboardHero from "../components/layout/DashboardHero";
import BusinessInfo from "../components/dashboard/BusinessInfo";
import SocialMedia from "../components/dashboard/SocialLinksSection";
import ContactsSection from "../components/dashboard/ContactsSection";

function Dashboard(){
    return (

        <>
            <DashboardNavbar />
            <DashboardHero />

            <BusinessInfo />
            <ContactsSection />
            <SocialMedia />


            
        </>    
    );
}    

export default Dashboard;