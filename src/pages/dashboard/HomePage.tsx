import DashboardContentBase from "../../components/ui/DashboardContentBase.tsx";
import { File, MessageCircleQuestionMark, Scissors, Megaphone} from "lucide-react";
import QuickActionItem from "../../components/layout/dashboard/home/QuickActionItem.tsx";
import WhatsHappening from "../../components/layout/dashboard/home/WhatsHappening.tsx";
import Tools from "../../components/layout/dashboard/home/Tools.tsx";
import PageSnapshot from "../../components/layout/dashboard/home/PageSnapshot.tsx";
import { useDashboardData } from "../../context/DashBoardDataContext.tsx";
import DashboardStats from "../../components/layout/dashboard/home/DashboardStatCard.tsx.tsx";
import PublicPagePreview from "../../publicpage/PublicPagePreview.tsx";
import PageCompletion from "../../components/ui/PageCompletion.tsx";
import { DashboardSection, DashboardSubSection, useDashboardUI } from "../../context/DashboardUIContext.tsx";

export default function HomePage() {
    const { page } = useDashboardData();
    const enquiries = page.enquiries;

    const quickActions = [
        { icon: <MessageCircleQuestionMark size={24} />, label: "Add a New FAQ", onClick: () => {navigateSection("content", "faqt")}, index:1 },
        { icon: <Scissors size={24} />, label: "Add a new service", onClick: () => {navigateSection("tools", "services")}, index:2},
        { icon: <Megaphone size={24} />, label: "Create announcement", onClick: () => {navigateSection("tools", "banner")}, index: 3},
        { icon: <File size={24} />, label: "Upload a document", onClick: () => {navigateSection("content", "media-content")}, index:4 },
    ];

    const greeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) return "Good Morning";
        if (currentHour < 18) return "Good Afternoon";
        return "Good Evening";
    }

    const { setActiveSection, setActiveSubSection } = useDashboardUI();

    const navigateSection = (section:DashboardSection, subSection:DashboardSubSection)=>{
        setActiveSection(section);
        setActiveSubSection(subSection);

        setTimeout(()=>{
            document.getElementById(subSection)?.scrollIntoView({behavior:"smooth",block:"start"});
        },100);
    };


    return (
        <DashboardContentBase
            title={greeting() + ", Uchenna! 🙌"}
            label="Here's what's happening with your faqt"
            rightButtonText="Preview"
            onRightButtonClick={() => {}}>


            {   page.publishing.isPublished ? (
                <DashboardStats 
                    page={page}
                    enquiries={enquiries}
                />

                ): (
                    <PageCompletion page={page}/>  
                )
            }   

           

            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6 mb-6">
                
                <div className="order-2 md:order-1 lg:order-1 flex flex-col gap-4">
                    <div className=" bg-white rounded-2xl p-4 mb-2 shadow-lg transition hover:shadow-md  h-fit">
                        <h2 className="text-lg font-bold font-heading text-text mb-2">
                            Quick Actions
                        </h2>

                        {quickActions.map((action, index) => (
                            <QuickActionItem
                                key={action.index}
                                icon={action.icon}
                                label={action.label}
                                onClick={action.onClick}
                            />
                        ))}

                    </div>

                    <Tools page={page} />
                </div>

                <div className="flex order-1 md:order-2">
                    <WhatsHappening page={page} />
                </div>

            </div>

            <PageSnapshot 
                businessName={page.business.name} 
                url={page.publishing.publicUrl} 
                status={ page.publishing.isPublished ? "Published" : "Draft"} 
                updatedAt= {page.updatedAt}
                snapshot = <PublicPagePreview page={page}/>
            />

        </DashboardContentBase>
    );
}



