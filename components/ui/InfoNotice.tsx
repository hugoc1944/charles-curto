"use client";

export function InfoNotice({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        bg-softButtonLinear
        border
        border-dotted
        border-[3px]
        md:border-[2px]
        border-[#C7A36A]
        rounded-[20px]
        px-2
        py-3
        md:px-6
        md:py-4
        text-center
        font-body
        text-[#6B6B6B]
        text-[18px]
        tracking-[0.05em]
        max-w-[720px]
        mx-auto
      "
    >
      {children}
    </div>
  );
}
