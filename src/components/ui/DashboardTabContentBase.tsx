import React from "react";

type Tab = {
    id: string;
    label: string;
};


type Props = {
    title: string;
    label?: string;

    tabs: Tab[];
    activeTab: string;
    onTabChange: (tab: string) => void;

    rightButtonText?: string;
    onRightButtonClick?: () => void;

    saveButtonText?: string;
    onSaveButtonClick?: () => void;

    children: React.ReactNode;

    isEmpty?: boolean;
    isEmptyText?: string;
};


export default function DashboardTabContentBase({
    title,
    label,
    tabs,
    activeTab,
    onTabChange,
    rightButtonText,
    onRightButtonClick,
    saveButtonText,
    onSaveButtonClick,
    children,
    isEmpty = false,
    isEmptyText,
}: Readonly<Props>) {

    return (
        <section className="mb-6 bg-transparent px-2 lg:px-0">

            {/* HEADER */}
            <div className="mb-4 flex items-center justify-between">

                <div className="flex flex-col text-left">

                    <h1 className="font-heading text-base font-bold text-text md:text-2xl lg:text-3xl">
                        {title}
                    </h1>

                    {label && (
                        <p className="font-grizzy text-sm font-semibold leading-relaxed text-muted-foreground lg:text-lg">
                            {label}
                        </p>
                    )}

                </div>


                {rightButtonText && (
                    <button
                        onClick={onRightButtonClick}
                        className="
                            bg-accent bg-radial-[at_15%_35%] from-black
                            to-accent-900 to-75%
                            px-2 py-2 text-sm font-bold uppercase
                            tracking-[0.15rem] text-white shadow-lg
                            transition hover:opacity-90 md:px-4
                        "
                    >
                        {rightButtonText}
                    </button>
                )}

            </div>



            {/* TABS */}
            <div className="mb-5 flex gap-2 overflow-x-auto border-b border-border">

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            whitespace-nowrap px-4 py-2
                            font-unica text-sm font-bold
                            tracking-[0.08rem]
                            transition
                            ${
                                activeTab === tab.id
                                    ? "border-b-2 border-accent text-accent"
                                    : "text-muted-foreground hover:text-text"
                            }
                        `}
                    >
                        {tab.label}
                    </button>

                ))}

            </div>



            {/* CONTENT */}
            {
                isEmpty ? (

                    <div className="flex h-[50%] w-full items-center justify-center px-4 pb-4">

                        <p className="mt-1 font-unica text-sm font-bold tracking-[0.3rem] text-muted-foreground">
                            {isEmptyText || "No content available."}
                        </p>

                    </div>

                ) : (

                    <div className="pb-4">
                        {children}
                    </div>

                )
            }



            {/* SAVE */}
            {saveButtonText && (

                <div className="flex justify-end px-4 pb-4">

                    <button
                        onClick={onSaveButtonClick}
                        className=" rounded-xl bg-black px-5 py-2 text-sm font-bold uppercase tracking-[0.2rem] text-white transition hover:opacity-90 ">
                        {saveButtonText}
                    </button>

                </div>

            )}

        </section>
    );
}