import { Page } from "../model/Page";

export const demoPage: Page = {
  id: "demo-page",

  businessName: "Bean & Brew Coffee",
  tagline: "A cup of home",
  shortDescription:
    "Specialty coffee, homemade pastries and a cosy place to relax.",
  longDescription:
    "Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes and light lunches.",
  
  address: "25 High Street, Portsmouth PO1 3AB",
  selectedStyle: "minimal",
  brandColor: "#3EC7C4",

  phone: "+44786212725",
  email: "hello@beanandbrew.co.uk",
  website: "https://beanandbrew.co.uk",
  whatsapp: "+44786212725",

  instagram: "beanandbrew",
  facebook: "beanandbrew",
  x: "",
  tiktok: "",
  youtube: "",

  logo: null,
  coverImage: null,
  documents: [],
  gallery: [],


  faqts: [
    {
      id: "1",
      question: "What are your opening hours?",
      answer:  "We are open Monday to Saturday from 8am to 5pm.",
      isPublished: true
    },
    {
      id: "2",
      question: "Do you offer takeaway?",
      answer: "Yes, all drinks and food items are available for takeaway.",
      isPublished: true
    },
    {
      id: "3",
      question: "Do you have WiFi?",
      answer: "Yes, free WiFi is available for customers.",
      isPublished: true
    }
  ],

  banner: {
    enabled: true,
    message: "We are closed for renovations until Monday.",
    type: "info",
    showUntil: new Date("2026-07-20")
  },


  isPublished: true,

  slug: "bean-and-brew",
  publicUrl:
    "https://faqt.app/bean-and-brew",

  qrCodeUrl: "",

  createdAt: new Date(),
  updatedAt: new Date(),
};