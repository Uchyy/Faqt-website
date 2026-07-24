import { Page } from "../model/Page";

const now = new Date();

 export const createDemoPage = (page: Partial<Page>): Page => ({
  id: crypto.randomUUID(),
  documents: [],
  business: {
    name: "",
    tagline: "",
    shortDescription: "",
    longDescription: "",
    address: "",
    ...page.business,
  },

  branding: {
    selectedStyle: "minimal",
    logo: null,
    coverImage: null,
    brandColor: "#3EC7C4",
    gallery: [],
    ...page.branding,
  },

  contact: {
    phone: "",
    email: "",
    website: "",
    whatsapp: "",
    ...page.contact,
  },

  social: {
    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
    youtube: "",
    ...page.social,
  },

  faqts: page.faqts ?? [],

  banner: page.banner ?? {
    enabled: false,
    message: "",
    type: "info",
    showUntil: null,
  },

  publishing: {
    isPublished: true,
    slug: "",
    publicUrl: "",
    qrCodeUrl: "",
    ...page.publishing,
  },

  createdAt: now,
  updatedAt: now,
});