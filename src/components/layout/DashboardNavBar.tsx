import logo from "../../assets/faqt.png";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../ui/Button";
import { Rocket, Eye, Menu, } from "lucide-react";
import { useDashboardUI } from "../../context/DashboardUIContext";

function DashboardNavBar() {
    const navigate = useNavigate();
    const { toggleMenu } = useDashboardUI();
    const [animating, setAnimating] = useState(false);

    const openPreview = () => window.open("/preview", "_blank");
    const publishPage = () => console.log("publish");
    const goHome = () => navigate({ to: "/" });
    const signOut = () => {
      setAnimating(true);

      setTimeout(() => {
        navigate({ to: "/auth" });
      }, 300);
    };

    return (
        <>
            <header className="sticky top-0 z-50">
                <nav className="flex items-center justify-between rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-sm px-4 py-3">

                    <div className="flex items-center gap-3">
                        <button onClick={toggleMenu} className="h-10 w-10 rounded-xl bg-black/5 hover:bg-black/10 transition flex items-center justify-center">
                            <Menu size={22}/>
                        </button>

                        <button onClick={goHome} className="h-10 w-10 rounded-xl bg-accent p-2">
                            <img src={logo} alt="Faqt" className="h-full w-full object-contain"/>
                        </button>

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