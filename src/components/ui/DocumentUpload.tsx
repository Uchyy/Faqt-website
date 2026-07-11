import { FileText, X, Upload } from "lucide-react";

type DocumentUploadProps = {
  files: File[];
  label?: string;
  onChange: (files: File[]) => void;
  maxFiles?: number;
  error?: string;
};

export default function DocumentUpload({
  files,
  onChange,
  maxFiles = 2,
  error,
  label = "Upload up to 2 documents"
}: Readonly<DocumentUploadProps>) {

  const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);

    const updated = [
      ...files,
      ...selected,
    ].slice(0, maxFiles);

    onChange(updated);
  };


  const removeFile = (index: number) => {
    onChange(
      files.filter((_, i) => i !== index)
    );
  };


  return (
    <div className="w-full">

      <p className="mt-4 mb-6 text-muted font-bold"> {label} </p>

      <label className="flex items-center gap-2 cursor-pointer rounded-2xl border border-border bg-white px-4 py-3 hover:border-accent transition">

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


      <div className="mt-5 space-y-2 mb-4">

        {files.map((file, index) => (
          <div
            key={`${file.name}-${index}`}
            className="flex items-center bg-accent/10 justify-between rounded-xl border border-border px-4 py-3"
          >

            <div className="flex items-center gap-3">

              <FileText
                size={20}
                className="text-accent"
              />

              <div>
                <p className="text-sm font-medium">
                  {file.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>

            </div>


            <button
              onClick={() => removeFile(index)}
              className="text-red-500 hover:bg-red-50 rounded-full p-2"
            >
              <X size={16}/>
            </button>

          </div>
        ))}

      </div>


      {error && (
        <p className="text-xs text-red-500 mt-2">
          {error}
        </p>
      )}

    </div>
  );
}