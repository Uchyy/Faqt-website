import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  label?: string;
  children: React.ReactNode;
};

export default function CollapsibleSection({
  title,
  label,
  children,
}: Readonly<Props>) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-border rounded-2xl bg-white p-6 m-6 ">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between px-4 py-3"
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start text-left">
          <span className="font-semibold text-text font-heading text-2xl">
            {title.toLocaleUpperCase()}
          </span>

          {label && (
            <span className="text-sm text-accent font-unica font-semibold mt-1">
              {label}
            </span>
          )}
        </div>

        {/* RIGHT SIDE (icon far right) */}
        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

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