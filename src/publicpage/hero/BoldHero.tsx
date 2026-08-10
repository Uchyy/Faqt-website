import { useBrandTheme } from "../context/BrandThemeContext";
import { HeroProps } from "../model/HeroProps";


export default function BoldHero({ shortDesc, longDesc, tagline, name,logo, }: Readonly<HeroProps>) {
  const theme = useBrandTheme();

  return (
    <section className="flex flex-col gap-8 px-6 py-12 md:px-12 md:ml-5 ">
      {/* Logo + Name */}
      <div className="ml-auto flex items-center gap-3 ">
         {logo }

        <p className="font-unica text-lg tracking-[0.25em]"
          style={{
            color: theme.accent,
          }}>
          {name}
        </p>
      </div>


      {/* Short description */}
      <div className="w-fit rounded-full border px-4 py-2"
        style={{
          color: theme.foreground,
          background: theme.background,
          borderColor: theme.muted,
          boxShadow: "8px 8px 0 rgba(0,0,0,0.12)",
        }} >
        <p className="whitespace-nowrap font-griffy text-[clamp(0.6rem,2vw,1rem)] tracking-wide">
          {shortDesc}
        </p>
      </div>


       <div className="flex flex-col gap-4 lg:flex-row ">

            {/* Tagline */}
            <div className="w-full md:w-4/6"
                style={{
                color: theme.accent,
                textShadow: `
                    5px 5px 0 rgba(0,0,0,.15),
                    9px 9px 0 rgba(0,0,0,.08)
                `,
                }}>
                <h1 className="font-germania text-5xl font-black uppercase leading-[1.1]  lg:text-9xl">
                {tagline}
                </h1>
            </div>

            {/* Long description */}
            {longDesc && (
                <div className="ml-auto w-full lg:w-2/6 mt-5 lg:mt-35 lg:mb-25 ">
                    <p className="font-griffy text-sm leading-8 tracking-[0.18em] md:text-lg text-right"
                        style={{ color: theme.foreground, }}>
                        {longDesc}
                    </p>
                </div>
            )}
       </div> 
    </section>
  );
}