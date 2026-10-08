import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber text-charcoal hover:bg-cream focus-visible:ring-amber/80 border border-amber/40",
  secondary:
    "bg-transparent text-cream border border-cream/25 hover:border-amber/50 hover:text-amber focus-visible:ring-amber/60",
  ghost:
    "bg-transparent text-amber hover:text-cream underline-offset-4 hover:underline focus-visible:ring-amber/60 border border-transparent",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
