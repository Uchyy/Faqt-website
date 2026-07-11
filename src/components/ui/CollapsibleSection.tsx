import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  label?: string;
  button?: React.ReactNode;
  children: React.ReactNode;
};

export default function CollapsibleSection({
  title,
  label,
  button = null,
  children,
}: Readonly<Props>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl bg-white p-6 m-6 ">

      <div className="flex justify-between items-start px-4 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex-1 text-left"  >
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start text-left">
        <span className="font-semibold text-text font-heading text-2xl">
        {title.toLocaleUpperCase()}
        </span>

        {label && (
        <span className="text-sm text-accent font-unica font-bold mt-1 tracking-3">
          {label}
        </span>
        )}
      </div>
      </button>

      <div className="flex items-center gap-3">
        {button}

        <button onClick={() => setOpen(!open)}>
          <ChevronDown
            size={18}
            className={open ? "rotate-180 transition-transform" : "transition-transform"}
          />
        </button>
      </div>
    </div>

      {/* BODY */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1000px] px-4 pb-4 pt-0" : "max-h-0 px-4 pb-0 pt-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}