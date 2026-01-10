"use client";

interface SectionSeparatorProps {
  id?: string;
}

export function SectionSeparator({ id }: SectionSeparatorProps) {
  return (
    <div
      id={id}
      className="w-full md:w-[80%] mx-auto h-px bg-goldenLinear opacity-80 scroll-mt-15"
    />
  );
}