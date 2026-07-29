export function getBusinessInitials(name: string) {
  return name
    .trim()
    .split(/[\s-]+/)
    .map((word) =>
      word.toLowerCase() === "and" ? "&" : word[0].toUpperCase()
    )
    .join("");
}