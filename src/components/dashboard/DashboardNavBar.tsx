import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../ui/Button";
import { Rocket, Eye, Menu, } from "lucide-react";
import { useDashboardUI } from "../../context/DashboardUIContext";
import FaqtLogo from "../ui/FaqtLogo";

function DashboardNavBar() {
    const navigate = useNavigate();
    const [animating,] = useState(false);
    const { sidebarMode, openMenu } = useDashboardUI();

    const openPreview = () => window.open("/preview", "_blank");
    const publishPage = () => console.log("publish");
    const goHome = () => navigate({ to: "/" });
    

    return (
        <>
            <header className="sticky top-0 z-50">
                <nav className={` flex items-center justify-between bg-white/80 backdrop-blur-md border border-border shadow-sm  ${sidebarMode === "mobile" ? "px-4 py-3 rounded-bl-2xl rounded-br-2xl " : "p-4 "}`}>

                    <div className="flex items-center gap-3">
                        {sidebarMode === "mobile" && (
                        <button  onClick={openMenu} className="rounded-xl p-2 hover:bg-black/5">
                            <Menu size={22}/>
                        </button>
                        )}

                        { sidebarMode === "mobile" ?
                        <button onClick={goHome} >
                           <FaqtLogo/>
                        </button>
                        : <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                Dashboard
                            </p>
                        }

                    </div>


                    <div className="flex items-center gap-2">
                        <Button onClick={openPreview} className="py-3 px-1">
                            <Eye  height={20} width={15}/>
                        </Button>

                        <Button onClick={publishPage} className="py-3 px-1">
                            <Rocket height={20} width={15}/>
                        </Button>
                    </div>

                </nav>
            </header>

            <div className={`fixed inset-0 bg-white transition-opacity duration-300 z-[999] ${animating ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
        </>
    );
}

export default DashboardNavBar;