import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../ui/Button";
import FaqtLogo from "../ui/FaqtLogo";

function Navbar() {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const goToAuth = () => {
    setAnimating(true);

    setTimeout(() => {
      navigate({ to: "/auth" });
    }, 300);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="mx-auto">
          <nav className="flex items-center justify-between rounded-2xl bg-card/80 backdrop-blur-md px-5 py-3 shadow-sm border border-border">

            {/* Logo */}
            <div className="flex items-center gap-3">
              {<FaqtLogo/>}

              <span className="text-2xl font-bold tracking-tight text-text font-unica">
                Faqt
              </span>
            </div>

            {/* Button */}
            <Button onClick={goToAuth}> Get Started  </Button>

          </nav>
        </div>
      </header>

      {/* 🔥 Full screen transition overlay */}
      <div
        className={`fixed inset-0 bg-white transition-opacity duration-300 z-[999] ${
          animating ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}

export default Navbar;