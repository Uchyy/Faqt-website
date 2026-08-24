import { createDemoPage } from "../utils/createDemoPage";

export const demoPageBold = createDemoPage({
  view: 24,
  status: "published",
  business: {
    name: "Bean & Brew Coffee",
    tagline: "A cup of home",
    shortDescription: "Specialty coffee, homemade pastries and a cosy place to relax.",
    longDescription:
      "Bean & Brew is an independent coffee shop serving freshly roasted coffee, homemade cakes and light lunches.",
    address: {
      line1: "25 High Street",
      line2: "",
      region: "Portsmouth",
      country: "Hampshire",
      postcode: "PO1 3AB",
      updatedAt: new Date(),
    },
    established: "2003",
    industry: "food-and-beverage",
    businessType:"coffee-shop",
    updatedAt: new Date("2026-08-01"),
  },

  tools: {
    openingHours: true,
    banner: false,
    enquiries: false,
    services: false,
    updates: false
  },

  updates: [],

  openingHours: {
    enabled: true,
    schedule: [
      {
        day: "Monday",
        closed: false,
        periods: [
          {
            open: "08:00",
            close: "17:00",
          },
        ],
      },
      {
        day: "Tuesday",
        closed: false,
        periods: [
          {
            open: "08:00",
            close: "17:00",
          },
        ],
      },
      {
        day: "Wednesday",
        closed: false,
        periods: [
          {
            open: "08:00",
            close: "17:00",
          },
        ],
      },
      {
        day: "Thursday",
        closed: false,
        periods: [
          {
            open: "08:00",
            close: "17:00",
          },
        ],
      },
      {
        day: "Friday",
        closed: false,
        periods: [
          {
            open: "08:00",
            close: "17:00",
          },
        ],
      },
      {
        day: "Saturday",
        closed: false,
        periods: [
          {
            open: "09:00",
            close: "16:00",
          },
        ],
      },
      {
        day: "Sunday",
        closed: true,
        periods: [],
      },
    ],
    updatedAt: new Date("2026-08-01"),
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
    logo: {url: ""},
    coverImage: {url: ""},
    brandColor: { hex: "#6B8E5A"},
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        name: "",
      },
    ],
    updatedAt: new Date("2026-08-01"),
  },

  contact: {
    phone: "+44786212725",
    email: "hello@beanandbrew.co.uk",
    website: "https://beanandbrew.co.uk",
    whatsapp: "+44786212725",
    updatedAt: new Date("2026-08-01"),
  },

  social: {
    instagram: "beanandbrew",
    facebook: "beanandbrew",
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
    updatedAt: new Date("2026-08-01"),
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
    isPublished: true,
    qrCodeUrl: "",
    updatedAt: new Date("2026-08-01"),
  },
});


export const demoPageMinimal = createDemoPage({
  view: 129,
  status: "published",
  business: {
    name: "Harrison Legal",
    tagline: "Clear advice. Trusted guidance.",
    shortDescription: "Specialists in family, property and employment law.",
    longDescription:
      "Harrison Legal provides straightforward legal advice with a personal approach.",
    address: {
      line1: "12 Market Square",
      line2: "Unit 4",
      region: "Portsmouth",
      country: "Hampshire",
      postcode: "PO1 2AB",
      updatedAt: new Date(),
    },
    established: "2013",
    industry: "legal-and-consulting",
    businessType: "legal-consultant",
    updatedAt: new Date("2026-08-01"),
  },

  tools: {
    openingHours: false,
    banner: false,
    enquiries: true,
    services: false,
    updates: false
  },

  updates: [],
  

  enquiries: [
    {
      id: "enquiry-1",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+447700111222",
      title: "Property Consultation",
      description:
        "I would like advice regarding purchasing my first property and reviewing the legal documents.",
      status: "new",
      createdAt: new Date("2026-07-28"),
      updatedAt: new Date("2026-07-28"),
    },
    {
      id: "enquiry-2",
      name: "Michael Brown",
      email: "michael@example.com",
      title: "Employment Advice",
      description:
        "I need advice regarding an employment contract and my workplace rights.",
      status: "in-progress",
      createdAt: new Date("2026-07-30"),
      updatedAt: new Date("2026-08-01"),
    },
    {
      id: "enquiry-3",
      name: "Emma Jones",
      phone: "+447700333444",
      title: "Family Law Consultation",
      description:
        "Request for information about arranging an initial family law consultation.",
      status: "resolved",
      createdAt: new Date("2026-07-15"),
      updatedAt: new Date("2026-07-20"),
    },
  ],

  branding: {
    selectedStyle: "minimal",
    brandColor: { hex: "#1E3A5F"},
    logo: {url: ""},
    coverImage: {url: ""},
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        name: "",
      },
    ],
    updatedAt: new Date("2026-08-01"),
  },

  contact: {
    phone: "+442392123456",
    email: "hello@harrisonlegal.co.uk",
    website: "https://harrisonlegal.co.uk",
    whatsapp: "",
    updatedAt: new Date("2026-08-01"),
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
    updatedAt: new Date("2026-08-01"),
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
      answer:
        "Yes. We offer a free 30-minute initial consultation to discuss your situation and how we can help.",
      isPublished: true,
    },
    {
      id: "2",
      question: "What areas of law do you specialise in?",
      answer:
        "We specialise in family law, residential property, wills and probate, and employment law.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Can I sign documents online?",
      answer:
        "Yes. Most documents can be securely signed electronically without visiting our office.",
      isPublished: true,
    },
    {
      id: "4",
      question: "Do I need an appointment?",
      answer:
        "Appointments are recommended to ensure a solicitor is available, although we will always try to accommodate walk-ins.",
      isPublished: true,
    },
    {
      id: "5",
      question: "How much do your services cost?",
      answer:
        "Fees vary depending on the service. We provide transparent pricing and a written quotation before any work begins.",
      isPublished: true,
    },
  ],

  publishing: {
    slug: "harrison-legal",
    publicUrl: "https://faqt.app/harrison-legal",
    isPublished: true,
    qrCodeUrl: "",
    updatedAt: new Date("2026-08-01"),
  },
});


export const demoPageCard = createDemoPage({
  view: 12,
  status: "published",
  business: {
    name: "Casa Milano",
    tagline: "Authentic Italian Dining",
    shortDescription: "Fresh pasta, wood-fired pizza and handcrafted desserts.",
    longDescription:
      "Casa Milano brings authentic Italian flavours to Portsmouth with traditional recipes, fresh ingredients and a warm dining experience.",
    address: {
      line1: "12 Market Square",
      line2: "Unit 4",
      region: "Portsmouth",
      country: "Hampshire",
      postcode: "PO1 2AB",
      updatedAt: new Date(),
    },
    established: "2003",
    industry: "food-and-beverage",
    businessType:"restaurant",
    
    updatedAt: new Date("2026-08-01"),
  },

  tools: {
    openingHours: false,
    banner: false,
    enquiries: false,
    services: true,
    updates: false
  },

  updates: [],
  

  services: [
    {
      id: "service-1",
      name: "Lunch Dining Experience",
      description:
        "A selection of freshly prepared Italian dishes available during lunch hours.",
      price: "From £15",
      createdAt: new Date("2026-07-01"),
      updatedAt: new Date("2026-08-01"),
    },
    {
      id: "service-2",
      name: "Private Event Booking",
      description:
        "Host birthdays, celebrations and private gatherings with customised menus.",
      price: "Contact for pricing",
      createdAt: new Date("2026-07-05"),
      updatedAt: new Date("2026-08-01"),
    },
    {
      id: "service-3",
      name: "Takeaway Collection",
      description:
        "Order your favourite pizzas, pasta dishes and desserts for collection.",
      price: "From £8",
      createdAt: new Date("2026-07-10"),
      updatedAt: new Date("2026-08-01"),
    },
  ],

  branding: {
    selectedStyle: "card",
    brandColor: { hex: "#A52A2A"},
    logo: {
      url: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400",
      name: "",
    },
    coverImage: {
      url: "",
      name: "",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        name: "",
      },
    ],
    updatedAt: new Date(),
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
    updatedAt: new Date("2026-08-01"),
  },

  social: {
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
    instagram: "casamilanouk",
    facebook: "casamilanouk",
    tiktok: "casamilanouk",
    x: "",
    youtube: "",
    updatedAt: new Date("2026-08-01"),
  },

  faqts: [
    {
      id: "1",
      question: "Do I need to book a table?",
      answer:
        "Reservations are recommended, especially on evenings and weekends, but walk-ins are always welcome when tables are available.",
      isPublished: true,
    },
    {
      id: "2",
      question: "Do you have vegetarian or vegan options?",
      answer:
        "Yes. Our menu includes a wide selection of vegetarian and vegan pasta, pizza, and dessert options.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Can I order takeaway?",
      answer:
        "Yes. All pizzas, pasta dishes, desserts, and drinks are available for takeaway collection.",
      isPublished: true,
    },
    {
      id: "4",
      question: "Do you cater for food allergies?",
      answer:
        "Absolutely. Please inform a member of staff before ordering and we will be happy to advise on allergens and suitable dishes.",
      isPublished: true,
    },
    {
      id: "5",
      question: "Is parking available nearby?",
      answer:
        "Yes. There is on-street parking and several public car parks within a short walk of the restaurant.",
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
    qrCodeUrl: "",
    updatedAt: new Date("2026-08-01"),
  },
});


export const demoPageLight = createDemoPage({
  view: 38,
  status: "published",
  business: {
    name: "Willow & Bloom Studio",
    tagline: "Beautiful moments, thoughtfully designed",
    shortDescription:
      "A creative floral studio crafting bespoke arrangements and event styling.",
    longDescription:
      "Willow & Bloom creates elegant floral designs for weddings, celebrations, and everyday moments. Every arrangement is handcrafted with seasonal flowers and a personal touch.",
    address: {
      line1: "12 Market Square",
      line2: "Unit 4",
      region: "Portsmouth",
      country: "Hampshire",
      postcode: "PO1 2AB",
      updatedAt: new Date(),
    },
    established: "2003",
    industry: "agriculture-and-farming",
    businessType:"florist",
    updatedAt: new Date("2026-08-01"),
  },

  tools: {
    openingHours: false,
    banner: true,
    enquiries: false,
    services: false,
    updates: false
  },

  updates: [],

  banner: {
    enabled: true,
    message: "Spring collection now available.",
    type: "info",
    showUntil: new Date("2026-09-01"),
  },

  branding: {
    selectedStyle: "card",
    logo: {url: ""},
    coverImage:{ url:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200"},
    brandColor: { hex: "#D8B4FE"},
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        name: "",
      },
    ],
    updatedAt: new Date("2026-08-01"),
  },

  contact: {
    phone: "+447700123456",
    email: "hello@willowandbloom.co.uk",
    website: "https://willowandbloom.co.uk",
    whatsapp: "+447700123456",
    updatedAt: new Date("2026-08-01"),
  },

  social: {
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
    instagram: "willowandbloomstudio",
    facebook: "willowandbloomstudio",
    x: "",
    tiktok: "willowandbloomstudio",
    youtube: "",
    updatedAt: new Date("2026-08-01"),
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
      answer:
        "We are open Monday to Saturday from 9am to 5pm. Our opening hours may vary on bank holidays and special occasions.",
      isPublished: true,
    },
    {
      id: "2",
      question: "Do you offer same-day flower delivery?",
      answer:
        "Yes. Same-day delivery is available for orders placed before our daily cut-off time, subject to availability.",
      isPublished: true,
    },
    {
      id: "3",
      question: "Can I customise a bouquet?",
      answer:
        "Absolutely. We can create personalised bouquets based on your preferred colours, flowers, occasion, and budget.",
      isPublished: true,
    },
    {
      id: "4",
      question: "How long do fresh flowers last?",
      answer:
        "With proper care, most fresh flowers can last between 5 and 10 days. We provide care advice with every arrangement.",
      isPublished: true,
    },
    {
      id: "5",
      question: "Do you provide wedding flowers?",
      answer:
        "Yes. We create bespoke wedding bouquets, buttonholes, table arrangements, and venue decorations tailored to your special day.",
      isPublished: true,
    },
    {
      id: "6",
      question: "Can I order flowers for special occasions?",
      answer:
        "Yes. We create arrangements for birthdays, anniversaries, sympathy, thank you gifts, celebrations, and other special moments.",
      isPublished: true,
    },
    {
      id: "7",
      question: "Do you offer plant gifts?",
      answer:
        "Yes. We offer a selection of indoor plants, planters, and green gifts suitable for homes, offices, and special occasions.",
      isPublished: true,
    },
    {
      id: "8",
      question: "How do I care for my flowers?",
      answer:
        "Keep flowers in fresh water, trim the stems regularly, remove wilted petals, and keep them away from direct sunlight and heat sources.",
      isPublished: true,
    },
    {
      id: "9",
      question: "Do you deliver locally?",
      answer:
        "Yes. We provide local delivery services within our delivery area. Please contact us with your address to confirm availability.",
      isPublished: true,
    },
    {
      id: "10",
      question: "Can I visit your shop?",
      answer:
        "Yes. You are welcome to visit our shop and explore our seasonal flowers, plants, and gift collections.",
      isPublished: true,
    },
  ],

  publishing: {
    slug: "willow-and-bloom",
    publicUrl: "https://faqt.app/willow-and-bloom",
    isPublished: false,
    qrCodeUrl: "",
    updatedAt: new Date("2026-08-01"),
  },
});


export const demoPageNewUser = createDemoPage({
  view: 0,
  business: {
    name: "Harbour Wellness Studio",
    tagline: "Helping you feel your best",
    shortDescription: "A local wellness studio offering massage, yoga and wellbeing treatments.",
    longDescription: "Harbour Wellness Studio provides relaxing treatments, wellness sessions and personalised support to help customers improve their wellbeing.",
    address: {
      line1: "12 Market Square",
      line2: "Unit 4",
      region: "Portsmouth",
      country: "Hampshire",
      postcode: "PO1 2AB",
      updatedAt: new Date(),
    },
    established: "2003",
    industry:  "beauty-and-personal-care",
    businessType:"spa",
    updatedAt: new Date("2026-08-01")
  },

  documents: [
    {
      id: "doc-1",
      title: "Treatment Price List",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ],

  branding: {
    selectedStyle: "minimal",
    logo: {url: ""},
    coverImage: { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200"},
    brandColor: { hex: "#3EC7C4"},
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200",
        name: "",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        name: "",
      },
    ],
    updatedAt: new Date("2026-08-01")
  },


  contact: {
    phone: "+447700555111",
    email: "hello@harbourwellness.co.uk",
    website: "",
    whatsapp: "+447700555111",
    updatedAt: new Date("2026-08-01")
  },


  social: {
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
    instagram: "",
    facebook: "",
    x: "",
    tiktok: "",
    youtube: "",
    updatedAt: new Date("2026-08-01")
  },


  faqts: [
    {
      id: "1",
      question: "What treatments do you offer?",
      answer:
        "We offer massage therapy, yoga sessions, relaxation treatments and personalised wellness packages.",
      isPublished: true,
    },
    {
      id: "2",
      question: "Do I need to book an appointment?",
      answer:
        "Yes. Appointments are recommended so we can reserve the right time and treatment for you.",
      isPublished: true,
    },
  ],


  banner: {
    enabled: false,
    message: "New treatment packages coming soon.",
    type: "info",
    showUntil: new Date("2026-09-30"),
  },


  tools: {
    openingHours: true,
    services: false,
    banner: true,
    enquiries: false,
    updates: false
  },

  updates: [],

  publishing: {
    slug: "harbour-wellness",
    publicUrl: "https://faqt.app/harbour-wellness",
    isPublished: false,
    qrCodeUrl: "",
    updatedAt: new Date("2026-08-01")
  },
});