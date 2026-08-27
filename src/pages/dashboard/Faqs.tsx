import { Plus, Trash2, Pencil, BadgeQuestionMark, EllipsisVertical, GripVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DndContext, closestCenter, type DragEndEvent,} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
    const faqts = page.faqts;

    const [newFaqt, setNewFaqt] = useState<FaqtItem>(emptyFaqtItem);
    const [editingFaqt, setEditingFaqt] = useState<FaqtItem | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteFaqt, setDeleteFaqt] = useState<FaqtItem | null>(null);
    const [faqtErrors, setFaqtErrors] = useState<Partial<FaqtItem>>({});

    const isDesktop = useMediaQuery("(min-width:1024px)");

    const sortedFaqts = sortFaqts(faqts);

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
            position: faqts.length,
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

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (!over || active.id === over.id) return;

        const oldIndex = sortedFaqts.findIndex(
            (faqt) => faqt.id === active.id
        );

        const newIndex = sortedFaqts.findIndex(
            (faqt) => faqt.id === over.id
        );

        const reorderedFaqts = arrayMove(
            sortedFaqts,
            oldIndex,
            newIndex
        ).map((faqt, index) => ({
            ...faqt,
            position: index,
        }));

        updatePage({
            faqts: reorderedFaqts,
        });
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
                            className="sm:px-3 py-4 rounded-none mr-2"
                            variant="dashboard"
                            icon={<Plus size={18} />}>
                            <span className="hidden md:inline">
                                Add FAQ
                            </span>
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
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}>

                    <SortableContext
                        items={sortedFaqts.map((faqt) => faqt.id)}
                        strategy={verticalListSortingStrategy}>
                        <div className="no-scrollbar mt-4 max-h-[70vh] space-y-4 overflow-y-auto pr-2">
                            {sortedFaqts.map((faqt, index) => (
                                <SortableFaq
                                    key={faqt.id}
                                    faqt={faqt}
                                    index={index}
                                    isDesktop={isDesktop}
                                    onEdit={() => {
                                        setEditingFaqt({ ...faqt });
                                        setEditOpen(true);
                                    }}
                                    onDelete={() => setDeleteFaqt(faqt)}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
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
                actionText="Confirm delete"
                onAction={() => {
                    if (!deleteFaqt) return;

                    updatePage({
                        faqts: faqts.filter(
                            (faqt) => faqt.id !== deleteFaqt.id
                        ),
                    });

                    setDeleteFaqt(null);
                }}
                type="delete">

                <div>
                    <span className="text-left font-bold">
                        This action will remove this FAQ from your public page.
                    </span>

                    <div className="mt-5 flex flex-col gap-3 border border-accent/10 bg-black/10 px-2 py-4">
                        <span className="text-left text-black">
                            <strong>Q:</strong>{" "}
                            {deleteFaqt?.question ?? ""}
                        </span>

                        <span className="text-left text-black">
                            <strong>A:</strong>{" "}
                            {deleteFaqt?.answer ?? ""}
                        </span>
                    </div>
                </div>
            </AlertDialog>
        </DashboardContentBase>
    );
}

function sortFaqts(faqts: FaqtItem[]) {
    return [...faqts].sort(
        (a, b) => a.position - b.position
    );
}

function SortableFaq({faqt,index, isDesktop, onEdit, onDelete, }: Readonly<{ faqt: FaqtItem; index: number; isDesktop: boolean; onEdit: () => void; onDelete: () => void; }>) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: faqt.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="mb-4 rounded-2xl border border-border bg-white p-4">
            <div className="flex max-w-lg items-start justify-between md:max-w-2xl lg:max-w-5xl">
                <div className="flex items-start gap-3">
                    <button
                        type="button"
                        {...attributes}
                        {...listeners}
                        className="mt-0.5 cursor-grab touch-none text-muted-foreground hover:text-text active:cursor-grabbing"
                        aria-label="Drag FAQ"
                    >
                        <GripVertical size={20} />
                    </button>

                    <div className="flex flex-col text-left">
                        <p className="font-heading font-bold text-text">
                            {faqt.question || `FAQ ${index + 1}`}
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                            {faqt.answer || "No answer added yet"}
                        </p>
                    </div>
                </div>

                <FaqActions
                    isDesktop={isDesktop}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
}

function FaqActions({isDesktop,onEdit,onDelete, }: Readonly<{isDesktop: boolean;onEdit: () => void;onDelete: () => void; }>) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                !buttonRef.current?.contains(target) &&
                !menuRef.current?.contains(target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [open]);

    if (isDesktop) {
        return (
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={onEdit}>
                    <Pencil size={17} />
                </Button>

                <Button
                    variant="outline"
                    onClick={onDelete}
                    className="border border-red-500">
                    <Trash2 size={17} color="red" />
                </Button>
            </div>
        );
    }

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
                    <div
                        ref={menuRef}
                        className="fixed z-50 w-32 rounded-xl border border-border bg-white p-1 shadow-lg"
                        style={{
                            top: buttonRef.current
                                ? buttonRef.current.getBoundingClientRect().bottom + 8
                                : 0,
                            left: buttonRef.current
                                ? buttonRef.current.getBoundingClientRect().right - 128
                                : 0,
                        }}>

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