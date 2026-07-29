import { Mail, Phone } from "lucide-react";
import { ContactSection } from "../../model/Page";
import { useBrandTheme } from "../context/BrandThemeContext";
import { Styles } from "../../model/Styles";
import { ReactNode } from "react";

type PublicBodyProps = {
  contact: ContactSection;
  style: Styles;
};

type RoundedCardProps = {
  icon: ReactNode;
  label?: string;
  value: string;
  onClick: () => void;
  style: Styles;
};

export default function ContactBlock ({  contact, style }: Readonly<PublicBodyProps>) {
    const theme = useBrandTheme();
      const getSectionStyle = () => {
        switch (style) {
            case "bold":
            return "rounded-3xl";
    
            case "card":
            return "border shadow-lg";
    
            default:
            return "";
        }
        };
    
    
        const getSectionPadding = () => {
        switch (style) {
            case "bold":
            return "";
    
            case "card":
            return "p-6";
    
            default:
            return "";
        }
        };

    return (

      <div className={` items-start justify-center md:col-span-3 ${getSectionStyle()} ${getSectionPadding()} `}
        style={{  borderColor: theme.muted, }}>
        <h2 className={`mb-6 font-unica text-2xl tracking-[0.25em] md:text-lg ${ style === "card" ? "" : "w-fit border-y sm:border-y lg:border-0"}`} style={{color: theme.accent, borderColor: theme.accent}}>
          CONTACTS
        </h2>

        <div className="flex gap-4 overflow-x-auto md:flex-col">

          {contact.phone && (
            <RoundedCard
              icon={<Phone size={20}/>}
              label="Phone"
              value={contact.phone}
              style={style}
              onClick={() => window.location.href=`tel:${contact.phone}`}
            />
          )}

          {contact.email && (
            <RoundedCard
              icon={<Mail size={20}/>}
              label="Email"
              value={contact.email}
              style={style}
              onClick={() => window.location.href=`mailto:${contact.email}`}
            />
          )}

        </div>
      </div>
    );
}


function RoundedCard({ icon, label, value, onClick, style,}: Readonly<RoundedCardProps>) {

  const theme = useBrandTheme();
  const getButtonStyle = () => {
    switch (style) {
      case "bold":
        return {
          rounded: "rounded-full",
          padding: "p-3",
        };

      case "card":
        return {
          rounded: "rounded-none",
          padding: "p-4",
        };

      default:
        return {
          rounded: "",
          padding: "p-3",
        };
    }
  };


  const getIconStyle = () => {
    switch (style) {
      case "minimal":
        return "rounded-lg";

      case "bold":
        return "rounded-full";

      case "card":
        return "rounded-none";

      default:
        return "";
    }
  };


  const cardStyle = getButtonStyle();


  return (
    <button onClick={onClick} className={` flex w-fit items-center gap-4 border transition hover:-translate-y-1 md:w-fit sm:w-full
        ${cardStyle.rounded} ${cardStyle.padding} `} style={{ background: theme.background, borderColor: theme.muted,}}>

      {/* Icon */}
      <div
        className={` flex h-10 w-10 shrink-0 items-center justify-center ${getIconStyle()} `}
        style={{ background: theme.accent, color: theme.background, }}>
        {icon}
      </div>


      {/* Content */}
      <div className="hidden md:hidden min-w-0 flex-col overflow-hidden sm:flex">

        {label && (
          <span className="text-left text-xs uppercase tracking-widest"
            style={{ color: theme.accent,}}>
            {label}
          </span>
        )}


        <span className="truncate text-sm font-medium" style={{ color: theme.foreground,}}>
          {value}
        </span>

      </div>
    </button>
  );
}