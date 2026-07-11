import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type PhoneInputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  color?: "black" | "accent";
  shadow?: boolean;
  onClearError?: () => void;
};

export default function FaqtPhoneInput({
  label,
  value,
  onChange,
  error,
  color = "black",
  shadow = false,
  onClearError,
}: Readonly<PhoneInputProps>) {
  const borderStyle =
    color === "black"
      ? "border-black focus-within:ring-black"
      : "border-accent focus-within:ring-accent";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm mb-1 text-muted-foreground font-heading font-semibold">
          {label}
        </label>
      )}

      <div
        className={`
          flex items-center rounded-2xl border bg-white overflow-visible w-full p-2
          ${shadow ? "shadow-sm" : ""}
          ${borderStyle}
          ${error ? "border-red-500 focus-within:ring-red-300" : ""}
          focus-within:ring-2 transition
        `}
      >
        <PhoneInput
          className= "!w-full"
          defaultCountry="gb"
          value={value}
          onChange={(phone) => {
            onChange(phone);

            if (phone.length > 3 && error && onClearError) {
              onClearError();
            }
          }}
        />
      </div>

      <div className="mt-1 min-h-[16px]">
        <p className="text-xs text-red-500">{error || " "}</p>
      </div>
    </div>
  );
}