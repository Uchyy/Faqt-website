import {  ChevronRight,  Clock3, MessageCircleQuestion, Megaphone,  BriefcaseBusiness, Calendar1 } from "lucide-react";
import { Page } from "../../../../model/Page";
import { DashboardSection, DashboardSubSection, useDashboardUI } from "../../../../context/DashboardUIContext";


type Props = {
    page: Page;
};


export default function Tools({ page }: Readonly<Props>) {

    const { setActiveSection, setActiveSubSection } = useDashboardUI();

    const navigateSection = (section:DashboardSection, subSection:DashboardSubSection)=>{
        setActiveSection(section);
        setActiveSubSection(subSection);

        setTimeout(()=>{
            document.getElementById(subSection)?.scrollIntoView({behavior:"smooth",block:"start"});
        },100);
    };

    const tools = [
        {
            name: "Services",
            icon: <BriefcaseBusiness size={18} />,
            enabled: page.tools.services,
        },
        {
            name: "Enquiries",
            icon: <MessageCircleQuestion size={18} />,
            enabled: page.tools.enquiries,
        },
        {
            name: "Banner",
            icon: <Megaphone size={18} />,
            enabled: page.tools.banner,
        },
        {
            name: "Opening Hours",
            icon: <Clock3 size={18} />,
            enabled: page.tools.openingHours,
        },
        {
            name: "Updates",
            icon: <Calendar1 size={18} />,
            enabled: page.tools.updates
        }
    ];


    return (
        <div className="rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-md">

            <div className="mb-4">
                <h2 className="font-heading text-lg font-bold text-text">
                    Tools at a Glance
                </h2>

                <p className="mt-1 font-blackOps text-xs font-semibold tracking-[0.02rem] text-muted-foreground">
                    Manage features that help customers interact with your page.
                </p>
            </div>


            <div className="flex items-center gap-3">

                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        title={`${tool.name}${tool.enabled ? "" : " (Disabled)"}`}
                        className={`flex h-20 w-20 items-center justify-center rounded-xl ${tool.enabled ? "bg-accent/10 text-accent" : "bg-black/5 text-muted-foreground"}`}>
                        {tool.icon}
                    </div>
                ))}

            </div>

            <div className="mt-4 h-px bg-border" />

            <button type="button" className="flex w-full items-center gap-3 rounded-xl py-2 text-left transition hover:bg-accent/5" onClick={() => {navigateSection("tools", "tools")}}>

                <span className="font-blackOps text-sm font-bold text-accent">
                    Manage all tools
                </span>

                <ChevronRight
                    size={18}
                    className="ml-auto text-muted-foreground"
                />
            </button>

        </div>
    );
}