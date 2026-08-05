import React from "react";
import { ChevronRight } from "lucide-react";


type Props = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    last?: boolean;
};


export default function QuickActionItem({ icon, label, onClick, last = false,}: Readonly<Props>) {

    return (
        <div className="flex flex-col gap-3 py-2 border-b border-border last:border-b-0">
            <button className=" flex  items-center  gap-3 py-3 text-left font-semibold text-text transition hover:bg-accent/5 w-full"
                onClick={onClick}>
                {icon}

                <span className="font-unica text-xs md:text-sm font-bold tracking-[0.05rem]">
                    {label}
                </span>

                <ChevronRight
                    size={18}
                    className="ml-auto text-muted-foreground"
                />

            </button>

        </div>
    );
}