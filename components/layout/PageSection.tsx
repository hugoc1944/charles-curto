// components/layout/PageSection.tsx
"use client";

import clsx from "clsx";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section
      className={clsx(
        // Vertical rhythm
        className
      )}
    >
      {children}
    </section>
  );
}
