import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "link";
  href?: string;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  icon = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-['Clash_Display',sans-serif] font-semibold transition-all min-h-[44px] cursor-pointer";

  const variants = {
    primary: `${base} px-7 py-3 rounded-[var(--radius-pill)] bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)] hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(232,196,76,0.3)] active:scale-[0.98]`,
    ghost: `${base} px-7 py-3 rounded-[var(--radius-pill)] border border-[var(--color-line)] text-[var(--color-text)] hover:bg-[var(--color-bg-soft)] hover:border-[var(--color-line-strong)]`,
    link: `${base} text-[var(--color-text)] relative group`,
  };

  const style = `${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {variant === "link" && (
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={style}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={style} onClick={onClick}>
      {content}
    </button>
  );
}
