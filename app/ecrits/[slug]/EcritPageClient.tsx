"use client";

import { useRef } from "react";
import { ScrollProgress } from "@/components/ecrits/ScrollProgress";
import { PageFade } from "@/components/transitions/PageFade";

export function EcritPageClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const articleRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ScrollProgress targetRef={articleRef} />

      <div ref={articleRef}>
        <PageFade>
          {children}
        </PageFade>
      </div>
    </>
  );
}
