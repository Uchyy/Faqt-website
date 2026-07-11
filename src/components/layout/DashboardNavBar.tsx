import logo from "../../assets/faqt.png";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../ui/Button";
import { Rocket, CircleUserRound, ChevronDown, Settings, CircleHelp, LogOut, Eye } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


function DashboardNavBar() {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const openPreview = () => {
    window.open("/preview", "_blank"); // or your public page route
  };

  const signOut = () => {
    setAnimating(true);

    setTimeout(() => {
      navigate({ to: "/auth" });
    }, 300);
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
                <Rocket size={20} className="opacity-70" />
              </Button>

              <Button onClick={openPreview} className="flex items-center gap-2">
                <Eye size={20} className="opacity-70" />
              </Button>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="bg-black/10 hover:bg-black/20 transition rounded-3xl p-3">
                    <div className="flex items-center gap-1">
                      <CircleUserRound size={20} className="text-black/80" />
                      <ChevronDown size={15} className="text-black/80" />
                    </div>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content
                  className="w-56 rounded-xl border border-border bg-white shadow-lg p-2 mt-2" align="end">

                  {/* Account */}
                  <DropdownMenu.Item
                    className="
                      flex items-center gap-3 rounded-lg px-3 py-2 
                      cursor-pointer outline-none
                      hover:bg-accent/20 ">
                    <CircleUserRound size={18} />
                    <span className="text-sm font-medium">
                      Profile
                    </span>
                  </DropdownMenu.Item>


                  {/* Settings */}
                  <DropdownMenu.Item
                    className="
                      flex items-center gap-3 rounded-lg px-3 py-2 
                      cursor-pointer outline-none
                      hover:bg-accent/20 ">
                    <Settings size={18} />
                    <span className="text-sm font-medium">
                      Settings
                    </span>
                  </DropdownMenu.Item>


                  {/* Help */}
                  <DropdownMenu.Item
                    className="
                      flex items-center gap-3 rounded-lg px-3 py-2 
                      cursor-pointer outline-none
                      hover:bg-accent/20 ">
                    <CircleHelp size={18} />
                    <span className="text-sm font-medium">
                      Help & Support
                    </span>
                  </DropdownMenu.Item>


                  {/* Divider */}
                  <DropdownMenu.Separator className="my-2 h-px bg-border" />


                  {/* Logout */}
                  <DropdownMenu.Item
                    onClick={signOut}
                    className="
                      flex items-center gap-3 rounded-lg px-3 py-2
                      cursor-pointer outline-none
                      text-red-500
                      hover:bg-red-50">
                    <LogOut size={18} />
                    <span className="text-sm font-medium">
                      Sign out
                    </span>
                  </DropdownMenu.Item>


                </DropdownMenu.Content>
              </DropdownMenu.Root>          
           
            </div>
          </nav>
        </div>
      </header>

      {/* transition overlay */}
      <div className={`fixed inset-0 bg-white transition-opacity duration-300 z-[999] ${
          animating ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}

export default DashboardNavBar;