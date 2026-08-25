import { motion } from "framer-motion";
import { useDashboardData } from "../../context/DashBoardDataContext";
import { AlertCircle, Upload } from "lucide-react";


type Props = {
    title: string;
    label?: string;

    rightButtonText?: string;
    onRightButtonClick?: () => void;
    rightButton?: React.ReactNode;
    saveButtonText?: string;
    onSaveButtonClick?: () => void;

    children: React.ReactNode;
    isEmpty?: boolean;
    isEmptyText?: string;
};

export default function DashboardContentBase({ title, label, rightButtonText, onRightButtonClick, saveButtonText, onSaveButtonClick, children, isEmpty = false, isEmptyText, rightButton}: Readonly<Props>) {

    const { page, publishPage } = useDashboardData();
    const hasUnpublishedChanges = page.status === "draft";

    return (
        <motion.section
            className="mb-6 bg-transparent px-2 lg:px-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}>

            {/* PUBLISH REMINDER */}
            {hasUnpublishedChanges && (
                <motion.div
                    className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-accent/20 bg-accent/10 px-4 py-3 "
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.25,
                        ease: "easeOut",
                    }}>
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <AlertCircle
                                size={17}
                                className="text-accent"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="font-heading text-sm font-semibold text-text">
                                You have unpublished changes
                            </p>

                            <p className="hidden text-xs text-muted-foreground sm:block">
                                Publish your changes to make them visible to your customers.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={publishPage}
                        className="flex shrink-0 items-center gap-2 rounded-lg bg-black px-3 py-2 font-unica text-xs font-bold uppercase tracking-[0.08rem] text-white transition hover:opacity-80">
                        <Upload size={14} />
                        <span>Publish</span>
                    </button>
                </motion.div>
            )}

            {/* HEADER */}
            <motion.div
                className="mb-4 flex items-center justify-between"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.05,
                    ease: "easeOut",
                }} >

                {/* LEFT SIDE */}
                <div className="flex flex-col items-start justify-start text-left">

                    <h1 className="font-heading text-base font-bold text-text md:text-2xl lg:text-3xl">
                        {title}
                    </h1>

                    {label && (
                        <span className="text-sm text-black font-unica font-bold mt-1 tracking-3">
                            {label}
                        </span>
                    )}

                </div>

                {rightButton || rightButtonText ? (
                    rightButton ?? (
                        <motion.button
                            onClick={onRightButtonClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-accent bg-radial-[at_15%_35%] from-black to-accent-900 to-75% px-2 py-2 font-unica text-sm font-bold uppercase tracking-[0.15rem] text-white shadow-lg transition hover:opacity-90 md:px-4" >
                            {rightButtonText}
                        </motion.button>
                    )
                ) : null}
       
            </motion.div>


            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.35,
                    delay: 0.1,
                    ease: "easeOut",
                }}>

                {isEmpty ? (
                    <div className="flex h-[50%] w-full items-center justify-center px-4 pb-4">
                        <p className="mt-1 font-unica text-sm font-bold tracking-[0.3rem] text-muted-foreground">
                            {isEmptyText || "No content available."}
                        </p>
                    </div>
                ) : (
                    <div className="pb-4">
                        {children}
                    </div>
                )}

            </motion.div>


            {/* SAVE BUTTON */}
            {saveButtonText && (
                <motion.div
                    className="flex justify-end px-4 pb-4"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.15,
                        ease: "easeOut",
                    }}>
                    <motion.button
                        onClick={onSaveButtonClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-xl bg-black px-5 py-2 font-unica text-sm font-bold uppercase tracking-[0.2rem] text-white transition hover:opacity-90">
                        {saveButtonText}
                    </motion.button>
                </motion.div>
            )}

        </motion.section>
    );
}