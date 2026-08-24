import { Upload } from "lucide-react";
import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

export type FileUploadRef = {
    open: () => void;
};

type FileUploadProps = {
    label?: string;
    accept?: string;
    multiple?: boolean;
    onSelect: (files: File[]) => void;
};

const FileUpload = forwardRef<FileUploadRef, FileUploadProps>(
    function FileUpload(
        {
            label = "Upload file",
            accept,
            multiple = false,
            onSelect,
        },
        ref,
    ) {
        const inputRef = useRef<HTMLInputElement>(null);
        const [dragging, setDragging] = useState(false);

        useImperativeHandle(ref, () => ({
            open: () => {
                inputRef.current?.click();
            },
        }));

        const handleFiles = (files: FileList | null) => {
            if (!files) return;

            onSelect(Array.from(files));

            if (inputRef.current) {
                inputRef.current.value = "";
            }
        };

        return (
            <button
                type="button"
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    handleFiles(e.dataTransfer.files);
                }}
                onClick={() => inputRef.current?.click()}
                className={`
                    flex cursor-pointer flex-col items-center justify-center
                    rounded-2xl border-2 border-dashed
                    px-6 py-10
                    transition
                    ${
                        dragging
                            ? "border-accent bg-accent/10"
                            : "border-border bg-white hover:border-accent"
                    }
                `}
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Upload size={22} className="text-accent" />
                </div>

                <p className="mt-4 text-sm font-medium text-text">
                    {label}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                    Drag and drop or click to browse
                </p>

                <input
                    ref={inputRef}
                    type="file"
                    hidden
                    multiple={multiple}
                    accept={accept}
                    onChange={(e) => handleFiles(e.target.files)}
                />
            </button>
        );
    },
);

export default FileUpload;