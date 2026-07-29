export function getSocialUrl( platform: "instagram" | "facebook" | "x" | "tiktok" | "youtube", handle: string) {
  const cleanHandle = handle.trim().replace(/^@/, "");

  if (!cleanHandle) return "";

  switch (platform) {
    case "instagram":
      return `https://instagram.com/${cleanHandle}`;

    case "facebook":
      return `https://facebook.com/${cleanHandle}`;

    case "x":
      return `https://x.com/${cleanHandle}`;

    case "tiktok":
      return `https://tiktok.com/@${cleanHandle}`;

    case "youtube":
      return `https://youtube.com/@${cleanHandle}`;

    default:
      return "";
  }
}