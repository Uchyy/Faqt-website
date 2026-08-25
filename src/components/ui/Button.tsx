import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "ghost" | "dashboard" ;
  color?: "black" | "white" | "accent" | "red";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  rounded?: boolean
};

export default function Button({children, onClick, type = "button", variant = "solid", color = "black", className = "", icon,  rounded = true, disabled = false,iconPosition = "left",}: Readonly<ButtonProps>) {

  const isDashboardVariant = variant === "dashboard";

  const dashboardBase = ` bg-accent bg-radial-[at_15%_35%] from-black to-accent-900 to-75% px-2 py-3 font-medium text-sm font-bold uppercase tracking-[0.15rem] text-white shadow-lg transition hover:opacity-90 md:px-4 ${rounded ? " rounded-3xl" : "rounded-xl"}  font-medium transition inline-flex items-center justify-center gap-2  disabled:cursor-not-allowed `;
  const defaultBase = `px-4 py-3 ${rounded ? " rounded-3xl" : "rounded-xl"}  text-sm font-medium transition inline-flex items-center justify-center gap-2  disabled:cursor-not-allowed`;

  const base = isDashboardVariant ? dashboardBase : defaultBase;

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

    red: {
      solid: `
          bg-red-600 text-white hover:bg-red-700
          disabled:bg-red-600 disabled:opacity-40
      `,
      outline: `
          border border-red-600 text-red-600 hover:bg-red-50
          disabled:border-red-300 disabled:text-red-300
      `,
      ghost: `
          text-red-600 hover:bg-red-50
          disabled:text-red-300
      `,
  },
  };

  return (
    <button 
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${base} ${isDashboardVariant ? "" : styles[color][variant]} ${className}`}>

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