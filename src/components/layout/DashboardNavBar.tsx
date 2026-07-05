import logo from "../../assets/faqt.png";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../ui/Button";
import { Rocket, LogOut } from "lucide-react";

function DashboardNavBar() {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const goToAuth = () => {
    setAnimating(true);

    setTimeout(() => {
      navigate({ to: "/auth" });
    }, 300);
  };

  const openPreview = () => {
    window.open("/preview", "_blank"); // or your public page route
  };

  const signOut = () => {
    // later: clear auth/session
    navigate({ to: "/auth" });
  };

  const goToHome = () => {
    // later: clear auth/session
    navigate({ to: "/" });
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="mx-auto">
          <nav className="flex items-center justify-between rounded-2xl bg-card/80 backdrop-blur-md px-5 py-3 shadow-sm border border-border">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-3xl bg-accent p-2" onClick={goToHome}>
                <img
                  src={logo}
                  alt="FAQT Logo"
                  className="h-full w-full object-contain"
                />
              </button>

              <span className="text-2xl font-bold tracking-tight text-text font-unica">
                Faqt
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">

              {/* Preview (external feel but no Button change) */}
              <Button onClick={openPreview} className="flex items-center gap-2">
                Publish
                <Rocket size={16} className="opacity-70" />
              </Button>

              {/* Sign out */}
              <button className="bg-black/10 hover:bg-white/20 transition rounded-lg p-2"
                onClick={signOut}>
                <LogOut size={20} className="text-whhite/80" />
              </button>
           
            </div>
          </nav>
        </div>
      </header>

      {/* transition overlay */}
      <div
        className={`fixed inset-0 bg-white transition-opacity duration-300 z-[999] ${
          animating ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}

export default DashboardNavBar;