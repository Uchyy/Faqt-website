import { X, Settings, CircleHelp, LogOut, ChevronDown, Building2, Palette, FileText, Share2, CircleUserRound, UserCog, Home, Wrench } from "lucide-react";
import {  useDashboardUI } from "../../context/DashboardUIContext";
import { useEffect, useState } from "react";
import FaqtLogoText from "../ui/FaqtLogoText";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "@tanstack/react-router";
import { useMediaQuery } from "../../utils/useScreenSize";
import FaqtLogo from "../ui/FaqtLogo";
import PopOver from "../ui/PopOver";
import { DashboardSection, DashboardSubSection } from "../../model/DashBoardSections";

export default function DashboardMenu(){
    const isDesktop = useMediaQuery("(min-width:1024px)");
    const isTablet = useMediaQuery("(min-width:768px)");

    const { menuOpen, closeMenu, setActiveSection, activeSection, activeSubSection, setActiveSubSection, sidebarMode, setSidebarMode } = useDashboardUI();
    const navigate = useNavigate();

    const collapsed = sidebarMode === "collapsed";

    useEffect(()=>{
        if(isDesktop) setSidebarMode("expanded");
        else if(isTablet) setSidebarMode("collapsed");
        else setSidebarMode("mobile");
    },[isDesktop,isTablet,setSidebarMode]);


    const navigateSection = (section:DashboardSection, subSection:DashboardSubSection)=>{
        setActiveSection(section);
        setActiveSubSection(subSection);
        if (!isDesktop || !isTablet) {closeMenu();}

        setTimeout(()=>{
            document.getElementById(subSection)?.scrollIntoView({behavior:"smooth",block:"start"});
        },100);
    };


    const signOut = ()=>{
        setTimeout(()=>navigate({to:"/auth"}),300);
    };

    if(sidebarMode === "mobile" && !menuOpen){
        return null;
    }


    return (
        <div className={` ${sidebarMode === "mobile" ? "fixed inset-0 z-[100]" : "relative"}`}>

            {sidebarMode === "mobile" && (  <button type="button" aria-label="Close menu" color="white" onClick={closeMenu} className="absolute inset-0 bg-black/30 "/>
            )}

            <aside className={`
                sticky top-0 h-screen bg-black border-r rounded-br-4xl border-border shadow-xl p-6 flex flex-col
                transition-all duration-300  
                ${sidebarMode === "expanded" && "w-80 "}
                ${sidebarMode === "collapsed" && "w-30 p-4"}
                ${sidebarMode === "mobile" && "absolute left-0 top-0 w-80 "}`}>

                <div className={`flex items-center ${sidebarMode === "collapsed" ? "justify-center" : "justify-between"} border-b border-border pb-4`}>
                    {sidebarMode === "collapsed" ? ( <FaqtLogo/> ) : (  <FaqtLogoText /> )}
                    {sidebarMode === "mobile" && (
                        <button type="button" onClick={closeMenu} className="rounded-xl p-2 hover:bg-black/5">
                            <X size={20} color="#ffffff"/>
                        </button>
                    )}
                </div>

                <nav className="no-scrollbar mt-8 flex-1 overflow-y-auto space-y-3 pr-2">
                    
                    <OverviewButton
                        active={activeSection === "home"}
                        collapsed={collapsed}
                        onClick={() => navigateSection("home", "home")}
                    />

                    <MenuGroup title="Information" icon={<Building2 size={18} color="#3EC7C4"/>} active={activeSection==="business"} collapsed={collapsed}>
                        <MenuButton active={activeSubSection==="business-information"} onClick={()=>navigateSection("business","business-information")}>Business Information</MenuButton>
                        <MenuButton active={activeSubSection==="socials"} onClick={()=>navigateSection("business","socials")}>Social Media</MenuButton>
                    </MenuGroup>


                    <MenuGroup title="Appearance" icon={<Palette size={18} color="#3EC7C4"/>} active={activeSection==="appearance"} collapsed={collapsed}>
                        <MenuButton active={activeSubSection==="theme"} onClick={()=>navigateSection("appearance","theme")}>Themes</MenuButton>

                        <MenuButton active={activeSubSection==="media"} onClick={()=>navigateSection("appearance","media")}>Media</MenuButton>
                    </MenuGroup>


                    <MenuGroup title="Content" icon={<FileText size={18} color="#3EC7C4"/>} active={activeSection==="content"} collapsed={collapsed}>
                        <MenuButton active={activeSubSection==="media"} onClick={()=>navigateSection("content","documents")}>Documents</MenuButton>
                        <MenuButton active={activeSubSection==="faqs"} onClick={()=>navigateSection("content","faqs")}>Faqt </MenuButton>
                    </MenuGroup>


                    <MenuGroup title="Share" icon={<Share2 size={18} color="#3EC7C4"/>} active={activeSection==="share"} collapsed={collapsed} last>
                        <MenuButton active={activeSubSection==="share"} onClick={()=>navigateSection("share","share")}>Share Page</MenuButton>
                    </MenuGroup>

                    <MenuGroup title="Tools" icon={<Wrench size={18} color="#3EC7C4"/>} active={activeSection==="tools"} collapsed={collapsed}>
                        <MenuButton active={activeSubSection==="opening-hours"} onClick={()=>navigateSection("tools","opening-hours")}>Opening Hours </MenuButton>
                        <MenuButton active={activeSubSection==="services"} onClick={()=>navigateSection("home","services")}>Services</MenuButton>
                        <MenuButton active={activeSubSection==="enquiries"} onClick={()=>navigateSection("home","enquiries")}>Enquiry</MenuButton>
                        <MenuButton active={activeSubSection==="banner"} onClick={()=>navigateSection("home","banner")}>Banner</MenuButton>
                    </MenuGroup>

                </nav>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        {collapsed ? (
                            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/10 hover:bg-black/20 transition">
                                <UserCog size={20} color="#3EC7C4"/>
                            </button>
                        ) : (
                            <button  type="button"className="flex items-center justify-between w-full rounded-2xl bg-black/10 hover:bg-black/20 transition p-3">
                                <div className="flex items-center gap-3">
                                    <UserCog size={20} color="#3EC7C4"/>
                                    <span className="text-sm font-unica uppercase font-bold tracking-[0.2rem] text-white">Account & Settings</span>
                                </div>
                                <ChevronDown size={16} color="#3EC7C4"/>
                            </button>
                        )}
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content className="w-56 rounded-xl border border-border bg-black shadow-lg p-2 mt-2" align="end">

                        <DropdownMenu.Item className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer outline-none hover:bg-accent/20">
                            <CircleUserRound size={18} color="#3EC7C4"/>
                            <span className="text-sm font-medium tracking-[0.2rem] text-white">Profile</span>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer outline-none hover:bg-accent/20">
                            <Settings size={18} color="#3EC7C4"/>
                            <span className="text-sm font-medium tracking-[0.2rem] text-white">Settings</span>
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer outline-none hover:bg-accent/20">
                            <CircleHelp size={18} color="#3EC7C4"/>
                            <span className="text-sm font-medium tracking-[0.2rem] text-white">Help & Support</span>
                        </DropdownMenu.Item>

                        <DropdownMenu.Separator className="my-2 h-px bg-border"/>

                        <DropdownMenu.Item
                            onClick={signOut}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer outline-none text-red-500 hover:bg-red-50" >
                            <LogOut size={18} color="red"/>
                            <span className="text-sm font-medium tracking-[0.2rem] text-white">Sign out</span>
                        </DropdownMenu.Item>

                    </DropdownMenu.Content>
                </DropdownMenu.Root>

            </aside>
        </div>
    );
}



function MenuGroup({title,children,active=false,icon,last=false,collapsed=false, onClick}:Readonly<{
    title:string;  children:React.ReactNode ; active?:boolean; icon:React.ReactNode, collapsed?:boolean; last?:boolean;  onClick?:()=>void; }>){
    const [open,setOpen] = useState(active);

    useEffect(()=>{
        if(active) setOpen(true);
    },[active]);

   if (collapsed) {
    return (
            <PopOver
                title={title}
                icon={
                    <div data-tooltip-id="sidebar-tooltip" data-tooltip-content={title}>
                        {icon}
                    </div>
                }
                active={active} >
                {children}
            </PopOver>
        );
    }

    return (
        <div className={`rounded-2xl p-3 transition ${active ? "bg-accent/10" : "bg-black"} ${last ? "mb-6" : "mb-2"}`}>

            <button type="button" onClick={
                ()=>setOpen(v=>!v)
                } 
                className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    {icon}
                    <span className={`text-sm font-bold uppercase font-unica tracking-[0.2rem] text-white ${active ? "text-white" : ""}`}>
                        {title}
                    </span>
                </div>
                <ChevronDown size={16} color="#3EC7C4" className={`transition ${open ? "rotate-180" : ""}`}/>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-96 mt-3 space-y-4" : "max-h-0"}`}>   
                {children}
            </div>

        </div>
    );
}



function MenuButton({children,onClick,active=false,className=""}:Readonly<{
    children:React.ReactNode;  onClick?:()=>void; active?:boolean; className?:string; }>){
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center font-sm gap-3 w-full px-3 py-2.5 transition text-white hover:bg-accent/10 font-cinzel tracking-[0.02rem] ${active ? "border-l-4 border-accent text-accent font-bold " : ""} ${className}`}>
            {children}
        </button>
    );
}  



function OverviewButton({ active, collapsed, onClick,}: Readonly<{ active: boolean; collapsed: boolean; onClick: () => void;}>) {

    return (
        <div className={`rounded-2xl p-3 mb-2 transition ${ active ? "bg-accent/10" : "bg-black" }`}>
            {collapsed ? (
                <button
                    type="button"
                    onClick={onClick}
                    data-tooltip-id="sidebar-tooltip"
                    data-tooltip-content="Overview"
                    className="flex items-center justify-center w-full">
                    <Home size={18} color="#3EC7C4" />
                </button>
            ) : (
                <button type="button" onClick={onClick} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <Home size={18} color="#3EC7C4" />
                        <span className="text-sm font-bold uppercase font-unica tracking-[0.2rem] text-white">
                            Overview
                        </span>
                    </div>
                </button>
            )}
        </div>
    );
}

