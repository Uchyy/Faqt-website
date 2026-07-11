export function generatePageDetails( businessName: string, baseUrl = "https://faqt.app") {
  const slug = businessName
    .trim()
    .toLowerCase()
    .replaceAll('&', "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return {
    slug,
    publicUrl: `${baseUrl}/${slug}`,
  };
}