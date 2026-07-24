import { Banner } from "./Banner";
import { BusinessDocument } from "./BusinessDocument";
import { FaqtItem } from "./FaqtItem";

export type Page = {
  id: string;

  business: BusinessSection;
  branding: BrandingSection;
  banner?: Banner;
  contact: ContactSection;
  social: SocialSection;
  faqts: FaqtItem[];
  documents: BusinessDocument[];
  publishing: PublishingSection;
  createdAt: Date;
  updatedAt: Date;
};

export type BusinessSection = {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: string;
};

export type BrandingSection = {
  selectedStyle: string;
  logo: string;
  coverImage: string;
  brandColor: string;
  gallery: string[];
};

export type ContactSection = {
  phone: string;
  email: string;
  website: string;
  whatsapp: string;
};


export type SocialSection = {
  instagram: string;
  facebook: string;
  x: string;
  tiktok: string;
  youtube: string;
};

export type PublishingSection = {
  isPublished: boolean;
  slug: string;
  publicUrl: string;
  qrCodeUrl: string;
};


export const emptyPage: Page = {
  id: crypto.randomUUID(),

  business: {
    name: "",
    tagline: "",
    shortDescription: "",
    longDescription: "",
    address: "",
  },

  branding: {
    selectedStyle: "minimal",
    logo: "",
    coverImage: "",
    brandColor: "#3EC7C4",
    gallery: [],
  },

  contact: {
    phone: "",
    email: "",
    website: "",
    whatsapp: "",
  },

  social: {
    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
    youtube: "",
  },

  faqts: [],
  documents: [],

  banner: {
    enabled: false,
    message: "",
    type: "info",
    showUntil: null,
  },

  publishing: {
    isPublished: false,
    slug: "",
    publicUrl: "",
    qrCodeUrl: "",
  },

  createdAt: new Date(),
  updatedAt: new Date(),
};

// Helper for debugging / sending data
export const stringifyPage = (page: Page) => {
  return JSON.stringify(
    page,
    (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }

      if (value instanceof File) {
        return {
          name: value.name,
          type: value.type,
          size: value.size,
        };
      }

      return value;
    },
    2
  );
};