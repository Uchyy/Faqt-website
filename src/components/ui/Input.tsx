type InputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  color?: "black" | "accent";
  onClearError?: () => void;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  color = "black",
  onClearError,
}: Readonly<InputProps>) {
  const borderStyle =
    color === "black"
      ? "border-black focus:ring-black"
      : "border-accent focus:ring-accent";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-1 text-muted-foreground font-heading font-semibold">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          if (error && onClearError) onClearError();
        }}
        className={`w-full px-4 py-2 rounded-2xl border bg-white
        focus:outline-none focus:ring-2 transition ${borderStyle}
        ${
          error
            ? "border-red-500 focus:ring-red-300"
            : ""
        }`}
      />

      <p className="text-red-500 text-xs min-h-[16px] mt-1">
        {error || " "}
      </p>
    </div>
  );
}