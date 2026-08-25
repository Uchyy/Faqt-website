import { useState } from "react";
import FileUpload from "./FileUpload";
import UploadedFile from "./UploadedFile";
import type { BusinessDocument } from "../../../model/BusinessDocument";
import Button from "../Button";
import AlertDialog from "../AlertDialog";

type Props = {
    files: BusinessDocument[];
    onChange: (files: BusinessDocument[]) => void;
    maxFiles: number;
};

export default function DocumentUpload({ files, onChange, maxFiles = 1, }: Readonly<Props>) {
    const [pendingFile, setPendingFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const handleSelect = (selected: File[]) => {
        const file = selected[0];
        if (!file) return;

        setPendingFile(file);
    };

    const addDocument = () => {
        if (!pendingFile || !title.trim()) return;

        const document: BusinessDocument = {
            id: crypto.randomUUID(),
            url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            //url: URL.createObjectURL(pendingFile),
            title: title.trim(),
        };

        onChange([...files, document].slice(0, maxFiles));

        setPendingFile(null);
        setTitle("");
    };

    const removeFile = () => {
        if (!deleteId) return;

        onChange(files.filter((file) => file.id !== deleteId));
        setDeleteId(null);
    };

    return (
        <div className="flex w-full flex-col gap-6">
            <FileUpload
                label="Add document"
                accept="application/pdf,image/png,image/jpeg,image/webp"
                multiple={false}
                onSelect={handleSelect}
            />

            {pendingFile && (
                <div className="space-y-3 rounded-2xl border border-border bg-white p-4">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Document title"
                        className="w-full rounded-xl border border-border px-3 py-2 outline-none focus:border-accent"
                    />

                    <Button
                        type="button"
                        variant="dashboard"
                        onClick={addDocument}
                        className="rounded-xl px-2 py-2 text-white">
                        Add document
                    </Button>
                </div>
            )}

            <div className="space-y-3">
                {files.map((file) => (
                    <UploadedFile
                        key={file.id}
                        name={file.title}
                        onDelete={() => setDeleteId(file.id)}
                    />
                ))}
            </div>

            <AlertDialog
                open={!!deleteId}
                onOpenChange={(open) => {
                    if (!open) setDeleteId(null);
                }}
                title="Delete Document"
                actionText="Delete"
                onAction={removeFile}
                type="delete">
                <span className="text-center">
                    This action will remove this document from your public page.
                </span>
            </AlertDialog>
        </div>
    );
}