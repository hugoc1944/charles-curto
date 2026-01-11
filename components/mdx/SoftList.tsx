// components/mdx/SoftList.tsx
"use client";

export function SoftList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 space-y-3 pl-4">
      {children}
    </div>
  );
}
