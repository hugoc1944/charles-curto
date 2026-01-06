import clsx from "clsx";

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3
      className={clsx(
        `
        font-title
        font-bold
        text-[36px]
        leading-[0.99]
        text-[#1B1E23]
        `,
        className
      )}
    >
      {children}
    </h3>
  );
}