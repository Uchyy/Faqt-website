import { Page } from "../model/Page";


export type CompletionItem = {
    label: string;
    complete: boolean;
    required: boolean;
    weight: number;
};


export function getPageCompletionDetails(page: Page) {

    const checks: CompletionItem[] = [
        {
            label: "Business name",
            complete: !!page.business.name,
            required: true,
            weight: 20,
        },

        {
            label: "Description",
            complete: !!page.business.shortDescription,
            required: true,
            weight: 20,
        },

        {
            label: "Address",
            complete: !!page.business.address,
            required: true,
            weight: 10,
        },

        {
            label: "Contact details",
            complete:
                !!page.contact.phone ||
                !!page.contact.email,
            required: true,
            weight: 15,
        },

        {
            label: "FAQs",
            complete: page.faqts.length > 0,
            required: true,
            weight: 15,
        },


        // Optional

        {
            label: "Logo",
            complete: !!page.branding.logo,
            required: false,
            weight: 5,
        },

        {
            label: "Cover image",
            complete: !!page.branding.coverImage,
            required: false,
            weight: 5,
        },

        {
            label: "Social media",
            complete:
                !!page.social.instagram ||
                !!page.social.facebook ||
                !!page.social.x ||
                !!page.social.tiktok ||
                !!page.social.youtube,
            required: false,
            weight: 5,
        },

        {
            label: "Opening hours",
            complete:
                page.openingHours.enabled &&
                page.openingHours.schedule.length > 0,
            required: false,
            weight: 5,
        },
    ];


    const totalWeight = checks.reduce(
        (sum, item) => sum + item.weight,
        0
    );


    const completedWeight = checks
        .filter(item => item.complete)
        .reduce(
            (sum, item) => sum + item.weight,
            0
        );


    return {
        percentage: Math.round(
            (completedWeight / totalWeight) * 100
        ),

        checks,

        missing: checks
            .filter(item => !item.complete)
            .map(item => ({
                label: item.label,
                required: item.required,
            })),

        missingRequired: checks
            .filter(item => item.required && !item.complete)
            .map(item => item.label),

        missingOptional: checks
            .filter(item => !item.required && !item.complete)
            .map(item => item.label),
    };
}


export function canPublish(page: Page) {
    return getPageCompletionDetails(page).missingRequired.length === 0;
}