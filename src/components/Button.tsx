import Link from "next/link";

type ButtonVariant = "coral" | "blue" | "sunshine" | "white" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  coral:
    "gradient-coral text-white shadow-[var(--shadow-coral)] hover:shadow-lg",
  blue: "gradient-blue text-white shadow-[var(--shadow-blue)] hover:shadow-lg",
  sunshine:
    "gradient-sunshine text-navy shadow-[var(--shadow-sunshine)] hover:shadow-lg",
  white:
    "bg-white text-text-primary shadow-[var(--shadow-sm)] hover:shadow-md border border-[var(--border)]",
  outline:
    "bg-transparent border-2 border-gray-200 text-text-primary hover:border-blue hover:text-blue",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[13px] rounded-[12px]",
  md: "px-7 py-3.5 text-[14px] rounded-[14px]",
  lg: "px-9 py-4 text-[16px] rounded-[16px]",
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  pill?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "coral",
  size = "md",
  href,
  external = false,
  className = "",
  pill = false,
  onClick,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 btn-shine ${
    pill ? "!rounded-full" : ""
  } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
