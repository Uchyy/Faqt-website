import {  createContext, useContext, useMemo, useState, type ReactNode,} from "react";


export type DashboardUIContextType = {
  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  activeSection: DashboardSection;
  setActiveSection: (section: DashboardSection) => void;
  activeSubSection: DashboardSubSection;
  setActiveSubSection: (section: DashboardSubSection) => void;
};

export type DashboardSection = | "information" | "appearance" | "content" | "share" | "account" | "settings" | "help";
export type DashboardSubSection =  | "business" | "contact" | "socials" | "style" | "banner" | "faqt" | "media" | "share";

const DashboardUIContext = createContext<DashboardUIContextType | null>(null);

export function DashboardUIProvider({children,}: Readonly<{ children: ReactNode;}>) {

  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => { setMenuOpen(true); };
  const closeMenu = () => {  setMenuOpen(false); };
  const toggleMenu = () => {
    setMenuOpen(prev => {
        console.log("menu:", !prev);
        return !prev;
    });
   };
   const [activeSection, setActiveSection] =  useState<DashboardSection>("information");
   const [activeSubSection, setActiveSubSection] =  useState<DashboardSubSection>("business");

  const value = useMemo( () => ({  menuOpen,  openMenu,  closeMenu,  toggleMenu, activeSection, setActiveSection, activeSubSection, setActiveSubSection }),[menuOpen, activeSection, activeSubSection],);

  return (
    <DashboardUIContext.Provider value={value}>
      {children}
    </DashboardUIContext.Provider>
  );
}

export function useDashboardUI(){
  const context = useContext(DashboardUIContext);

  if(!context){
    throw new Error(  "useDashboardUI must be used inside DashboardUIProvider");
  }
  return context;

}