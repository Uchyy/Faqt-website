import { useState } from "react";
import { demoPageBold } from "../../../demo/demoPage";
import PublicBanner from "../ui/PublicBanner";
import CircleAvatar from "../ui/CircleAvatar";
import { getBusinessInitials } from "../utils/generateInitals";
import {Phone} from "lucide-react"


function Navbar() {
  const [animating, setAnimating] = useState(false);

  const boldPage = demoPageBold;
  const logo = boldPage.branding.logo;

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className=" w-full">

          <PublicBanner banner={boldPage.banner} color={boldPage.branding.brandColor} />
          <nav className=" flex w-full items-center justify-between border border-border/60 bg-card/90 p-2 shadow-lg backdrop-blur-xl ">

            {/* Business Logo */}
            <div className="flex items-center gap-3">

              {logo? (
                <img
                  src={boldPage.branding.logo}
                  alt={boldPage.business.name}
                  className="h-10 w-10 rounded-xl object-cover"
                />
              ) : (
                <CircleAvatar color={boldPage.branding.brandColor} initials={getBusinessInitials(boldPage.business.name)}/>
              )}

              <span className="font-qahiri text-3xl font-semibold tracking-wide">
                {boldPage.business.name}
              </span>

            </div>

           {/* Actions */}
          <div className="flex items-center gap-3 bg-yellow">

            {boldPage.contact.phone && (
              <a href={`tel:${boldPage.contact.phone}`} className="hidden rounded-full border border-border px-5 py-2.5 text-sm font-semibold md:block ">
                <Phone size={20} color="#1d5233" height={40} />
              </a>
            )}

          </div>

          </nav>

        </div>
      </header>


      <div
        className={`fixed inset-0 z-[999] bg-white transition-opacity duration-300 ${
          animating ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}

export default Navbar;