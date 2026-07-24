import { createDemoPage } from "../utils/createDemoPage";

export const demoPageBold = createDemoPage({
  business: {
    name: "Bean & Brew Coffee",
    tagline: "A cup of home",
    shortDescription: "Specialty coffee, homemade pastries and a cosy place to relax.",
    longDescription: "Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes and light lunches.",
    address: "25 High Street, Portsmouth PO1 3AB",
  },

  branding: {
    selectedStyle: "bold",
    logo: "",
    coverImage: "",
    brandColor: "#6B8E5A",
    gallery: []
  },

  contact: {
    phone: "+44786212725",
    email: "hello@beanandbrew.co.uk",
    website: "https://beanandbrew.co.uk",
    whatsapp: "+44786212725",
  },

  social: {
    instagram: "beanandbrew",
    facebook: "beanandbrew",
    x: "",
    tiktok: "",
    youtube: ""
  },

  faqts: [
    {
      id: "1",
      question: "What are your opening hours?",
      answer: "We are open Monday to Saturday from 8am to 5pm.",
      isPublished: true,
    },
    {
      id: "2",
      question: "Do you offer takeaway?",
      answer: "Yes, all drinks and food items are available for takeaway.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Do you have WiFi?",
      answer: "Yes, free WiFi is available for customers.",
      isPublished: true,
    },
  ],

  banner: {
    enabled: true,
    message: "We are closed for renovations until Monday.",
    type: "warning",
    showUntil: new Date("2026-12-20"),
  },

  publishing: {
    slug: "bean-and-brew",
    publicUrl: "https://faqt.app/bean-and-brew",
    isPublished: false,
    qrCodeUrl: ""
  },
});


export const demoPageMinimal = createDemoPage({
  business: {
    name: "Harrison Legal",
    tagline: "Clear advice. Trusted guidance.",
    shortDescription: "Specialists in family, property and employment law.",
    longDescription:  "Harrison Legal provides straightforward legal advice with a personal approach.",
    address: "12 Guildhall Walk, Portsmouth PO1 2DD",
  },

  branding: {
    selectedStyle: "minimal",
    brandColor: "#1E3A5F",
    logo: "",
    coverImage: "",
    gallery: []
  },

  contact: {
    phone: "+442392123456",
    email: "hello@harrisonlegal.co.uk",
    website: "https://harrisonlegal.co.uk",
    whatsapp: ""
  },

 faqts: [
    {
      id: "1",
      question: "Do you offer free consultations?",
      answer: "Yes. We offer a free 30-minute initial consultation to discuss your situation and how we can help.",
      isPublished: true,
    },
    {
      id: "2",
      question: "What areas of law do you specialise in?",
      answer: "We specialise in family law, residential property, wills and probate, and employment law.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Can I sign documents online?",
      answer: "Yes. Most documents can be securely signed electronically without visiting our office.",
      isPublished: true,
    },
    {
      id: "4",
      question: "Do I need an appointment?",
      answer: "Appointments are recommended to ensure a solicitor is available, although we will always try to accommodate walk-ins.",
      isPublished: true,
    },
    {
      id: "5",
      question: "How much do your services cost?",
      answer: "Fees vary depending on the service. We provide transparent pricing and a written quotation before any work begins.",
      isPublished: true,
    },
  ],

  publishing: {
    slug: "harrison-legal",
    publicUrl: "https://faqt.app/harrison-legal",
    isPublished: false,
    qrCodeUrl: ""
  },
});



export const demoPageCard = createDemoPage({
  business: {
    name: "Casa Milano",
    tagline: "Authentic Italian Dining",
    shortDescription: "Fresh pasta, wood-fired pizza and handcrafted desserts.",
    longDescription: "Casa Milano brings authentic Italian flavours to Portsmouth...",
    address: "88 Albert Road, Southsea PO5 2SN",
  },

  branding: {
    selectedStyle: "card",
    brandColor: "#A52A2A",
    logo: "",
    coverImage: "",
    gallery: []
  },

  contact: {
    phone: "+442392987654",
    email: "bookings@casamilano.co.uk",
    website: "https://casamilano.co.uk",
    whatsapp: "+447700900123",
  },

  social: {
    instagram: "casamilanouk",
    facebook: "casamilanouk",
    tiktok: "casamilanouk",
    x: "",
    youtube: ""
  },

  faqts: [
    {
      id: "1",
      question: "Do I need to book a table?",
      answer: "Reservations are recommended, especially on evenings and weekends, but walk-ins are always welcome when tables are available.",
      isPublished: true,
    },
    {
      id: "2",
      question: "Do you have vegetarian or vegan options?",
      answer: "Yes. Our menu includes a wide selection of vegetarian and vegan pasta, pizza, and dessert options.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Can I order takeaway?",
      answer: "Yes. All pizzas, pasta dishes, desserts, and drinks are available for takeaway collection.",
      isPublished: true,
    },
    {
      id: "4",
      question: "Do you cater for food allergies?",
      answer: "Absolutely. Please inform a member of staff before ordering and we'll be happy to advise on allergens and suitable dishes.",
      isPublished: true,
    },
    {
      id: "5",
      question: "Is parking available nearby?",
      answer: "Yes. There is on-street parking and several public car parks within a short walk of the restaurant.",
      isPublished: true,
    },
  ],

  banner: {
    enabled: true,
    message: "Enjoy 20% off all pizzas every Tuesday.",
    type: "info",
    showUntil: new Date("2026-12-31"),
  },

  publishing: {
    slug: "casa-milano",
    publicUrl: "https://faqt.app/casa-milano",
    isPublished: false,
    qrCodeUrl: ""
  },
});