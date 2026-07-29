import { useBrandTheme } from "../context/BrandThemeContext";
import { HeroProps } from "../model/HeroProps";
import Divider from "../ui/Divider";


export default function MinimalHero({ shortDesc, longDesc, tagline, name,logo, }: Readonly<HeroProps>) {
  const theme = useBrandTheme();

  return (
    <section className="flex flex-col px-6 py-12 md:px-12 justify-items-center ">
        {/* Logo + Name */}
        <div className="mt-auto flex flex-col items-center gap-3 ">
            <Divider w="w-12 md:w-20" h="h-1" bgColor={theme.muted}/>
            {logo}

            <p className="font-unica text-lg tracking-[0.25em]"
            style={{
                color: theme.accent,
            }}>
            {name}
            </p>
        </div>

        {/* Short description */}
        <div className="self-center w-fit mt-5 lg:mt-8">
            <p className="whitespace-nowrap font-griffy text-xs text-[clamp(0.6rem,2vw,1rem)] tracking-wide text-center"
                style={{color: theme.gradient.hero}}>
            {shortDesc}
            </p>
        </div>

        {/* Tagline */}
        <div className="self-center w-full px-4"
            style={{ color: theme.accent, }}>
            <h1 className="font-germania text-5xl leading-[1.1] lg:text-7xl text-center">
            {tagline}
            </h1>
        </div>

        {/* Long description */}
        {longDesc && (
        <div className="mt-10 flex flex-col items-center gap-5">

            <Divider w="w-22 md:w-20" h="h-1" bgColor={theme.accent}/>
            <p className="max-w-xl text-center font-cinzel text-sm leading-8 tracking-[0.08em] md:text-lg"
                style={{  color: theme.foreground,}} >
                {longDesc}
            </p>
        </div>
        )}
    </section>
  );
}