import { Banner } from "../../model/Banner";
import { useBrandTheme } from "../context/BrandThemeContext";

type BannerProps = {
  banner?: Banner;
};

const bannerType = {
  info: {
    background: "#eff6ff",
    foreground: "#1d4ed8",
    icon: "✦",
  },
  warning: {
    background: "#fffbeb",
    foreground: "#b45309",
    icon: "⚠",
  },
  success: {
    background: "#ecfdf5",
    foreground: "#047857",
    icon: "✓",
  },
} as const;

export default function PublicBanner({ banner,}: Readonly<BannerProps>) {
  const theme = useBrandTheme();

  if (  !banner?.enabled || (banner.showUntil && new Date() > banner.showUntil)
  ) { return null; }

  const type = bannerType[banner.type];

  return (
    <div className="w-full overflow-x-clip border-y"
      style={{
        backgroundColor: `color-mix(in srgb, ${theme.accent} 12%, ${type.background})`,
        borderColor: theme.muted,
      }} >
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 pr-8">
            <span className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: type.foreground }}>
              {type.icon} {banner.message} {type.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}