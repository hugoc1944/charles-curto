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
        "relative z-[10] w-full",
        "px-2 sm:px-6 md:px-12 lg:px-[135px]",
        "pt-3 md:pt-0",
        "max-w-[1440px] mx-auto",
        className
      )}
    >
      <div className="max-w-[1170px] mx-auto">
        {children}
      </div>
    </div>
  );
}