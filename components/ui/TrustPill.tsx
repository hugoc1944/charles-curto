"use client";

export function TrustPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        px-5
        py-2
        bg-white
        rounded-full
        border
        border-[#D9D9D9]
        font-body
        text-[14px]
        md:text-[15px]
        text-[#1B1E23]
        font-semibold
        whitespace-nowrap
      "
    >
      {children}
    </div>
  );
}
