import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";

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
};


export default function AlertDialog({
    trigger,
    title,
    description,
    children,
    cancelText = "Cancel",
    actionText = "Continue",
    stickyFooter = false,
    onAction,
    open,
    onOpenChange,
}: Readonly<AlertDialogProps>) {

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
                    className=" fixed left-1/2 top-1/2 z-[60] flex w-[80%] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-xl">

                    {/* HEADER */}
                    <div className=" shrink-0 border-b border-border bg-accent/10">
                        <AlertDialogPrimitive.Title className=" px-6 py-4 font-heading text-xl font-semibold text-text">
                            {title}
                        </AlertDialogPrimitive.Title>

                        {description && (
                            <AlertDialogPrimitive.Description className=" px-6 pb-4 text-sm text-muted-foreground">
                                {description}
                            </AlertDialogPrimitive.Description>
                        )}

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

                            <AlertDialogPrimitive.Cancel className="rounded-3xlborder px-4 py-2hover:bg-black/5">
                                {cancelText}
                            </AlertDialogPrimitive.Cancel>

                            <AlertDialogPrimitive.Action
                                onClick={handleAction}
                                className=" rounded-3xl bg-black px-4 py-2 text-white hover:bg-black/80">
                                {actionText}
                            </AlertDialogPrimitive.Action>

                        </div>
                    )}


                    {!stickyFooter && (
                        <div className=" flex justify-end gap-3 p-6 pt-3 bg-accent/10">
                            <AlertDialogPrimitive.Cancel
                                className=" rounded-3xl border px-4 py-2 hover:bg-black/5">
                                {cancelText}
                            </AlertDialogPrimitive.Cancel>

                            <AlertDialogPrimitive.Action
                                onClick={handleAction}
                                className=" rounded-3xl bg-black px-4 py-2 text-white hover:bg-black/80">
                                {actionText}
                            </AlertDialogPrimitive.Action>

                        </div>
                    )}

                </AlertDialogPrimitive.Content>

            </AlertDialogPrimitive.Portal>

        </AlertDialogPrimitive.Root>
    );
}