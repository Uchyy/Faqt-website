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

export default function DashboardContentBase({ title, label, rightButtonText, onRightButtonClick, saveButtonText, isEmpty = false, onSaveButtonClick, children, isEmptyText}: Readonly<Props>) {

  return (
    <section className="mb-6 bg-transparent px-2 lg:px-0">

      <div className="flex justify-between items-center mb-4">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-start justify-start text-left">
            <h1 className="text-base md:text-2xl lg:text-3xl font-bold font-heading text-text">
                    {title}
            </h1>

            {label && (
                <p className="text-sm lg:text-lg font-semibold font-grizzy text-muted-foreground leading-relaxed">
                    {label}
                </p>
            )}
            </div>

            {rightButtonText && (
                <button onClick={onRightButtonClick} className=" px-2 md:px-4 py-2 text-sm font-bold uppercase font-unica shadow-lg 
                    tracking-[0.15rem] text-white transition bg-accent bg-radial-[at_15%_35%] from-black to-accent-900 to-75% hover:opacity-90 ">
                    {rightButtonText}
                </button>
                )
            }
        </div>

        {/* CONTENT */}
        { isEmpty ? (
                <div className="px-4 pb-4 w-[100%] h-[50%] flex justify-center items-center">
                    <p className="text-sm text-muted-foreground font-unica font-bold mt-1 tracking-[0.3rem]">
                        {isEmptyText || "No content available."}
                    </p>
                </div>
            ) : (
                <div className=" pb-4">
                    {children}
                </div>
            )
        }
      

        {/* SAVE BUTTON */}
        {saveButtonText && (
            <div className="flex justify-end px-4 pb-4">
            <button
                onClick={onSaveButtonClick}
                className=" rounded-xl bg-black px-5 py-2 text-sm font-bold uppercase font-unica tracking-[0.2rem] text-white hover:opacity-90 transition">
                {saveButtonText}
            </button>
            </div>
        )}

    </section>
  );
}