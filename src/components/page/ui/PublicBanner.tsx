import { Banner } from "../../../model/Banner";
import { isLightColor } from "../utils/isLightColour";

type BannerProps = {
  banner?: Banner;
  color: string;
};

const bannerType = {
  info: {
    light: "#eff6ff",
    dark: "#FDE74C",
    icon: "✦",
  },
  warning: {
    light: "#fffbeb",
    dark: "#92400e",
    icon: "⚠",
  },
  success: {
    light: "#ecfdf5",
    dark: "#047857",
    icon: "✓",
  },
};

export default function PublicBanner({ banner, color,}: Readonly<BannerProps>) {
  if (
    !banner?.enabled ||
    (banner.showUntil && new Date() > banner.showUntil)
  ) {
    return null;
  }

  const typeStyle = bannerType[banner.type];
  const lightBrand = isLightColor(color);

  const background = lightBrand ? typeStyle.light : `color-mix(in srgb, ${color} 12%, ${typeStyle.light})`;
  const textColor = lightBrand ? typeStyle.dark : color;

  return (
    <div
      className="w-full overflow-x-clip border-y"
      style={{ backgroundColor: background, borderColor: textColor,}}>
      <div className="flex w-max animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-6 pr-8">
            <span className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-widest"
              style={{  color: textColor,}}>
              {typeStyle.icon} {banner.message} {typeStyle.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}