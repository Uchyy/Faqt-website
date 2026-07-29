import { SocialIcon } from "react-social-icons";
import { SocialSection } from "../../model/Page";
import { useBrandTheme } from "../context/BrandThemeContext";
import { Styles } from "../../model/Styles";
import { getSocialUrl } from "../utils/getSocialUrl";

type PublicBodyProps = {
  social: SocialSection;
  style: Styles;
};

export default function SocialBlock  ({  social, style }: Readonly<PublicBodyProps>) {
    const theme = useBrandTheme();
    return (

        <div className={` items-center justify-center md:col-span-3 ${style === "card" ? "border p-6 shadow-lg" : ""}`} style={{ borderColor: theme.muted, }}>
        
            <h2 className={`mb-6 font-unica text-2xl tracking-[0.25em] md:text-lg md:w-full md:text-center md:justify-center ${ style === "card" ? "" : "w-fit border-y sm:border-y lg:border-0"}`} style={{color: theme.accent, borderColor: theme.accent}}>
                SOCIALS
            </h2>
    
            <div className="flex gap-4 md:flex-col md:items-center md:justify-center">
                {social.instagram && (
                    <a
                    href={getSocialUrl("instagram", social.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition hover:scale-110"
                    >
                    <SocialIcon
                        bgColor="transparent"
                        fgColor= {theme.foreground}
                        network="instagram"
                    />
                    </a>
                )}
    
                {social.facebook && (
                    <a
                     href={getSocialUrl("facebook", social.facebook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition hover:scale-110"
                    >
                    <SocialIcon
                        bgColor="transparent"
                        fgColor= {theme.foreground}
                        network="facebook"
                    />
                    </a>
                )}
    
                {social.x && (
                    <a
                     href={getSocialUrl("x", social.x)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="transition hover:scale-110"
                    >
                    <SocialIcon
                        bgColor="transparent"
                        fgColor= {theme.foreground}
                        network="twitter"
                    />
                    </a>
                )}
    
                {social.tiktok && (
                    <a
                     href={getSocialUrl("tiktok", social.tiktok)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="transition hover:scale-110"
                    >
                    <SocialIcon
                        bgColor="transparent"
                        fgColor= {theme.foreground}
                        network="tiktok"
                    />
                    </a>
                )}
    
                {social.youtube && (
                    <a
                     href={getSocialUrl("youtube", social.youtube)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="transition hover:scale-110"
                    >
                    <SocialIcon
                        bgColor="transparent"
                        fgColor= {theme.foreground}
                        network="youtube"
                    />
                    </a>
                )}
            </div>
    
            </div>

    );
}