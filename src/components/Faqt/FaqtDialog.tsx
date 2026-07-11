import type { FaqtItem } from "../../model/FaqtItem";
import AlertDialog from "../ui/AlertDialog";
import Input from "../ui/Input";

type FaqtDialogProps = {
  mode: "add" | "edit";
  faqt: FaqtItem;
  setFaqt: (faqt: FaqtItem) => void;
  errors?: Partial<FaqtItem>;
  onClearError?: (field: keyof FaqtItem) => void;
  onSave: () => boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
};

export default function FaqtDialog({
  mode,
  faqt,
  setFaqt,
  errors,
  onClearError,
  onSave,
  open,
  onOpenChange,
  trigger,
}: Readonly<FaqtDialogProps>) {

  return (
    <AlertDialog
      trigger={trigger}
      open={open}
      onOpenChange={onOpenChange}
      title={mode === "add" ? "Add Faqt" : "Edit Faqt"}
      actionText="Save"
      onAction={onSave}>

      <div className="space-y-4">
        <Input
          label="QUESTION"
          placeholder="Do I need to book an appointment?"
          value={faqt.question}
          onChange={(value) =>
            setFaqt({
              ...faqt,
              question: value,
            })
          }
          error={errors?.question}
          onClearError={() =>
            onClearError?.("question")
          }
        />


        <Input
          label="ANSWER"
          placeholder="Yes, appointments can be booked online or by phone."
          value={faqt.answer}
          rows={3}
          onChange={(value) =>
            setFaqt({
              ...faqt,
              answer: value,
            })
          }
          error={errors?.answer}
          onClearError={() =>
            onClearError?.("answer")
          }
        />

      </div>

    </AlertDialog>
  );
}