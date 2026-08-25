import { Plus, Trash2, Pencil, BadgeQuestionMark, EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import FaqtDialog from "../../components/ui/FaqtDialog";
import { FaqtItem, emptyFaqtItem } from "../../model/FaqtItem";
import DashboardContentBase from "../../components/ui/DashboardContentBase";
import AlertDialog from "../../components/ui/AlertDialog";
import { createPortal } from "react-dom";
import { useMediaQuery } from "../../utils/useScreenSize";
import { useDashboardData } from "../../context/DashBoardDataContext";

export default function FaqsPage() {
    const { page, updatePage } = useDashboardData();
    const faqts = page.faqts


    const [newFaqt, setNewFaqt] = useState<FaqtItem>(emptyFaqtItem);
    const [editingFaqt, setEditingFaqt] = useState<FaqtItem | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteFaqt, setDeleteFaqt] = useState<FaqtItem | null>(null);
    const [faqtErrors, setFaqtErrors] = useState<Partial<FaqtItem>>({});

    const isDesktop = useMediaQuery("(min-width:1024px)");
    const isTablet = useMediaQuery("(min-width:768px)");

    const addFaqt = () => {
        const errors: Partial<FaqtItem> = {};
        if (!newFaqt.question.trim()) {
            errors.question = "Question is required";
        }

        if (!newFaqt.answer.trim()) {
            errors.answer = "Answer is required";
        }

        setFaqtErrors(errors);
        if (Object.keys(errors).length > 0) return false;

        const faqtToAdd: FaqtItem = {
            ...newFaqt,
            id: crypto.randomUUID(),
        };

        updatePage({
            faqts: [...faqts, faqtToAdd],
        });

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
        if (Object.keys(errors).length > 0) return false;

        updatePage({
            faqts: faqts.map((faqt) =>
                faqt.id === editingFaqt.id ? editingFaqt : faqt
            ),
        });

        setEditingFaqt(null);
        setFaqtErrors({});
        return true;
    };



    return (
        <DashboardContentBase
            title="FAQs"
            label={`${faqts.length} question${faqts.length === 1 ? "" : "s"} on your public page`}
            rightButton={
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
                        <Button
                            className="sm: px-3 py-4 rounded-none mr-2"
                            variant="dashboard"
                            icon={<Plus size={18} />}>
                                <span className="hidden">Add FAQ</span>
                        </Button>
                    }
                />
            }>

            {faqts.length === 0 ? (
                <div className="mt-4 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed bg-white p-8">
                    <BadgeQuestionMark
                        size={24}
                        className="text-accent"
                    />

                    <p className="font-heading font-semibold text-text">
                        No FAQs yet
                    </p>

                    <p className="text-center text-sm text-muted-foreground">
                        Start with the questions customers ask most often.
                    </p>
                </div>
            ) : (
                <div className="no-scrollbar mt-4 max-h-[60vh] space-y-4 overflow-y-auto pr-2 ">
                    {faqts.map((faqt, index) => (
                        <div
                            key={faqt.id}
                            className="mb-4 rounded-2xl border border-border bg-white p-4">

                            <div className="flex items-start justify-between max-w-lg md:max-w-2xl lg:max-w-5xl">
                                <div className="flex flex-col text-left">
                                    <p className="font-heading font-bold text-text">
                                        {faqt.question || `FAQ ${index + 1}`}
                                    </p>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {faqt.answer || "No answer added yet"}
                                    </p>
                                </div>

                                <FaqActions
                                    isDesktop={isDesktop}
                                    isTablet={isTablet}
                                    onEdit={() => {
                                        setEditingFaqt({ ...faqt });
                                        setEditOpen(true);
                                    }}
                                    onDelete={() => setDeleteFaqt(faqt)}
                                />

                                
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {editingFaqt && (
                <FaqtDialog
                    mode="edit"
                    faqt={editingFaqt}
                    setFaqt={setEditingFaqt}
                    errors={faqtErrors}
                    open={editOpen}
                    onOpenChange={(open) => {
                        setEditOpen(open);

                        if (!open) {
                            setEditingFaqt(null);
                            setFaqtErrors({});
                        }
                    }}
                    onClearError={(field) =>
                        setFaqtErrors((prev) => ({
                            ...prev,
                            [field]: undefined,
                        }))
                    }
                    onSave={editFaqt}
                />
            )}

            <AlertDialog
                open={!!deleteFaqt}
                onOpenChange={(open) => {
                    if (!open) setDeleteFaqt(null);
                }}
                title="Delete FAQ"
                actionText="Delete"
                onAction={() => {
                    if (!deleteFaqt) return;

                    updatePage({
                        faqts: faqts.filter((faqt) => faqt !== deleteFaqt),
                    });

                    setDeleteFaqt(null);
                }}
                type="delete">
                    <div>

                        <span className="text-left font-bold">
                            This action will remove this FAQ from your public page.
                        </span>

                        <div className="border border-accent/10 py-4 px-2 mt-5 flex flex-col bg-black/10 gap-3">
                            <span className="text-left text-black"> <strong > Q:  </strong>  {deleteFaqt?.question ?? ""}</span>

                            <span className="text-left text-black"> <strong > A:   </strong> {deleteFaqt?.answer ?? ""}  </span>
                        </div>
                    </div>
            </AlertDialog>

        </DashboardContentBase>
    );
}



/**
 * Social action buttons.
 */
function FaqActions({ isDesktop, isTablet,onEdit, onDelete,}: Readonly<{ isDesktop: boolean; isTablet: boolean; onEdit: () => void; onDelete: () => void; }>) {
    
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if ( buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [open]);

    /**
     * TABLET
     */
    if (isDesktop) {
        return (
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    onClick={onEdit}>
                    <Pencil size={17} />
                </Button>

                <Button
                    variant="outline"
                    onClick={onDelete}
                    className="border border-red-500">
                    <Trash2
                        size={17}
                        color="red"
                    />
                </Button>
            </div>
        );
    }

    /**
     * MOBILE
     */
    return (
        <div>
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-accent/10 hover:text-text">
                <EllipsisVertical size={20} />
            </button>

            {open &&
                createPortal(
                    <div className="fixed z-50 w-32 rounded-xl border border-border bg-white p-1 shadow-lg"
                        style={{
                            top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + 8 : 0,
                            left: buttonRef.current ? buttonRef.current.getBoundingClientRect().right - 128 : 0,
                        }} >

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onEdit();
                            }}
                            className="flex w-full items-center gap-2 border-b border-accent/20 px-3 py-2 text-sm hover:bg-slate-50">
                            <Pencil size={15} />
                            Edit
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                onDelete();
                            }}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                            <Trash2 size={15} />
                            Delete
                        </button>

                    </div>,
                    document.body
                )}
        </div>
    );
}