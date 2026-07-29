// utils/createBrandTheme.ts

import { BrandTheme } from "../../model/BrandTheme";
import { isLightColor } from "./isLightColour";

export function createBrandTheme(color: string): BrandTheme {
  const light = isLightColor(color);

  const background = light ? "#000000" : "#ffffff";
  const foreground = light ? "#ffffff" : "#000000";

  const muted = light
    ? `color-mix(in srgb, ${color} 20%, #666666)`
    : `color-mix(in srgb, ${color} 20%, white)`;

  return {
    accent: color,
    background,
    foreground,
    muted,
    isLight: light,

    gradient: {
      page: `linear-gradient(
        180deg,
        ${background} 0%,
        ${muted} 55%,
        ${color} 100%
      )`,

      hero: `linear-gradient(
        180deg,
        ${background} 0%,
        ${muted} 45%,
        color-mix(in srgb, ${color} 20%, ${background}) 100%
      )`,

      card: `linear-gradient(
        135deg,
        ${muted} 0%,
        ${background} 100%
      )`,
    },
  };
}