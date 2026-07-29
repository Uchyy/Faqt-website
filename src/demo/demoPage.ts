import { createDemoPage } from "../utils/createDemoPage";

export const demoPageBold = createDemoPage({
  business: {
    name: "Bean & Brew Coffee",
    tagline: "A cup of home",
    shortDescription: "Specialty coffee, homemade pastries and a cosy place to relax.",
    longDescription: "Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes and light lunches.",
    address: "25 High Street, Portsmouth PO1 3AB",
  },

  documents: [
    {
      id: "doc-1",
      title: "Sample Business Document",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "doc-2",
      title: "Sample PDF Guide",
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    },
  ],

  branding: {
    selectedStyle: "bold",
    logo: "",
    coverImage: "",
    brandColor: "#6B8E5A",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
  },

  contact: {
    phone: "+442392123456",
    email: "hello@harrisonlegal.co.uk",
    website: "https://harrisonlegal.co.uk",
    whatsapp: ""
  },

  documents: [
    {
      id: "doc-1",
      title: "Sample Business Document",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "doc-2",
      title: "Sample PDF Guide",
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    },
  ],

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
    logo: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
  },

  documents: [
    {
      id: "doc-1",
      title: "Sample Business Document",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "doc-2",
      title: "Sample PDF Guide",
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    },
  ],

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

export const demoPageLight = createDemoPage({
  business: {
    name: "Willow & Bloom Studio",
    tagline: "Beautiful moments, thoughtfully designed",
    shortDescription: "A creative floral studio crafting bespoke arrangements and event styling.",
    longDescription:
      "Willow & Bloom creates elegant floral designs for weddings, celebrations, and everyday moments. Every arrangement is handcrafted with seasonal flowers and a personal touch.",
    address: "14 Castle Road, Southsea PO5 3AY",
  },

  branding: {
    selectedStyle: "card",
    logo: "",
    coverImage:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200",
    brandColor: "#D8B4FE",
    gallery: [
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1200",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1200",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200",
    ],
  },

  contact: {
    phone: "+447700123456",
    email: "hello@willowandbloom.co.uk",
    website: "https://willowandbloom.co.uk",
    whatsapp: "+447700123456",
  },

  social: {
    instagram: "willowandbloomstudio",
    facebook: "willowandbloomstudio",
    x: "",
    tiktok: "willowandbloomstudio",
    youtube: "",
  },

  documents: [
    {
      id: "doc-1",
      title: "Wedding Floral Packages",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "doc-2",
      title: "Event Styling Guide",
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    },
  ],

  faqts: [
  {
    id: "1",
    question: "What are your opening hours?",
    answer: "We are open Monday to Saturday from 9am to 5pm. Our opening hours may vary on bank holidays and special occasions.",
    isPublished: true,
  },
  {
    id: "2",
    question: "Do you offer same-day flower delivery?",
    answer: "Yes. Same-day delivery is available for orders placed before our daily cut-off time, subject to availability.",
    isPublished: true,
  },
  {
    id: "3",
    question: "Can I customise a bouquet?",
    answer: "Absolutely. We can create personalised bouquets based on your preferred colours, flowers, occasion, and budget.",
    isPublished: true,
  },
  {
    id: "4",
    question: "How long do fresh flowers last?",
    answer: "With proper care, most fresh flowers can last between 5 and 10 days. We provide care advice with every arrangement.",
    isPublished: true,
  },
  {
    id: "5",
    question: "Do you provide wedding flowers?",
    answer: "Yes. We create bespoke wedding bouquets, buttonholes, table arrangements, and venue decorations tailored to your special day.",
    isPublished: true,
  },
  {
    id: "6",
    question: "Can I order flowers for special occasions?",
    answer: "Yes. We create arrangements for birthdays, anniversaries, sympathy, thank you gifts, celebrations, and other special moments.",
    isPublished: true,
  },
  {
    id: "7",
    question: "Do you offer plant gifts?",
    answer: "Yes. We offer a selection of indoor plants, planters, and green gifts suitable for homes, offices, and special occasions.",
    isPublished: true,
  },
  {
    id: "8",
    question: "How do I care for my flowers?",
    answer: "Keep flowers in fresh water, trim the stems regularly, remove wilted petals, and keep them away from direct sunlight and heat sources.",
    isPublished: true,
  },
  {
    id: "9",
    question: "Do you deliver locally?",
    answer: "Yes. We provide local delivery services within our delivery area. Please contact us with your address to confirm availability.",
    isPublished: true,
  },
  {
    id: "10",
    question: "Can I visit your shop?",
    answer: "Yes. You are welcome to visit our shop and explore our seasonal flowers, plants, and gift collections.",
    isPublished: true,
  },
],

  banner: {
    enabled: true,
    message: "Spring collection now available.",
    type: "success",
    showUntil: new Date("2026-09-01"),
  },

  publishing: {
    slug: "willow-and-bloom",
    publicUrl: "https://faqt.app/willow-and-bloom",
    isPublished: false,
    qrCodeUrl: "",
  },
});