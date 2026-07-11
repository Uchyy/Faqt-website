import { useState, type ReactNode } from "react";

type FileValue = File | File[] | null;

type FileInputProps<T extends File | File[] | null> = {
  label?: string;
  value?: T;
  onChange: (file: T) => void;
  accept?: string;
  description?: string;
  multiple?: boolean;
  error?: string;
  shadow?: boolean;
  color?: "black" | "accent";
  icon?: ReactNode;
  maxFiles?: number;
};

export default function FileInput<T extends File | File[] | null>({
  label,
  value,
  onChange,
  accept,
  description,
  multiple = false,
  error,
  shadow = false,
  color = "black",
  icon,
  maxFiles = 5
}: Readonly<FileInputProps<T>>) {

  const borderStyle =
    color === "black"
      ? "border-black focus-within:ring-black"
      : "border-accent focus-within:ring-accent";


  const fileName = Array.isArray(value)
    ? `${value.length} files selected`
    : value?.name;

  const removeFile = (fileToRemove: File) => {
    if (!Array.isArray(value)) return;

    const updatedFiles = value.filter(
        (file) =>
        file.name !== fileToRemove.name ||
        file.lastModified !== fileToRemove.lastModified
    );

    onChange(updatedFiles as T);
    };
    
  const [fileError, setFileError] = useState("");  


  return (
    <div className="w-full">

      {label && (
        <label className="block text-sm mb-1 text-muted-foreground font-heading font-semibold">
          {label}
        </label>
      )}

      {
        description && (
        <p className="text-sm text-muted-foreground mb-3">
            {description}
        </p>
        )
      }


      <label
        className={`
          flex items-center justify-between
          w-full rounded-2xl border bg-white px-4 py-3 mt-4
          cursor-pointer transition
          focus-within:ring-2
          ${shadow ? "shadow-sm" : ""}
          ${borderStyle}
          ${error ? "border-red-500 focus-within:ring-red-300" : ""}
        `} >

        <div className="flex items-center gap-3 min-w-0">

          {icon && (
            <div className="text-muted-foreground shrink-0">
              {icon}
            </div>
          )}

          <span className="text-sm text-muted-foreground truncate">
            {fileName || "No file selected"}
          </span>

        </div>


        <span className="text-sm font-semibold text-accent shrink-0 ml-4">
          Browse
        </span>


        <input
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files ?? []);

            if (multiple) {
                if (maxFiles && files.length > maxFiles) {
                setFileError(`You can upload a maximum of ${maxFiles} files.`);
                return;
                }

                setFileError("");
                onChange(files as T);
            } else {
                setFileError("");
                onChange((files[0] ?? null) as T);
            }
          }}
        />

      </label>

      {multiple && Array.isArray(value) && (
        <div className="mt-2 space-y-2">
            {value.map((file) => (
            <div
                key={`${file.name}-${file.lastModified}`}
                className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2 text-sm">
                <span className="truncate">
                {file.name}
                </span>

                <button
                type="button"
                onClick={() => removeFile(file)}
                className="text-red-500 text-xs font-semibold"
                >
                Remove
                </button>
            </div>
            ))}
        </div>
        )}


      <div className="mt-1 min-h-[16px]">
        <p className="text-xs text-red-500">
          {error || " "}
        </p>
      </div>

    </div>
  );
}