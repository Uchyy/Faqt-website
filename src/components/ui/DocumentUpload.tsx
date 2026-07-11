import { FileText, Upload, X } from "lucide-react";
import Input from "../ui/Input";
import { BusinessDocument } from "../../model/BusinessDocument";

type DocumentUploadProps = {
  files: BusinessDocument[];
  onChange: (documents: BusinessDocument[]) => void;
  label: string;
  maxFiles: number;
  error?: string;
};

export default function DocumentUpload({
  files,
  onChange,
  maxFiles = 2,
  error,
  label = "Upload up to 2 documents",
}: Readonly<DocumentUploadProps>) {
  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);

    const updated = [
      ...files,
      ...selected.map((file) => ({
        id: crypto.randomUUID(),
        file,
        title: "",
      })),
    ].slice(0, maxFiles);

    onChange(updated);
  };

  const removeFile = (id: string) => {
    onChange(files.filter((file) => file.id !== id));
  };

  const updateTitle = (id: string, title: string) => {
    onChange(
      files.map((file) =>
        file.id === id ? { ...file, title } : file
      )
    );
  };

  return (
    <div className="w-full">
      <p className="mt-4 mb-6 font-bold text-muted">
        {label}
      </p>

      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 transition hover:border-accent">
        <Upload size={18} />

        <span className="text-sm text-muted-foreground">
          Add document
        </span>

        <input
          type="file"
          hidden
          multiple
          accept="application/pdf,image/png,image/jpeg,image/webp"
          onChange={handleAdd}
        />
      </label>

      <div className="mt-5 mb-4 space-y-4">
        {files.map((document) => (
          <div
            key={document.id}
            className="rounded-2xl border border-border bg-accent/10 p-4"
          >
            <Input
              label="DOCUMENT TITLE"
              placeholder="e.g. Menu"
              value={document.title}
              error={error}
              onChange={(value) =>
                updateTitle(document.id, value)
              }
            />

            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText
                  size={20}
                  className="text-accent"
                />

                <div>
                  <p className="text-sm font-medium">
                    {document.file.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {(document.file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeFile(document.id)}
                className="rounded-full p-2 text-red-500 transition hover:bg-red-50"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}