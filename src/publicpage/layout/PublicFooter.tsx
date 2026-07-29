import { useBrandTheme } from "../context/BrandThemeContext";
import { Styles } from "../../model/Styles";

type PublicFooterProps = {
  name: string;
  shortDesc?: string;
  style: Styles;
};


export default function PublicFooter({
  name,
  shortDesc,
  style,
}: Readonly<PublicFooterProps>) {

  const theme = useBrandTheme();


  const getFooterStyle = () => {

    switch (style) {

      case "minimal":
        return {
          wrapper: "rounded-none border-t",
          padding: "py-8",
          shadow: "",
        };


      case "bold":
        return {
          wrapper: "rounded-t-[3rem] border",
          padding: "py-12",
          shadow: "shadow-[0_-8px_30px_rgba(0,0,0,0.12)]",
        };


      case "card":
        return {
          wrapper: "mx-4 border mb-5",
          padding: "py-10",
          shadow: "shadow-lg",
        };


      default:
        return {
          wrapper: "",
          padding: "py-10",
          shadow: "",
        };

    }

  };
  const current = getFooterStyle();
  return (

    <footer className={` mt-16 px-6 text-center ${current.wrapper} ${current.padding} ${current.shadow}`}
      style={{
        background: theme.background,
        borderColor: theme.muted,
        color: theme.foreground,
      }}>

      {/* Brand */}
      <div className="mb-6">
        <h2 className={` font-unica tracking-[0.3em] ${style === "bold" ? "text-3xl" : "text-2xl"}`}
          style={{  color: theme.accent,}}>
          {name}
        </h2>

        {shortDesc && (
          <p className=" mx-auto mt-3 max-w-xl font-griffy text-[clamp(0.6rem,2vw,1rem)] tracking-wide"
            style={{ color: theme.foreground,}} >
            {shortDesc}
          </p>

        )}
      </div>

      {/* Powered by */}
      <div className=" pt-6 text-xs uppercase tracking-[0.3em]"
        style={{ borderColor: theme.muted, color: theme.muted,}}>
        Powered by{" "}
        <a  href="/"  className="transition hover:opacity-70" style={{ color: theme.accent,}}>
          FAQT
        </a>
      </div>

    </footer>

  );
}