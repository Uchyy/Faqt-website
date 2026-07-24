import { Page } from "../model/Page";

type CompletionItem = {
    label: string;
    complete: boolean;
    weight: number;
};

export function getPageCompletion(page: Page) {

    const checks: CompletionItem[] = [
        { label: "Business name", complete: !!page.business.name, weight: 15 },
        { label: "Description", complete: !!page.business.shortDescription, weight: 10 },
        { label: "Address", complete: !!page.business.address, weight: 10 },

        { label: "Logo", complete: !!page.branding.logo, weight: 10 },
        { label: "Cover image", complete: !!page.branding.coverImage, weight: 10 },
        { label: "Style", complete: !!page.branding.selectedStyle, weight: 5 },

        { label: "Contact details", complete: !!page.contact.phone || !!page.contact.email, weight: 10 },

        { label: "Social media", complete: !!page.social.instagram || !!page.social.facebook || !!page.social.instagram, weight: 5 },

        { label: "FAQTs", complete: page.faqts.length > 0, weight: 15 },

        { label: "Documents or gallery", complete: page.documents.length > 0 || page.branding.gallery.length > 0, weight: 10 },
    ];


    const totalWeight = checks.reduce((sum, item) => sum + item.weight, 0);

    const completedWeight = checks
        .filter(item => item.complete)
        .reduce((sum, item) => sum + item.weight, 0);


    return Math.round((completedWeight / totalWeight) * 100);
}


export function canPublish(page: Page) {
    return getPageCompletion(page) >= 80;
}