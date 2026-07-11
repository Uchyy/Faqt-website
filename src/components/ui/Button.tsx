import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "ghost";
  color?: "black" | "white" | "accent";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "solid",
  color = "black",
  className = "",
  icon,
  iconPosition = "left",
}: Readonly<ButtonProps>) {

  const base =
    "px-4 py-2 rounded-3xl text-sm font-medium transition inline-flex items-center justify-center gap-2";

  const styles = {
    black: {
      solid: "bg-black text-white hover:bg-black/80",
      outline: "border border-black text-black hover:bg-black/5",
      ghost: "text-black hover:bg-black/5",
    },

    white: {
      solid: "bg-white text-black hover:bg-white/80",
      outline: "border border-white text-white hover:bg-white/10",
      ghost: "text-white hover:bg-white/10",
    },

    accent: {
      solid: "bg-accent text-white hover:opacity-90",
      outline: "border border-accent text-accent hover:bg-accent/10",
      ghost: "text-accent hover:bg-accent/10",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[color][variant]} ${className}`}
    >

      {icon && iconPosition === "left" && (
        <span>
          {icon}
        </span>
      )}

      {children}

      {icon && iconPosition === "right" && (
        <span>
          {icon}
        </span>
      )}

    </button>
  );
}