import React from "react";
import { Eye, FileText, HelpCircle, MessageCircle, Globe, Contact } from "lucide-react";
import { Enquiry, Page } from "../../../../model/Page";
import { timeAgo } from "../../../../utils/timeAgo";

type ColorVariant = "black" | "yellow" | "accent" | "red";


type DashboardStat = {
    icon: React.ReactNode;
    iconColor: ColorVariant;
    value: string;
    title: string;
    label: string;
    labelColor: ColorVariant;
};


type Props = {
    page: Page;
    enquiries?: Enquiry[];
};


export default function DashboardStats({ page, enquiries = [],}: Readonly<Props>) {

    const isPublished = page.publishing.isPublished;
    const iconColors = {
        black: "bg-black/10 text-black",
        yellow: "bg-amber-100 text-amber-600",
        accent: "bg-accent/15 text-accent",
        red: "bg-red-100 text-red-600",
    };


    const labelColors = {
        black: "text-black/70",
        yellow: "text-amber-600",
        accent: "text-accent",
        red: "text-red-600",
    };

    const getStats = (): DashboardStat[] => {

        // Unpublished page
        if (!page.publishing.isPublished) {

            return [
                {
                    title: "FAQs",
                    value: page.faqts.length.toString(),
                    label: `Updated ${timeAgo(page.updatedAt)}`,
                    iconColor: "accent",
                    labelColor: "accent",
                    icon: <HelpCircle />,
                },
                {
                    title: "Documents",
                    value: page.documents.length.toString(),
                    label: `Updated ${timeAgo(page.updatedAt)}`,
                    iconColor: "yellow",
                    labelColor: "yellow",
                    icon: <FileText />,
                },
                {
                    title: "Contacts",
                    value: Object.values(page.contact)
                        .filter(Boolean)
                        .length
                        .toString(),
                    label: "Business details added",
                    iconColor: "black",
                    labelColor: "black",
                    icon: <Contact />,
                },
                    {
                        title: isPublished ? "Live" : "Draft",
                        value: "",
                        label: isPublished ? `Published ${timeAgo(page.publishing.publishedAt ?? new Date())}` : "Complete setup",
                        iconColor: "red",
                        labelColor: "red",
                        icon: <Globe />,
                    },
            ];
        }

        // Published page
        const stats: DashboardStat[] = [
            {
                title: "Views",
                value: page.view,
                label: `Updated ${timeAgo(page.updatedAt)}`,
                iconColor: "accent",
                labelColor: "accent",
                icon: <Eye />,
            },
        ];

        // Enquiries enabled
        if (page.tools.enquiries) {
            console.log("ENQUIRY IS ENABLES")
            stats.push({
                title: "Enquiries",
                value: enquiries.length.toString(),
                label: `Updated ${timeAgo(page.updatedAt)}`,
                iconColor: "red",
                labelColor: "red",
                icon: <MessageCircle />,
            });

        } 
        
        // Enquiries disabled
        else {
            console.log("ENQUIRY IS DISABLED")
            stats.push({
                title: page.business.name,
                value: "Live",
                label: `Published ${timeAgo(page.publishing.publishedAt ?? new Date())}`,
                iconColor: "black",
                labelColor: "black",
                icon: <Globe />,
            });

        }



        stats.push(
            {
                title: "FAQs",
                value: page.faqts.length.toString(),
                label: `Updated ${timeAgo(page.updatedAt)}`,
                iconColor: "yellow",
                labelColor: "yellow",
                icon: <HelpCircle />,
            },
            {
                title: "Documents",
                value: page.documents.length.toString(),
                label: `Updated ${timeAgo(page.updatedAt)}`,
                iconColor: "black",
                labelColor: "black",
                icon: <FileText />,
            },
        );


        return stats;
    };


    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6">

            {getStats().map((stat) => (

                <div
                    key={stat.title}
                    className="flex items-center gap-4 rounded-2xl border-b border-border bg-white p-5 shadow-lg transition hover:shadow-md" >

                    <div className={`${iconColors[stat.iconColor]} flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl`}>
                        {stat.icon}
                    </div>


                    <div className="flex flex-col items-start">

                        <p className="font-grizzy text-3xl font-bold leading-none text-black">
                            {stat.value}
                        </p>

                        <p className="mt-1 font-unica text-base font-semibold text-black">
                            {stat.title}
                        </p>

                        <p className={`mt-2 font-blackOps text-xs ${labelColors[stat.labelColor]}`}>
                            {stat.label}
                        </p>

                    </div>

                </div>

            ))}

        </div>
    );
}