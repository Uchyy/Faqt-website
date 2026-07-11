import type { ReactNode } from "react";

type InputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  error?: string;
  rows?: number;
  shadow?: boolean;
  color?: "black" | "accent";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClearError?: () => void;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  maxLength,
  color = "black",
  icon,
  rows = 1,
  iconPosition = "left",
  shadow = false,
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

      <div className="relative">
        {rows > 1 ? (
          <textarea
            rows={rows}
            value={value}
            placeholder={placeholder}
            {...(maxLength !== undefined ? { maxLength } : {})}
            onChange={(e) => {
              onChange(e.target.value);

              if (error && onClearError) {
                onClearError();
              }
            }}
            className={`
              ${shadow ? "shadow-sm" : ""}
              w-full rounded-2xl border bg-white px-4 py-2 resize-none
              focus:outline-none focus:ring-2 transition
              ${borderStyle}
              ${error ? "border-red-500 focus:ring-red-300" : ""}
            `}
          />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center h-full text-muted-foreground">
                <div className="px-4">{icon}</div>
                <div className="h-full w-px bg-black" />
              </div>
            )}

            <input
              type={type}
              value={value}
              placeholder={placeholder}
              {...(maxLength !== undefined ? { maxLength } : {})}
              onChange={(e) => {
                onChange(e.target.value);

                if (error && onClearError) {
                  onClearError();
                }
              }}
              className={`
                ${shadow ? "shadow-sm" : ""}
                w-full rounded-2xl border bg-white py-2
                ${
                  icon && iconPosition === "left"
                    ? "pl-16 pr-4"
                    : icon && iconPosition === "right"
                    ? "pl-4 pr-16"
                    : "px-4"
                }
                focus:outline-none focus:ring-2 transition
                ${borderStyle}
                ${error ? "border-red-500 focus:ring-red-300" : ""}
              `}
            />

            {icon && iconPosition === "right" && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center h-full text-muted-foreground">
                <div className="h-full w-px bg-black" />
                <div className="px-4">{icon}</div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-1 flex justify-between text-xs min-h-[16px]">
        <p className="text-red-500">{error || " "}</p>

        {maxLength !== undefined && (
          <p className="text-muted-foreground">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}