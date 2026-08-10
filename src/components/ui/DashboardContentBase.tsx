import { motion } from "framer-motion";

type Props = {
    title: string;
    label?: string;

    rightButtonText?: string;
    onRightButtonClick?: () => void;

    saveButtonText?: string;
    onSaveButtonClick?: () => void;

    children: React.ReactNode;
    isEmpty?: boolean;
    isEmptyText?: string;
};

export default function DashboardContentBase({ title, label, rightButtonText, onRightButtonClick, saveButtonText, onSaveButtonClick, children, isEmpty = false, isEmptyText, }: Readonly<Props>) {

    return (
        <motion.section
            className="mb-6 bg-transparent px-2 lg:px-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}>

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
                        <p className="font-grizzy text-sm font-semibold leading-relaxed text-muted-foreground lg:text-lg">
                            {label}
                        </p>
                    )}

                </div>

                {rightButtonText && (
                    <motion.button
                        onClick={onRightButtonClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-accent bg-radial-[at_15%_35%] from-black to-accent-900 to-75% px-2 py-2 font-unica text-sm font-bold uppercase tracking-[0.15rem] text-white shadow-lg transition hover:opacity-90 md:px-4">
                        {rightButtonText}
                    </motion.button>
                )}

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