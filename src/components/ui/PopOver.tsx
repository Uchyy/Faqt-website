import * as Popover from "@radix-ui/react-popover";

type Props = {
    title: string;
    icon: React.ReactNode;
    active?: boolean;
    children: React.ReactNode;
    backgroundColor?: string;
};

export default function SidebarPopoverGroup({ title, icon, active = false, children, backgroundColor = "bg-black"    }: Readonly<Props>) {

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button
                    className={`flex h-12 w-12 m-2 items-center justify-center rounded-2xl transition hover:bg-accent/20 ${
                        active  ? "bg-accent/10 "  : ""
                    }`} >
                    {icon}
                </button>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side="right"
                    align="start"
                    sideOffset={12}
                    className={`w-fit rounded-2xl border border-border ${backgroundColor} px-6 py-4 shadow-xl`}>
                        <h3 className="mb-3 text-sm font-bold uppercase font-unica uppercase text-white tracking-[0.2rem]">
                            {title}
                        </h3>

                        <div className="border-t border-border mb-4"></div>

                        <div className="space-y-3">
                            {children}
                        </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}