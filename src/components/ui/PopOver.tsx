import * as Popover from "@radix-ui/react-popover";

type Props = {
    title: string;
    icon: React.ReactNode;
    active?: boolean;
    children: React.ReactNode;
};

export default function SidebarPopoverGroup({ title, icon, active = false, children, }: Readonly<Props>) {

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                        active
                            ? "bg-accent/10 text-accent"
                            : "text-muted-foreground hover:bg-black/5"
                    }`} >
                    {icon}
                </button>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    side="right"
                    align="start"
                    sideOffset={12}
                    className="w-64 rounded-2xl border border-border bg-white p-3 shadow-xl">
                    <h3 className="mb-3 text-xs font-bold uppercase text-muted-foreground">
                        {title}
                    </h3>

                    <div className="space-y-1">
                        {children}
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}