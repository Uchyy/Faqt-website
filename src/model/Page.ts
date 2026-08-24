import type { Banner } from "./Banner";
import { BrandingSection } from "./Branding";
import type { BusinessDocument } from "./BusinessDocument";
import { BusinessSection } from "./BusinessInfo";
import { ContactSection } from "./Contact";
import { Enquiry } from "./Enquiries";
import type { FaqtItem } from "./FaqtItem";
import { PublishingSection } from "./Publishing";
import { Service } from "./Services";
import { SocialSection } from "./Social";
import { ToolsSection } from "./ToolsSection";
import { OpeningHoursSection } from "./OpeningHours";
import { Updates } from "./Update";


type PageStatus = "published" | "draft" | "unpublished";
export type Page = {
  id: string;
  view: number;

  business: BusinessSection;
  branding: BrandingSection;

  contact: ContactSection;
  social: SocialSection;

  faqts: FaqtItem[];
  documents: BusinessDocument[];
  status: PageStatus;

  tools: ToolsSection;

  openingHours: OpeningHoursSection;
  enquiries: Enquiry[];
  services: Service[];

  banner?: Banner | null;

  publishing: PublishingSection;
  updates: Updates []

  createdAt: Date;
  updatedAt: Date;
};




/* -----------------------
   EMPTY PAGE
----------------------- */

export const emptyPage: Page = {

  id: crypto.randomUUID(),
  view: 0,
  status: "unpublished",
  business: {
    name: "",
    tagline: "",
    shortDescription: "",
    longDescription: "",
    address: {
      line1: "",
      line2: "",
      region: "",
      country: "",
      postcode: "",
      updatedAt: new Date(),
  },
    updatedAt: new Date(),
    established: "",
    industry: "other",
    businessType: ""
  },


  branding: {
    selectedStyle: "minimal",
    logo: {url: "", name: ""},
    coverImage:  {url: "", name: ""},
    brandColor: { hex: "#3EC7C4"},
    gallery: [],
    updatedAt: new Date(),
  },

  updates: [],

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
    linkedin: "",
    pinterest: "",
    twitch: "",
    github: "",
    threads: "",
    snapchat: "",
    patreon: "",
    behance: "",
    dribbble: "",
    gitlab: "",
    codepen: "",
    stackoverflow: "",
    updatedAt: new Date(),
   
  },


  faqts: [],

  documents: [],



  tools: {
    openingHours: false,
    banner: false,
    enquiries: false,
    services: false,
    updates: false
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