import { useBrandTheme } from "../context/BrandThemeContext";
import { HeroProps } from "../model/HeroProps";



export default function CardHero({ shortDesc, longDesc, tagline, name,logo, }: Readonly<HeroProps>) {
  const theme = useBrandTheme();

  return (
    <section className="flex flex-col py-12 px-6 justify-items-center ">
        {/* Logo + Name */}
        <div className="flex gap-3 items-center justify-center mb-3">   
            {logo }
            <p className="font-unica text-lg tracking-[0.25em] p-2 rounded-2xl" style={{ color: theme.accent, background: theme.background }}>
            {name}
            </p>
        </div>

        {/* Short description */}       
        <div className="self-end w-fit mt-5 lg:mt-8 p-3 mb-5" style={{background: theme.background}}>
            <p className="whitespace-nowrap font-griffy text-xs text-[clamp(0.6rem,2vw,1rem)] tracking-wide text-center"
                style={{color: theme.foreground}}>
            {shortDesc}
            </p>
        </div>

        <div className="self-center w-full px-4"
            style={{ color: theme.accent, }}>
            <h1 className="font-griffy text-5xl leading-[1.1] lg:text-7xl text-center">
            {tagline}
            </h1>
        </div>

        {/* Long description */}
        {longDesc && (
        <div className="mt-8 w-fit self-start p-2 mr-4" style={{ background: theme.background }}>
            <p className=" text-left font-cinzel text-sm leading-8 tracking-[0.08em] md:text-lg" style={{ color: theme.foreground }}> {longDesc}
            </p>
        </div>
        )}

        
    </section>
  );
}