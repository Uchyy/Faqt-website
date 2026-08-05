import { BarChart3, ChevronRight, MessageCircleQuestion, Sparkles, Users, Globe, HelpCircle, Megaphone,} from "lucide-react";

import { Page } from "../../../../model/Page";
import { getWhatsHappening } from "../../../../utils/getWhatsHappening";


type Props = {
    page: Page;
};


export default function WhatsHappening({ page }: Readonly<Props>) {

    const events = getWhatsHappening(page);
    const eventStyles = {

        update: {
            icon: <MessageCircleQuestion size={20} />,
            style: "bg-accent/10 text-accent",
        },

        improve: {
            icon: <Sparkles size={20} />,
            style: "bg-yellow-100 text-yellow-600",
        },

        insight: {
            icon: <BarChart3 size={20} />,
            style: "bg-blue-100 text-blue-600",
        },

        team: {
            icon: <Users size={20} />,
            style: "bg-purple-100 text-purple-600",
        },

        published: {
            icon: <Globe size={20} />,
            style: "bg-green-100 text-green-600",
        },

        setup: {
            icon: <HelpCircle size={20} />,
            style: "bg-red-100 text-red-600",
        },

        banner: {
            icon: <Megaphone size={20} />,
            style: "bg-orange-100 text-orange-600",
        },
    };


    return (
        <section className="rounded-2xl border border-border bg-accent/5 p-5 shadow-lg transition hover:shadow-md">

            <div className="mb-1">

                <h2 className="font-heading text-xl font-bold text-text">
                    Stay updated
                </h2>

                <p className="mt-1 font-unica text-xs font-bold uppercase tracking-[0.05rem] text-accent">
                    Important actions and recommendations
                </p>

            </div>


            <div className="flex flex-col gap-1">

                {events.map((event, index) => {

                    const style = eventStyles[event.type];

                    return (
                        <div
                            key={index}
                            className="flex min-h-[90px] items-center gap-4 rounded-xl bg-background pr-4 py-3 pl-2 transition hover:bg-accent/5">

                            <div className={`${style.style} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl`}>
                                {style.icon}
                            </div>


                            <div className="flex flex-1 flex-col">

                                <span className="font-grizzy text-sm font-bold text-text">
                                    {event.title}
                                </span>


                                <span className="mt-1 text-xs text-muted-foreground font-blackOps tracking-[0.02rem]">
                                    {event.description}
                                </span>


                                <span className="mt-2 text-sm font-semibold text-accent italic underline decoration-accent/50 decoration-1 underline-offset-2">
                                    {event.time}
                                </span>

                            </div>


                            <ChevronRight
                                size={18}
                                className="ml-auto text-muted-foreground"
                            />

                        </div>
                    );
                })}

            </div>

        </section>
    );
}