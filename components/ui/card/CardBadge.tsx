// components/ui/card/CardBadge.tsx

import clsx from "clsx";

interface CardBadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "outline";
  className?: string;
}

export function CardBadge({
  children,
  variant = "outline",
  className,
}: CardBadgeProps) {
  return (
    <div
      className={clsx(
        `
        w-full
        text-center
        py-3
        text-[18px]
      
        tracking-[1.08px]
        uppercase
        rounded-full
        `,
        variant === "dark"
          ? "bg-[#1B1E23] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25),0_1px_3px_rgba(199,163,106,0.45)]"
          : "gradient-stroke-gold text-[#1B1E23]",
        className
      )}
    >
      {children}
    </div>
  );
}
