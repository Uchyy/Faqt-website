import { ReactNode } from "react";
import { Phone, MapPin } from "lucide-react";
import { useBrandTheme } from "../context/BrandThemeContext";
import { Styles } from "../../model/Styles";


type PublicPageNavbarProps = {
  logo: ReactNode;
  name: string;
  desc: string;
  phone?: string;
  address?: string;
  style: Styles;
};


function PublicPageNavbar({
  logo,
  name,
  desc,
  phone,
  address,
  style,
}: Readonly<PublicPageNavbarProps>) {

  const theme = useBrandTheme();


  const navStyle = () => {
    switch (style) {

      case "minimal":
        return {
          wrapper: "",
          nav: "rounded-none border-b",
          button: "rounded-lg",
        };

      case "card":
        return {
          wrapper: "px-4",
          nav: "rounded-2xl shadow-xl",
          button: "rounded-xl",
        };


      default:
        return {
          wrapper: "",
          nav: "rounded-full",
          button: "rounded-full",
        };
    }
  };


  const current = navStyle();


  return (
    <header className="sticky top-0 z-50">
      <div className={`w-full px-2 sm:mx-auto md:max-w-7xl sm:px-4 ${current.wrapper}`}>

        <nav
          className={`mt-3 mb-1 flex items-center justify-between border p-3 backdrop-blur-xl ${current.nav}`}
          style={{ backgroundColor: `${theme.background}dd`, borderColor: theme.muted,}}>
          {/* Business */}
          <div className="flex items-center gap-3">

            {logo}
            <div className="flex flex-col">
              <span
                className="font-unica  sm:tracking-[0.05em] md:tracking-[0.15em] sm:text-xs"
                style={{ color: theme.accent, }}>
                {name}
              </span>

              <span
                className="hidden text-xs font-semibold uppercase tracking-[0.05em] sm:block"
                style={{ color: theme.foreground, }}>
                {desc}
              </span>

            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={` flex items-center justify-center border p-2 transition hover:scale-105 ${current.button}`}
                style={{ borderColor: theme.muted, color: theme.accent,}}>
                <MapPin size={15}/>
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                className={` flex items-center justify-center border p-2 transition hover:scale-105 ${current.button}`}
                style={{ color: theme.background, backgroundColor: theme.accent, borderColor: theme.accent, }}>
                <Phone size={15}/>
              </a>
            )}
          </div>
        </nav>

      </div>
    </header>
  );
}


export default PublicPageNavbar;