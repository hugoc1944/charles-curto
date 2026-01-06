// components/ui/card/CardFeatureList.tsx

import clsx from "clsx";
import { CheckIcon } from "@/components/ui/CheckIcon";

interface CardFeatureListProps {
  items: string[];
  className?: string;
  variant?: "check" | "star"; // 👈 optional, defaults to check
}

export function CardFeatureList({
  items,
  className,
  variant = "check",
}: CardFeatureListProps) {
  return (
    <ul
      className={clsx(
        "space-y-2",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          {/* Icon */}
          {variant === "check" ? (
            <CheckIcon className="mt-[6px] shrink-0" />
          ) : (
            <span
              className="
                mt-[6px]
                shrink-0
                text-[25px]
                leading-none
                bg-goldenLinear
                bg-clip-text
                text-transparent
              "
            >
              ✦
            </span>
          )}

          {/* Text */}
          <span
            className="
              font-body
              text-[18px]
              leading-[1.6]
              tracking-[0.9px]
              text-[#6B6B6B]
            "
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
