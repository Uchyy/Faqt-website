import { useState, type ReactNode } from "react";
type SingleFileInputProps = {
  label?: string;
  accept?: string;
  description?: string;
  error?: string;
  shadow?: boolean;
  color?: "black" | "accent";
  icon?: ReactNode;
  maxFiles: 1;
  multiple: false;
  value: File | null;
  onChange: (file: File | null) => void;
};

type MultipleFileInputProps = {
  label?: string;
  accept?: string;
  description?: string;
  error?: string;
  shadow?: boolean;
  color?: "black" | "accent";
  icon?: ReactNode;

  multiple: true;
  value: File[];
  onChange: (files: File[]) => void;
  maxFiles: number;
};

type FileInputProps = | SingleFileInputProps | MultipleFileInputProps;

export default function FileInput( props: Readonly<FileInputProps>) {

  const borderStyle =
    props.color === "black"
      ? "border-black focus-within:ring-black"
      : "border-accent focus-within:ring-accent";


  const fileName = Array.isArray(props.value)
    ? `${props.value.length} files selected`
    : props.value?.name;

  const removeFile = (fileToRemove: File) => {
  if (props.multiple !== true) return;

  const updatedFiles = props.value.filter(
    (file) =>
      file.name !== fileToRemove.name ||
      file.lastModified !== fileToRemove.lastModified
  );

  props.onChange(updatedFiles);
};
    
  const [fileError, setFileError] = useState("");  

  return (
    <div className="w-full">

      {props.label && (
        <label className="block text-sm mb-1 text-muted-foreground font-heading font-semibold">
          {props.label}
        </label>
      )}

      {
        props.description && (
        <p className="text-sm text-muted-foreground mb-3">
            {props.description}
        </p>
        )
      }


      <label
        className={`
          flex items-center justify-between
          w-full rounded-2xl border bg-white px-4 py-3 mt-4
          cursor-pointer transition
          focus-within:ring-2
          ${props.shadow ? "shadow-sm" : ""}
          ${borderStyle}
          ${props.error ? "border-red-500 focus-within:ring-red-300" : ""}
        `} >

        <div className="flex items-center gap-3 min-w-0">

          {props.icon && (
            <div className="text-muted-foreground shrink-0">
              {props.icon}
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
          accept={props.accept}
          multiple={props.multiple}
          className="hidden"
          onChange={(e) => {
            const selectedFiles = Array.from(
              e.target.files ?? []
            );

            if (props.multiple ) {
              const existingFiles = Array.isArray(props.value)
                ? props.value
                : [];

              const updatedFiles = [
                ...existingFiles,
                ...selectedFiles,
              ].filter(
                (file, index, self) =>
                  index ===
                  self.findIndex(
                    (item) =>
                      item.name === file.name &&
                      item.lastModified === file.lastModified
                  )
              );

              if (updatedFiles.length > props.maxFiles) {
                setFileError(
                  `You can upload a maximum of ${props.maxFiles} files.`
                );

                e.target.value = "";
                return;
              }

              setFileError("");

              props.onChange(updatedFiles);

            } else {
              setFileError("");

              props.onChange(
                (selectedFiles[0] ?? null) 
              );
            }

            // Allow selecting the same file again after removing it
            e.target.value = "";
          }}
        />

      </label>

      {props.multiple && Array.isArray(props.value) && (
        <div className="mt-2 space-y-2">
            {props.value.map((file) => (
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
          {props.error || " "}
        </p>
      </div>

    </div>
  );
}