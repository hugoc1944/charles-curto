"use client";

import dynamic from "next/dynamic";
import { InsightNote } from "@/components/mdx/InsightNote";
import { EditorialCTA } from "@/components/mdx/EditorialCTA";
import { SignatureBlock } from "@/components/mdx/SignatureBlock";

export function EcritContent({ slug }: { slug: string }) {
  const MDXContent = dynamic(
    () => import(`@/content/ecrits/${slug}.mdx`),
    { ssr: false }
  ) as any;

  return (
    <div className="prose prose-lg max-w-none">
      <MDXContent
        components={{
          InsightNote,
          EditorialCTA,
          SignatureBlock,
        }}
      />
    </div>
  );
}
