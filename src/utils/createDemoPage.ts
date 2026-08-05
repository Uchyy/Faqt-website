import { Page } from "../model/Page";

const now = new Date();

export const createDemoPage = (page: Partial<Page>): Page => ({
    id: page.id ?? crypto.randomUUID(),

    view: page.view ?? "0",

    business: {
        name: "",
        tagline: "",
        shortDescription: "",
        longDescription: "",
        address: "",
        updatedAt: now,
        ...page.business,
    },

    branding: {
        selectedStyle: "minimal",
        logo: "",
        coverImage: "",
        brandColor: "#3EC7C4",
        gallery: [],
        updatedAt: now,
        ...page.branding,
    },

    contact: {
        phone: "",
        email: "",
        website: "",
        whatsapp: "",
        updatedAt: now,
        ...page.contact,
    },

    social: {
        instagram: "",
        facebook: "",
        x: "",
        tiktok: "",
        youtube: "",
        updatedAt: now,
        ...page.social,
    },

    faqts: page.faqts ?? [],

    documents: page.documents ?? [],

    tools: {
        openingHours: false,
        banner: false,
        enquiries: false,
        services: false,
        ...page.tools,
    },

    openingHours: {
        enabled: false,
        schedule: [],
        updatedAt: now,
        ...page.openingHours,
    },

    enquiries: page.enquiries ?? [],

    services: page.services ?? [],

    banner: page.banner ?? null,

    publishing: {
        isPublished: true,
        slug: "",
        publicUrl: "",
        qrCodeUrl: "",
        publishedAt: now,
        updatedAt: now,
        ...page.publishing,
    },

    createdAt: page.createdAt ?? now,
    updatedAt: page.updatedAt ?? now,
});