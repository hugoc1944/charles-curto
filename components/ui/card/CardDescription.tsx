// components/ui/card/CardDescription.tsx

import clsx from "clsx";

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p
      className={clsx(
        `
        font-body
        text-[18px]
        leading-[1.38]
        tracking-[0.9px]
        text-[#6B6B6B]
        `,
        className
      )}
    >
      {children}
    </p>
  );
}
