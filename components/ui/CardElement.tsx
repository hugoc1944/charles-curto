"use client";

import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function CardElement({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white",
        "border border-[#E5E5E5]",
        "rounded-[25px]",
        "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
        "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
