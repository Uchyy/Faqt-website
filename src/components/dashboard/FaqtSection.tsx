import CollapsibleSection from "../ui/CollapsibleSection";
import Button from "../ui/Button";
import { Plus, Trash2, Pencil, BadgeQuestionMark } from "lucide-react";
import { useContext, useState } from "react";
import { emptyFaqtItem } from "../../model/FaqtItem";
import type { FaqtItem } from "../../model/FaqtItem";
import FaqtDialog from "../Faqt/FaqtDialog";
import { PageContext } from "../../context/PageContext";
import { stringifyPage } from "../../model/Page";

export default function FaqSection() {
  const context = useContext(PageContext);

  const faqts = context?.page.faqts ?? [];
  const [newFaqt, setNewFaqt] = useState<FaqtItem>(emptyFaqtItem);
  const [editingFaqt, setEditingFaqt] = useState<FaqtItem | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  const [faqtErrors, setFaqtErrors] = useState<Partial<FaqtItem>>({});

  const addFaqt = () => {
    const errors: Partial<FaqtItem> = {};

    if (!newFaqt.question.trim()) {
      errors.question = "Question is required";
    }

    if (!newFaqt.answer.trim()) {
      errors.answer = "Answer is required";
    }

    setFaqtErrors(errors);

    if (Object.keys(errors).length > 0) {
      return false;
    }

    const faqtToAdd: FaqtItem = {  ...newFaqt,  id: crypto.randomUUID(),};
    context?.updatePage({faqts: [ ...faqts, faqtToAdd]});

    setNewFaqt(emptyFaqtItem);
    setFaqtErrors({});

    return true;
  };


  const editFaqt = () => {

    if (!editingFaqt) return false;

    const errors: Partial<FaqtItem> = {};

    if (!editingFaqt.question.trim()) {
      errors.question = "Question is required";
    }

    if (!editingFaqt.answer.trim()) {
      errors.answer = "Answer is required";
    }

    setFaqtErrors(errors);
    if (Object.keys(errors).length > 0) {
      return false;
    }

    context?.updatePage({
      faqts: faqts.map((faqt) =>
        faqt.id === editingFaqt.id
          ? editingFaqt
          : faqt
      )
    });


    setEditingFaqt(null);
    setFaqtErrors({});

    return true;
  };

  const removeFaqt = (index: number) => {
    context?.updatePage({
      faqts: faqts.filter((_, i) => i !== index)
    });
  };

  const handleSave = () => {
    console.log("Form valid:", { faqts });
    const updatedPage = context?.updatePage({ faqts });

    if (!context) {
      console.log("No PageContext available");
      return;
    }

    console.log("UPDATED PAGE:", updatedPage);
    if(updatedPage){
      console.log( "Page updated:", stringifyPage(updatedPage) );
    } 
  };


  return (
    <CollapsibleSection
      title="FAQs"
      label={`${faqts.length} question${faqts.length === 1 ? "" : "s"} on your public page`}
      button={
        <FaqtDialog
            mode="add"
            faqt={newFaqt}
            setFaqt={setNewFaqt}
            errors={faqtErrors}
            onClearError={(field) =>
                setFaqtErrors((prev) => ({
                ...prev,
                [field]: undefined,
                }))
            }
            onSave={addFaqt}
            trigger={
              <Button icon={<Plus size={18}/>}>
                  Add Faqt
              </Button>
            }
          />
        }>

        {
          faqts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 p-8 mt-4 rounded-2xl border border-dashed bg-white">
                <BadgeQuestionMark
                    size={24}
                    className="text-accent"
                />

                <p className="font-heading font-semibold text-text">
                    No FAQs yet
                </p>

                <p className="text-sm text-muted-foreground text-center">
                    Start with the questions customers ask most often.
                </p>
            </div>
          ) : (

            <div className="space-y-4 mt-4">
                {faqts.map((faqt, index) => (
                    <div
                    key={faqt.id}
                    className="border border-border rounded-2xl bg-accent/5 mb-4 p-4 ">

                    <div className="flex justify-between items-start">

                        <div className="flex flex-col text-left">

                            <p className="font-heading font-bold text-text">
                                {faqt.question || `FAQ ${index + 1}`}
                            </p>

                            <p className="text-sm text-muted-foreground mt-2">
                                {faqt.answer || "No answer added yet"}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                icon={<Pencil size={20}/>}
                                color="white"
                                onClick={() => {
                                    setEditingFaqt({...faqt});
                                    setEditOpen(true);
                                }}
                            />

                            <Button
                                icon={
                                    <Trash2 
                                        size={20}
                                        className="text-red-500"
                                    />
                                }
                                color="white"
                                onClick={() => removeFaqt(index)}
                            />
                        </div>
                    </div>
                  </div>
                ))}
            </div>

          )
        }

        {editingFaqt && (
            <FaqtDialog
                mode="edit"
                faqt={editingFaqt}
                setFaqt={setEditingFaqt}
                errors={faqtErrors}
                open={editOpen}
                onOpenChange={(open)=>{
                    setEditOpen(open);

                    if(!open){
                        setEditingFaqt(null);
                        setFaqtErrors({});
                    }
                }}
                onClearError={(field)=>
                    setFaqtErrors(prev=>({
                        ...prev,
                        [field]:undefined
                    }))
                }
                onSave={editFaqt}
            />
        )}

        {faqts.length > 0 && (
          <div className="flex justify-end">
            <Button onClick={handleSave} className="w-1/2">
                Save changes
            </Button>
          </div>
        )}

    </CollapsibleSection>
  );
}