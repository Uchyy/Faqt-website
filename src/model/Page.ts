import { Banner } from "./Banner";
import { BusinessDocument } from "./BusinessDocument";
import { FaqtItem } from "./FaqtItem";

export type Page = {
  id: string;

  // Business information
  businessName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: string;

  // Branding
  selectedStyle: string;
  logo: File | null;
  coverImage: File | null;
  brandColor: string;
  documents: BusinessDocument[];
  gallery: File[];

  //Banner
  banner?: Banner;

  // Contact links
  phone: string;
  email: string;
  website: string;
  whatsapp: string;

  // Social media
  instagram: string;
  facebook: string;
  x: string;
  tiktok: string;
  youtube: string;

  //Faqts
  faqts: FaqtItem[]

  // Publishing
  isPublished: boolean;

  // Generated after publishing
  slug: string;
  publicUrl: string;
  qrCodeUrl: string;

  createdAt: Date;
  updatedAt: Date;

};


export const emptyPage: Page = {
    id: crypto.randomUUID(),

    businessName: "",
    tagline: "",
    shortDescription: "",
    longDescription: "",
    address: "",
    selectedStyle: "minimal",

    logo: null,
    coverImage: null,
    brandColor: "#3EC7C4",
    documents: [],
    gallery: [],

    phone: "",
    email: "",
    website: "",
    whatsapp: "",

    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
    youtube: "",

    isPublished: false,

    slug: "",
    publicUrl: "",
    qrCodeUrl: "",

    createdAt: new Date(),
    updatedAt: new Date(),
    faqts: [],

    banner: {
      enabled: false,
      message: "",
      type: "info",
      showUntil: null
    },

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