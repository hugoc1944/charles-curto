"use client";

interface PremiumFeatureListProps {
  items: string[];
  className?: string;
}

export function PremiumFeatureList({
  items,
  className = "",
}: PremiumFeatureListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span
            className="
              bg-goldenLinear
              bg-clip-text
              text-transparent
              text-[20px]
              leading-[1.4]
            "
          >
            ✦
          </span>

          <span className="font-body text-[18px] text-[#1B1E23] leading-[1.5]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
