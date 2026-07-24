export function isLightColor(hex: string) {
  const rgb = hex.replace("#", "");

  const r = Number.parseInt(rgb.substring(0, 2), 16);
  const g = Number.parseInt(rgb.substring(2, 4), 16);
  const b = Number.parseInt(rgb.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 180;
}