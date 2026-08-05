import { Page } from "../model/Page";
import { timeAgo } from "./timeAgo";

export type EventType = "update" | "improve" | "insight" | "team";

export type Event = {
    type: EventType;
    title: string;
    description: string;
    action: string;
    time: string;
};


export function getWhatsHappening(page: Page): Event[] {

    const events: Event[] = [];
    const isNewUser = Date.now() - page.createdAt.getTime() < 7 * 24 * 60 * 60 * 1000;

    /*
        NEW USER + UNPUBLISHED
    */
    if (!page.publishing.isPublished && isNewUser) {

        events.push(
            {
                type: "update",
                title: "Complete your page setup",
                description: "Add your FAQs, contact details and branding before publishing.",
                action: "Continue setup",
                time: "Getting started",
            },
            {
                type: "improve",
                title: "Add your first FAQs",
                description: "Help customers find answers before they contact you.",
                action: "Add FAQs",
                time: "Recommended",
            },
            {
                type: "team",
                title: "Need help getting started?",
                description: "Visit help and support for guidance on creating your page.",
                action: "Get help",
                time: "Available anytime",
            }
        );
        return events;
    }


    /*
        NEW USER + PUBLISHED
    */
    if (page.publishing.isPublished && isNewUser) {

        events.push(
            {
                type: "update",
                title: "Your page is live",
                description: "Customers can now discover your business online.",
                action: "View page",
                time: timeAgo(page.publishing.publishedAt ?? new Date()),
            },
            {
                type: "improve",
                title: "Complete your profile",
                description: "Add photos, services and opening hours to improve your page.",
                action: "Improve page",
                time: "Recommended",
            },
            {
                type: "team",
                title: "Share your Faqt link",
                description: "Add your page link to your website and social profiles.",
                action: "Share link",
                time: "Recommended",
            }
        );


        return events;
    }



    /*
        EXISTING USER
    */


    if (page.tools.enquiries && page.enquiries.length) {

        events.push({
            type: "update",
            title: "New enquiries received",
            description:
                `${page.enquiries.length} customers have contacted you.`,
            action: "View enquiries",
            time: timeAgo(page.updatedAt),
        });

    }
    else {

        events.push({
            type: "update",
            title: "Your page is up to date",
            description:
                "No urgent updates need your attention.",
            action: "View page",
            time: timeAgo(page.updatedAt),
        });

    }


    events.push(
        {
            type: "improve",
            title: "Your page is complete",
            description:
                "Keep your information updated to give customers the best experience.",
            action: "Manage page",
            time: "Recommended",
        },
        {
            type: "insight",
            title: "Your page is growing",
            description:
                "More insights will appear here as customers interact with your page.",
            action: "View insights",
            time: "Coming soon",
        },
        {
            type: "team",
            title: "Manage your account",
            description:
                "Update your profile, support details and Faqt settings.",
            action: "Account settings",
            time: "Available anytime",
        }
    );


    return events.slice(0,4);
}