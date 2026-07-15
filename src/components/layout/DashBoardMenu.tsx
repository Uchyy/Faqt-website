import { X, User, Settings, CircleHelp, LogOut, ChevronDown, Building2, Palette, FileText, Share2  } from "lucide-react";
import { DashboardSection, DashboardSubSection, useDashboardUI } from "../../context/DashboardUIContext";
import { useState } from "react";
import FaqtLogoText from "../ui/FaqtLogo";

type SidebarMode = "expanded" | "collapsed"

export default function DashboardMenu(){

    const { menuOpen, closeMenu, setActiveSection, activeSection, activeSubSection, setActiveSubSection } = useDashboardUI();
    const navigate = (section: DashboardSection, subSection: DashboardSubSection ) => {
        setActiveSection(section);
        setActiveSubSection(subSection);
        closeMenu();

        setTimeout(() => {
            document
            .getElementById(subSection)
            ?.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        },100);
    };

    //if(!menuOpen && window.innerWidth < 1024) return null;
    if(!menuOpen){ return null; }
    
    return (
        <div className="fixed inset-0 z-[100]">
            {/* Overlay */}
            <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute inset-0 bg-black/30 cursor-default shrink-0" />

            {/* Menu */}
            <aside className=" relative h-full w-80 bg-white border-t border-border shadow-xl p-6 animate-in slide-in-from-left flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center">
                   <FaqtLogoText/>

                    <button onClick={closeMenu}  className="rounded-xl p-2 hover:bg-black/5">
                        <X size={20}/>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-8 flex-1 overflow-y-auto space-y-6 pr-2">
                    <MenuGroup title="Information"  icon={<Building2 size={18}/>} active={activeSection === "information"}>
                        <MenuButton active={activeSubSection === "business"} onClick={() => navigate("information", "business")}>
                            Business Information
                        </MenuButton>
                        <MenuButton  active={activeSubSection === "contact"}  onClick={() => navigate("information", "contact")}>
                            Contact Information
                        </MenuButton>
                        <MenuButton active={activeSubSection === "socials"}  onClick={() => navigate("information", "socials")}>
                            Social Media
                        </MenuButton>
                    </MenuGroup>

                    <MenuGroup title="Appearance"  icon={<Palette size={18}/>} active={activeSection === "appearance"}>
                        <MenuButton active={activeSubSection === "style"}  onClick={() => navigate("appearance", "style")}> Appearance </MenuButton>
                    </MenuGroup>

                    <MenuGroup title="Content"  icon={<FileText size={18}/>} active={activeSection === "content"}>
                        <MenuButton active={activeSubSection === "banner"}  onClick={() => navigate("content", "banner")}>  Banner </MenuButton>
                        <MenuButton  active={activeSubSection === "media"} onClick={() => navigate("content", "media")}>  Resources & Media </MenuButton>
                        <MenuButton  active={activeSubSection === "faqt"} onClick={() => navigate("content", "faqt")}>  Faqt Section </MenuButton>
                    </MenuGroup>

                    <MenuGroup title="Share"   icon={<Share2 size={18}/>} active={activeSection === "share"}>
                        <MenuButton  active={activeSection === "share"} onClick={() => navigate("share", "share")}> Share Page </MenuButton>
                    </MenuGroup>
                </nav>

                {/* Footer */}
                <div className=" shrink-0 border-t border-border pt-2 space-y-1">
                    <MenuButton><User size={17}/> Account </MenuButton>
                    <MenuButton> <Settings size={17}/>  Settings </MenuButton>
                    <MenuButton> <CircleHelp size={17}/>  Help & Support </MenuButton>

                    <MenuButton className="text-red-500">  <LogOut size={17}/>  Sign out</MenuButton>
                </div>
            </aside>
        </div>
    );
}

function MenuGroup({ title, children, active = false, icon }: Readonly<{ title: string; children: React.ReactNode; active?: boolean,  icon:React.ReactNode; }>) {
    const [open, setOpen] = useState(true);

    return (
        <div className={`rounded-2xl p-3 mb-2 transition ${active ? "bg-accent/10" : "bg-black/[0.03]"}`}>
            <button onClick={() => setOpen(prev => !prev)} className={`flex items-center justify-between w-full px-2 text-heading font-bold uppercase tracking-wide transition ${active ? "text-accent" : "text-muted-foreground hover:text-text"}`}>
                {icon}
                {title}
                <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3 space-y-1" : "max-h-0"}`}>
                {children}
            </div>
        </div>
    );
}


function MenuButton({ children, onClick, active = false, className = "" }: Readonly<{ children: React.ReactNode; onClick?: () => void; active?: boolean; className?: string }>) {
    return (
        <button onClick={onClick} className={`flex items-center gap-3 w-full text-left px-3 py-2.5 transition-all duration-200 ${active ? "text-text font-semibold border-l-4 border-accent" : "text-muted-foreground hover:bg-accent/10"} ${className}`}>
            {children}
        </button>
    );
}