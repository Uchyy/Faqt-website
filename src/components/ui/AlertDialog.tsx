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

        <AlertDialogPrimitive.Overlay
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />


        <AlertDialogPrimitive.Content
          className={`
            fixed left-1/2 top-1/2
            w-[90%] max-w-md
            -translate-x-1/2 -translate-y-1/2
            rounded-2xl bg-white shadow-xl
            max-h-[85vh]
            overflow-hidden
            ${stickyFooter ? "flex flex-col" : ""}
          `}>

          <AlertDialogPrimitive.Title
            className="
              font-heading text-xl font-semibold text-text
              pl-6 pt-4 pb-4 bg-accent/10
            ">
            {title}
          </AlertDialogPrimitive.Title>


          {description && (
            <AlertDialogPrimitive.Description
              className="mt-2 text-sm text-muted-foreground">
              {description}
            </AlertDialogPrimitive.Description>
          )}


          {stickyFooter ? (
            <>
              <div className="flex-1 overflow-y-auto">
                {children}
              </div>


              <div className="border-t bg-white p-6 flex justify-end gap-3">

                <AlertDialogPrimitive.Cancel
                  className="rounded-3xl border px-4 py-2 hover:bg-black/5"
                >
                  {cancelText}
                </AlertDialogPrimitive.Cancel>


                <AlertDialogPrimitive.Action
                  onClick={(e) => {
                    const success = onAction();

                    if (success === false) {
                      e.preventDefault();
                    }
                  }}
                  className="
                    rounded-3xl bg-black
                    px-4 py-2 text-white
                    hover:bg-black/80
                  "
                >
                  {actionText}
                </AlertDialogPrimitive.Action>

              </div>
            </>

          ) : (

            <>
              <div className="p-6">
                {children}
              </div>


              <div className="p-6 pt-0 flex justify-end gap-3">

                <AlertDialogPrimitive.Cancel
                  className="rounded-3xl border px-4 py-2 hover:bg-black/5"
                >
                  {cancelText}
                </AlertDialogPrimitive.Cancel>


                <AlertDialogPrimitive.Action
                  className="
                    px-4 py-2 rounded-3xl
                    bg-black text-white
                    hover:bg-black/80
                  "
                  onClick={(e) => {
                    const success = onAction();

                    if (success === false) {
                      e.preventDefault();
                    }
                  }}
                >
                  {actionText}
                </AlertDialogPrimitive.Action>

              </div>
            </>
          )}

        </AlertDialogPrimitive.Content>

      </AlertDialogPrimitive.Portal>

    </AlertDialogPrimitive.Root>
  );
}