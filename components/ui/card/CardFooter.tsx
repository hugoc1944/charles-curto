// components/ui/card/CardFooter.tsx

import clsx from "clsx";

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <p
      className={clsx(
        `
        text-center
        font-body
        text-[16px]
        tracking-[0.8px]
        leading-[1.6]
        text-[#6B6B6B]
        `,
        className
      )}
    >
      {children}
    </p>
  );
}
