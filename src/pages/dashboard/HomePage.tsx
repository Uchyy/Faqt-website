import DashboardContentBase from "../../components/ui/DashboardContentBase.tsx";
import { File, MessageCircleQuestionMark, Scissors, Megaphone} from "lucide-react";
import QuickActionItem from "../../components/layout/dashboard/home/QuickActionItem.tsx";
import WhatsHappening from "../../components/layout/dashboard/home/WhatsHappening.tsx";
import Tools from "../../components/layout/dashboard/home/Tools.tsx";
import PageSnapshot from "../../components/layout/dashboard/home/PageSnapshot.tsx";
import { useDashboardData } from "../../context/DashBoardDataContext.tsx";
import DashboardStats from "../../components/layout/dashboard/home/DashboardStatCard.tsx.tsx";
import PublicPagePreview from "../../publicpage/PublicPagePreview.tsx";

type EventType = "enquiry" | "improve" | "insight" | "team";

export default function HomePage() {
    const { page } = useDashboardData();
    const enquiries = page.enquiries;

    const quickActions = [
        { icon: <MessageCircleQuestionMark size={24} />, label: "Add a New FAQ", onClick: () => {} },
        { icon: <Scissors size={24} />, label: "Add a new service", onClick: () => {} },
        { icon: <Megaphone size={24} />, label: "Create announcement", onClick: () => {} },
        { icon: <File size={24} />, label: "Upload a document", onClick: () => {} },
    ];

    const greeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) return "Good Morning";
        if (currentHour < 18) return "Good Afternoon";
        return "Good Evening";
    }

    return (
        <DashboardContentBase
            title={greeting() + ", Uchenna! 🙌"}
            label="Here's what's happening with your faqt"
            rightButtonText="Preview"
            onRightButtonClick={() => {}}>

            <DashboardStats 
                page={page}
                enquiries={enquiries}
            />

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                
                <div className="order-2 md:order-1 lg:order-1 flex flex-col gap-4">
                    <div className=" bg-white rounded-2xl p-4 mb-2 shadow-lg transition hover:shadow-md  h-fit">
                        <h2 className="text-lg font-bold font-heading text-text mb-2">
                            Quick Actions
                        </h2>

                        {quickActions.map((action, index) => (
                            <QuickActionItem
                                key={index}
                                icon={action.icon}
                                label={action.label}
                                onClick={action.onClick}
                            />
                        ))}

                    </div>

                    <Tools page={page} />
                </div>

                <div className="order-1 md:order-2">
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



