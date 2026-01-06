// components/layout/FullBleed.tsx
"use client";

interface FullBleedProps {
  children: React.ReactNode;
}

export function FullBleed({ children }: FullBleedProps) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {children}
    </div>
  );
}
