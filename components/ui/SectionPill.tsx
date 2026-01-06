"use client";

import clsx from "clsx";

interface SectionPillProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionPill({ children, className }: SectionPillProps) {
  return (
    <div
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        px-8
        py-2
        rounded-full
        border-2
        border-[#1F2E5A]
        bg-[#A9BBF7]
        font-title
        font-bold
        uppercase
        tracking-[0.08em]
        
        text-[#1F2E5A]
        text-[16px]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
