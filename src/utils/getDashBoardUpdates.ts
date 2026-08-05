import type { Enquiry, Page } from "../model/Page";
import { timeAgo } from "./timeAgo";

export type DashboardUpdateType =
    | "setup"
    | "published"
    | "improve"
    | "enquiry"
    | "announcement"
    | "openingHours"
    | "services"
    | "theme"
    | "plan";


export type DashboardUpdate = {
    type: DashboardUpdateType;
    title: string;
    description: string;
    time: string;
};


export function getDashboardUpdates( page: Page, enquiries: Enquiry[] = [],) {

    const updates: DashboardUpdate[] = [];
    const isPublished = page.publishing.isPublished;
    const isNewUser = Date.now() - page.createdAt.getTime() < 7 * 24 * 60 * 60 * 1000;

    /*
        STATE 1
        New user + unpublished
    */
    if (!isPublished && isNewUser) {
        updates.push({
            type: "setup",
            title: "Complete your page",
            description: "Add your business details and publish your Faqt page.",
            time: "Getting started",
        });


        if (!page.faqts.length) {
            updates.push({
                type: "improve",
                title: "Add your first FAQs",
                description: "Answer common customer questions before publishing.",
                time: "Recommended",
            });
        }
        return updates;
    }


    /*
        STATE 2
        New user + published
    */
    if (isPublished && isNewUser) {

        updates.push({
            type: "published",
            title: "Your page is live",
            description: "Customers can now discover your business online.",
            time: page.publishing.publishedAt ? timeAgo(page.publishing.publishedAt) : "Recently",
        });


        if (!page.social.instagram && !page.social.facebook) {
            updates.push({
                type: "improve",
                title: "Connect your socials",
                description:  "Help customers find you across more platforms.",
                time: "Recommended",
            });

        }

        updates.push({
            type: "improve",
            title: "Share your page",
            description: "Start sending customers to your new Faqt page.",
            time: "Recommended",
        });
        return updates;
    }


    /*
        STATE 3
        Existing user
    */

    // Latest enquiry
    const latestEnquiry = enquiries[0];
    if (latestEnquiry) {

        updates.push({
            type: "enquiry",
            title: "New enquiry received",
            description: "A customer has sent you a new message.",
            time: timeAgo(latestEnquiry.createdAt),
        });

    }


    // Banner expiry
    if ( page.banner?.enabled && page.banner.showUntil) {

        const days = Math.ceil(  ( new Date(page.banner.showUntil).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
        if (days <= 7 && days >= 0) {

            updates.push({
                type: "announcement",
                title: "Announcement expiring soon",
                description: `Your announcement expires in ${days} days.`,
                time: "Action needed",
            });

        }
    }

    // Opening hours update
    if ( page.tools.openingHours && page.openingHours) {
        updates.push({
            type: "openingHours",
            title: "Opening hours updated",
            description: "Your business opening hours have changed.",
            time: timeAgo(page.openingHours.updatedAt),
        });

    }

    // Services update
    if ( page.tools.services && page.services?.length) {
        const latestService = page.services[0];
        updates.push({
            type: "services",
            title: "Services updated",
            description:`${latestService.name} was added or updated.`,
            time:timeAgo(latestService.updatedAt),
        });

    }


    // Theme update
    if (page.branding.updatedAt) {

        updates.push({
            type: "theme",
            title: "Your page theme was updated",
            description: "Your public page appearance has changed.",
            time: timeAgo(page.branding.updatedAt),
        });

    }

    return updates.slice(0,4);
}