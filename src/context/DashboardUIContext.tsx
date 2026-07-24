import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type SidebarMode = "expanded" | "collapsed" | "mobile";
export type DashboardSection = "information" | "appearance" | "content" | "share" | "account";
export type DashboardSubSection = "business" | "contact" | "socials" | "style" | "banner" | "faqt" | "media" | "share"  | "settings" | "help" | "account" | "theme" | "media-content";

export type DashboardUIContextType = {
    menuOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    activeSection: DashboardSection;
    setActiveSection: (section: DashboardSection) => void;
    activeSubSection: DashboardSubSection;
    setActiveSubSection: (section: DashboardSubSection) => void;
    sidebarMode: SidebarMode;
    setSidebarMode: (mode: SidebarMode) => void;
    toggleSidebar: () => void;
};

const DashboardUIContext = createContext<DashboardUIContextType | null>(null);

export function DashboardUIProvider({ children }: Readonly<{ children: ReactNode }>) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<DashboardSection>("information");
    const [activeSubSection, setActiveSubSection] = useState<DashboardSubSection>("business");
    const [sidebarMode, setSidebarMode] = useState<SidebarMode>("expanded");

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const toggleSidebar = () => setSidebarMode(prev => prev === "expanded" ? "collapsed" : "expanded");

    const value = useMemo(() => ({
        menuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        activeSection,
        setActiveSection,
        activeSubSection,
        setActiveSubSection,
        sidebarMode,
        setSidebarMode,
        toggleSidebar
    }), [menuOpen, activeSection, activeSubSection, sidebarMode]);

    return (
        <DashboardUIContext.Provider value={value}>
            {children}
        </DashboardUIContext.Provider>
    );
}

export function useDashboardUI() {
    const context = useContext(DashboardUIContext);
    if (!context) throw new Error("useDashboardUI must be used inside DashboardUIProvider");
    return context;
}