import { Check, ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type SelectOption = {
    value: string;
    label: string;
};

type SelectPopoverProps = {
    label: string;
    value: string;
    placeholder: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
};

export default function SelectPopover({
    label,
    value,
    placeholder,
    options,
    onChange,
    error,
    disabled = false,
    searchable = true,
    searchPlaceholder = "Search...",
}: SelectPopoverProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const containerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(
        (option) => option.value === value
    );

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        if (!open) {
            setSearch("");
            return;
        }

        if (searchable) {
            requestAnimationFrame(() => {
                searchRef.current?.focus();
            });
        }
    }, [open, searchable]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const handleSelect = (option: SelectOption) => {
        onChange(option.value);
        setOpen(false);
        setSearch("");
    };

    return (
        <div ref={containerRef}>
            <label className="mb-1.5 block text-xs font-medium tracking-wide text-slate-600">
                {label}
            </label>

            <div className="relative">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setOpen((prev) => !prev)}
                    className={`flex h-11 w-full items-center justify-between rounded-md border bg-white px-3 text-sm transition ${
                        error
                            ? "border-red-500"
                            : open
                              ? "border-slate-400"
                              : "border-slate-200 hover:border-slate-300"
                    } ${
                        disabled
                            ? "cursor-not-allowed bg-slate-50 text-slate-400"
                            : "text-slate-700"
                    }`}
                >
                    <span
                        className={
                            !selectedOption
                                ? "text-slate-400"
                                : "text-slate-700"
                        }
                    >
                        {selectedOption?.label ?? placeholder}
                    </span>

                    <ChevronDown
                        size={17}
                        className={`shrink-0 transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {open && !disabled && (
                    <div className="absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                        {searchable && (
                            <div className="border-b border-slate-100 p-2">
                                <div className="relative">
                                    <Search
                                        size={16}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        ref={searchRef}
                                        type="text"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(event.target.value)
                                        }
                                        placeholder={searchPlaceholder}
                                        className="h-9 w-full rounded-md bg-slate-50 pl-9 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:bg-slate-100"
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        <div className="max-h-56 overflow-y-auto p-1">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                                    >
                                        <span>{option.label}</span>

                                        {option.value === value && (
                                            <Check
                                                size={16}
                                                className="shrink-0"
                                            />
                                        )}
                                    </button>
                                ))
                            ) : (
                                <div className="px-3 py-6 text-center text-sm text-slate-400">
                                    No results found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}