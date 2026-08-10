import { Page } from "../model/Page";
import { timeAgo } from "./timeAgo";

export type EventType = "update" | "improve" | "insight" | "published";

export type Event = {
    type: EventType;
    title: string;
    description: string;
    action: string;
    time: string;
};

const isNewUser = (page: Page) => Date.now() - page.createdAt.getTime() < 7 * 24 * 60 * 60 * 1000;

function getNewUnpublishedEvents(page: Page): Event[] {
    return [

        getViewsEvent(page),
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
            type: "insight",
            title: "Your page is not live yet",
            description: "Publish your page to start tracking views and customer activity.",
            action: "Publish page",
            time: "Get started",
        },
    ];
}

function getNewPublishedEvents(page: Page): Event[] {
    const views = page.view ?? 0;

    return [
        getEnquiryEvent(page),
        {
            type: "published",
            title: "Your page is live",
            description: "Customers can now discover your business online.",
            action: "View page",
            time: timeAgo(page.publishing.publishedAt ?? new Date()),
        },
        {
            type: "insight",
            title: views > 0 ? `${views} page views` : "Waiting for your first views",
            description: views > 0
                ? "Customers are already discovering your Faqt page."
                : "Share your Faqt link to start bringing visitors to your page.",
            action: "View insights",
            time: views > 0 ? "So far" : "Recommended",
        },
        {
            type: "improve",
            title: "Complete your profile",
            description: "Add photos, services and opening hours to improve your page.",
            action: "Improve page",
            time: "Recommended",
        },

    ];
}

function getEnquiryEvent(page: Page): Event {
    const enquiries = page.enquiries?.length ?? 0;

    return enquiries > 0
        ? {
            type: "update",
            title: `${enquiries} new ${enquiries === 1 ? "enquiry" : "enquiries"}`,
            description: `${enquiries === 1 ? "A customer has" : "Customers have"} contacted you through your page.`,
            action: "View enquiries",
            time: timeAgo(page.updatedAt),
        }
        : {
            type: "update",
            title: "No new enquiries",
            description: "You're all caught up. New customer enquiries will appear here.",
            action: "View enquiries",
            time: "Up to date",
        };
}

function getViewsEvent(page: Page): Event {
    const views = page.view ?? 0;

    return {
        type: "insight",
        title: views > 0 ? `${views} page views` : "No page views yet",
        description: views > 0
            ? "Visitors are discovering your business through Faqt."
            : "Share your page to start attracting visitors.",
        action: "View insights",
        time: views > 0 ? "Total views" : "Recommended",
    };
}

function getExistingUserEvents(page: Page): Event[] {
    return [
        getEnquiryEvent(page),
        getViewsEvent(page),
        {
            type: "improve",
            title: "Keep your page fresh",
            description: "Keep your services, FAQs and business information up to date.",
            action: "Manage page",
            time: "Recommended",
        },
        {
            type: "published",
            title: "Your page is live",
            description: "Your latest published information is available to customers.",
            action: "View page",
            time: timeAgo(page.publishing.publishedAt ?? new Date()),
        },
    ];
}

export function getWhatsHappening(page: Page): Event[] {
    const newUser = isNewUser(page);

    if (newUser) {
        return page.publishing.isPublished
            ? getNewPublishedEvents(page)
            : getNewUnpublishedEvents(page);
    }

    return getExistingUserEvents(page).slice(0, 4);
}

