// components/layout/PageContainer.tsx
"use client";

import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={clsx(
        // Full width wrapper
        "w-full",

        // Desktop breathing space
        "px-2",                 // mobile
        "sm:px-6",              // small tablets
        "md:px-12",             // tablets
        "lg:px-[135px]",        // desktop exact spec
        "pt-3",
        "md:pt-0",              // small tablets
        // Content width lock
        "max-w-[1440px]",
        "mx-auto",

        className
      )}
    >
      <div className="max-w-[1170px] mx-auto">
        {children}
      </div>
    </div>
  );
}
