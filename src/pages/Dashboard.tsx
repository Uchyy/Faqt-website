import DashboardNavbar from "../components/layout/DashboardNavBar";
import DashboardHero from "../components/layout/DashboardHero";
import BusinessInfo from "../components/dashboard/BusinessInfo";
import SocialMedia from "../components/dashboard/SocialLinksSection";
import ContactsSection from "../components/dashboard/ContactsSection";
import PageStyleSection from "../components/dashboard/PageStyleSection";
import MediaSection from "../components/dashboard/MediaSection";
import FaqSection from "../components/dashboard/FaqtSection";
import BannerSection from "../components/dashboard/BannerSection";
import SharePageSection from "../components/dashboard/SharePageSection";

function Dashboard(){
    return (
        <>
            <DashboardNavbar />

            <main className="w-full">

                <DashboardHero />

                <div className="  flex  flex-col  lg:flex-row gap-6 p-6 items-start">

                    {/* LEFT SIDE */}
                    <div className="flex-1 space-y-6  ">
                        <BusinessInfo />
                        <ContactsSection />
                        <SocialMedia />
                        <PageStyleSection />
                        <BannerSection />
                        <FaqSection />

                    </div>


                    {/* RIGHT SIDE */}
                    <aside className="  w-full  lg:w-[380px]  space-y-6  lg:sticky  lg:top-6">
                        <SharePageSection />
                        <MediaSection />
                    </aside>
                </div>
            </main>
        </>
    );
}  

export default Dashboard;