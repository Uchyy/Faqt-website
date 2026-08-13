import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";
import {X} from "lucide-react";

type AlertDialogProps = {
    trigger?: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
    cancelText?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    actionText?: string;
    onAction: () => boolean | void;
    stickyFooter?: boolean; 
    type?: "form" | "delete" 
};


export default function AlertDialog({ trigger, title, description, children, type = "form", actionText = "Continue",stickyFooter = false, onAction, open, onOpenChange, }: Readonly<AlertDialogProps>) {

    function handleAction(
        e: React.MouseEvent<HTMLButtonElement>
    ) {
        const success = onAction();

        if (success === false) {
            e.preventDefault();
        }
    }


    return (
        <AlertDialogPrimitive.Root
            open={open}
            onOpenChange={onOpenChange}>

            {trigger && (
                <AlertDialogPrimitive.Trigger asChild>
                    {trigger}
                </AlertDialogPrimitive.Trigger>
            )}

            <AlertDialogPrimitive.Portal>
                <AlertDialogPrimitive.Overlay className=" fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm "/>

                <AlertDialogPrimitive.Content
                    className= {`fixed left-1/2 top-1/2 z-[60] flex ${type === "delete" ? "h-fit w-fit" : "max-w-2xl max-h-[85vh] w-[80%]"} -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-xl`}>

                    {/* HEADER */}
                    <div className="flex items-center justify-between px-6 py-4">

                        {/* LEFT SIDE*/}
                        <div className="flex flex-col items-start justify-start text-left">

                            <AlertDialogPrimitive.Title className="font-heading text-base font-bold text-text md:text-2xl lg:text-3xl">
                                {title}
                            </AlertDialogPrimitive.Title>

                            {description && (
                                <AlertDialogPrimitive.Description className="font-unica text-sm leading-relaxed text-muted-foreground lg:text-base">
                                    {description}
                                </AlertDialogPrimitive.Description>
                            )}

                        </div>

                         {/*RIGHT SIDE */}
                            <AlertDialogPrimitive.Cancel className="rounded-3xlborder px-4 py-2hover:bg-black/5">
                                <X size={20}/>
                            </AlertDialogPrimitive.Cancel>


                    </div>


                    {/* BODY */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                            {children}
                        </div>

                    </div>


                    {/* FOOTER */}
                    {stickyFooter && (
                        <div className=" shrink-0 flex justify-end gap-3 border-t bg-white p-6 bg-accent/10">

                           <AlertDialogPrimitive.Action
                                onClick={handleAction}
                                className={`rounded-3xl px-4 py-2 ${
                                    type === "delete"
                                        ? "border border-red-500 bg-white text-red-500 hover:bg-red-50"
                                        : "bg-black text-white hover:bg-black/80"
                                }`}>
                                {actionText}
                            </AlertDialogPrimitive.Action>
                        </div>
                    )}


                    {!stickyFooter && (
                        <div className=" flex justify-end gap-3 p-6 pt-3">

                            <AlertDialogPrimitive.Action
                                onClick={handleAction}
                                className={`rounded-3xl px-4 py-2 ${
                                    type === "delete"
                                        ? "border border-red-500 bg-white text-red-500 hover:bg-red-50"
                                        : "bg-accent bg-radial-[at_15%_35%] from-black to-accent-900 to-75% px-2 py-2 font-unica text-sm font-bold uppercase tracking-[0.05rem] text-white shadow-lg transition hover:opacity-90 md:px-4"
                                }`}>
                                {actionText}
                            </AlertDialogPrimitive.Action>
                            

                        </div>
                    )}

                </AlertDialogPrimitive.Content>

            </AlertDialogPrimitive.Portal>

        </AlertDialogPrimitive.Root>
    );
}