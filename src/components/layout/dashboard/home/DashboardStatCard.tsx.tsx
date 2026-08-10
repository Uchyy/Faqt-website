import React, { useMemo } from "react";
import { Eye, MessageCircle, MousePointerClick, HeartPulse, Users } from "lucide-react";
import { Page } from "../../../../model/Page";
import { timeAgo } from "../../../../utils/timeAgo";
import { Enquiry } from "../../../../model/Enquiries";
import { getPageCompletionDetails } from "../../../../utils/pageCompletion";

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
    subscriberCount?: number | null;
};

export default function DashboardStats({ page, enquiries = [], subscriberCount = null }: Readonly<Props>) {
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

    if (!page.publishing.isPublished) return null;

    const views = page.view ?? 0;
    const enquiryCount = enquiries.length;
    const actions: number | null = null;

   const completion = useMemo(
        () => getPageCompletionDetails(page),
        [page]
    );


    const stats: DashboardStat[] = [
        {
            title: "Views",
            value: views.toString(),
            label: `Updated ${timeAgo(page.updatedAt)}`,
            iconColor: "accent",
            labelColor: "accent",
            icon: <Eye />,
        },

        {
            title: "Enquiries",
            value: enquiryCount.toString(),
            label: enquiryCount === 0 ? "No new enquiries" : `${enquiryCount} new ${enquiryCount === 1 ? "enquiry" : "enquiries"}`,
            iconColor: "red",
            labelColor: "red",
            icon: <MessageCircle />,
        },

        {
            title: "Engagement",
            value: actions === null ? "—" : "" ,
            label: actions === null ? "Analytics coming soon" : "Page interactions",
            iconColor: "black",
            labelColor: "black",
            icon: <MousePointerClick />,
        },
        
        ...(subscriberCount !== null
            ? [{
                title: "Subscribers",
                value: subscriberCount.toString(),
                label: "Stay updated",
                iconColor: "yellow" as ColorVariant,
                labelColor: "yellow" as ColorVariant,
                icon: <Users />,
            }]
            : [{
                title: "Page Health",
                value: `${completion.percentage}%`,
                label: `Last Updated ${timeAgo(page.updatedAt)}`,
                iconColor: "accent" as ColorVariant,
                labelColor: "accent" as ColorVariant,
                icon: <HeartPulse />,
            }]),
    ];

    return (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
                <div key={stat.title} className="flex items-center gap-4 rounded-2xl border-b border-border bg-white p-5 shadow-lg transition hover:shadow-md">
                    <div className={`${iconColors[stat.iconColor]} flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl`}>
                        {stat.icon}
                    </div>

                    <div className="flex flex-col items-start">
                        <p className="font-grizzy text-3xl font-bold leading-none text-black">{stat.value}</p>
                        <p className="mt-1 font-unica text-base font-semibold text-black">{stat.title}</p>
                        <p className={`mt-2 font-blackOps text-xs ${labelColors[stat.labelColor]}`}>{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
