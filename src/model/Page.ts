import type { Banner } from "./Banner";
import type { BusinessDocument } from "./BusinessDocument";
import type { FaqtItem } from "./FaqtItem";
import type { Styles } from "./Styles";


export type Page = {
  id: string;
  view: string;

  business: BusinessSection;
  branding: BrandingSection;

  contact: ContactSection;
  social: SocialSection;

  faqts: FaqtItem[];
  documents: BusinessDocument[];

  tools: ToolsSection;

  openingHours: OpeningHoursSection;
  enquiries: Enquiry[];
  services: Service[];

  banner?: Banner | null;

  publishing: PublishingSection;

  createdAt: Date;
  updatedAt: Date;
};



/* -----------------------
   TOOLS
----------------------- */

export type ToolsSection = {
  openingHours: boolean;
  banner: boolean;
  enquiries: boolean;
  services: boolean;
};



/* -----------------------
   OPENING HOURS
----------------------- */

export type OpeningHoursSection = {
  enabled: boolean;
  schedule: OpeningHoursDay[];
  updatedAt: Date;
};


export type OpeningHoursDay = {
  day: | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  closed: boolean;
  periods: OpeningPeriod[];
};


export type OpeningPeriod = {
  open: string;
  close: string;
};



/* -----------------------
   ENQUIRIES
----------------------- */

export type Enquiry = {
  id: string;

  name: string;
  email?: string;
  phone?: string;

  title: string;
  description: string;

  status: "new" | "in-progress" | "resolved";

  createdAt: Date;
  updatedAt: Date;
};



/* -----------------------
   SERVICES
----------------------- */

export type Service = {
  id: string;

  name: string;
  description: string;

  price?: string;

  createdAt: Date;
  updatedAt: Date;
};



/* -----------------------
   PAGE SECTIONS
----------------------- */

export type BusinessSection = {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  address: string;

  updatedAt: Date;
};


export type BrandingSection = {
  selectedStyle: Styles;

  logo: string;
  coverImage: string;

  brandColor: string;
  gallery: string[];

  updatedAt: Date;
};


export type ContactSection = {
  phone: string;
  email: string;
  website: string;
  whatsapp: string;

  updatedAt: Date;
};


export type SocialSection = {
  instagram: string;
  facebook: string;
  x: string;
  tiktok: string;
  youtube: string;

  updatedAt: Date;
};


export type PublishingSection = {
  isPublished: boolean;

  slug: string;
  publicUrl: string;
  qrCodeUrl: string;

  publishedAt?: Date | null;
  updatedAt: Date;
};



/* -----------------------
   EMPTY PAGE
----------------------- */

export const emptyPage: Page = {

  id: crypto.randomUUID(),
  view: "0",

  business: {
    name: "",
    tagline: "",
    shortDescription: "",
    longDescription: "",
    address: "",
    updatedAt: new Date(),
  },


  branding: {
    selectedStyle: "minimal",
    logo: "",
    coverImage: "",
    brandColor: "#3EC7C4",
    gallery: [],
    updatedAt: new Date(),
  },


  contact: {
    phone: "",
    email: "",
    website: "",
    whatsapp: "",
    updatedAt: new Date(),
  },


  social: {
    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
    youtube: "",
    updatedAt: new Date(),
  },


  faqts: [],

  documents: [],


  tools: {
    openingHours: false,
    banner: false,
    enquiries: false,
    services: false,
  },

  openingHours: {
    enabled: false,
    schedule: [],
    updatedAt: new Date(),
  },

  enquiries: [],
  services: [],

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
    publishedAt: null,
    updatedAt: new Date(),
  },

  createdAt: new Date(),
  updatedAt: new Date(),
};



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