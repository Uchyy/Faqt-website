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
  disabled?: boolean;
  rounded?: boolean
};

export default function Button({children, onClick, type = "button", variant = "solid", color = "black", className = "", icon,       rounded = true, disabled = false,iconPosition = "left",}: Readonly<ButtonProps>) {

  const base = `px-4 py-2 ${rounded ? " rounded-3xl" : "rounded-xl"}  text-sm font-medium transition inline-flex items-center justify-center gap-2  disabled:cursor-not-allowed`;

  const styles = {
    black: {
      solid: `
        bg-black text-white hover:bg-black/80
        disabled:bg-black disabled:text-white disabled:opacity-40
      `,
      outline: `
        border border-black text-black hover:bg-black/5
        disabled:border-black/40 disabled:text-black/40
      `,
      ghost: `
        text-black hover:bg-black/5
        disabled:text-black/40
      `,
    },

    white: {
      solid: `
        bg-white text-black hover:bg-white/80
        disabled:opacity-40
      `,
      outline: `
        border border-white text-white hover:bg-white/10
        disabled:border-white/40 disabled:text-white/40
      `,
      ghost: `
        text-white hover:bg-white/10
        disabled:text-white/40
      `,
    },

    accent: {
      solid: `
        bg-accent text-white hover:opacity-90
        disabled:bg-accent disabled:opacity-40
      `,
      outline: `
        border border-accent text-accent hover:bg-accent/10
        disabled:border-accent/40 disabled:text-accent/40
      `,
      ghost: `
        text-accent hover:bg-accent/10
        disabled:text-accent/40
      `,
    },
  };

  return (
    <button 
      disabled={disabled}
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