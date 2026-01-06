"use client";

import clsx from "clsx";

interface StarBadgeProps {
  size?: "sm" | "md";
  className?: string;
}

export function StarBadge({
  size = "md",
  className,
}: StarBadgeProps) {
  return (
    <div
      className={clsx(
        `
        flex
        items-center
        justify-center
        rounded-full
        bg-goldenLinear-tilted
        shrink-0
        `,
        size === "sm" && "w-[32px] h-[32px] text-[18px]",
        size === "md" && "w-[38px] h-[38px] text-[22px]",
        className
      )}
    >
      <span
        className="
          text-[#1B1E23]
          leading-none
        "
      >
        ★
      </span>
    </div>
  );
}
