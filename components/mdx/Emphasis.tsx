"use client";

export function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        my-14

        font-body
        text-[18px]
        md:text-[19px]
        leading-[1.8]

        text-[#1F2E5A]

        max-w-[92%]
      "
    >
      {children}
    </div>
  );
}
