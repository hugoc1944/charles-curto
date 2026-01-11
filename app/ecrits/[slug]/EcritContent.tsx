"use client";

import dynamic from "next/dynamic";
import { InsightNote } from "@/components/mdx/InsightNote";
import { EditorialCTA } from "@/components/mdx/EditorialCTA";
import { SignatureBlock } from "@/components/mdx/SignatureBlock";
import { Emphasis } from "@/components/mdx/Emphasis";
import { SoftList } from "@/components/mdx/SoftList";

export function EcritContent({ slug }: { slug: string }) {
  const MDXContent = dynamic(
    () => import(`@/content/ecrits/${slug}.mdx`),
    { ssr: false }
  ) as any;

  return (
    <div
      className="
        ecrit-content
        max-w-none

        font-body
        text-[17px]
        md:text-[18px]
        leading-[1.65]
        md:leading-[1.7]

        [&>p]:mb-4
        [&>p+p]:mt-0

        [&>p:has(+div)]:mb-8
      "
    >
      <MDXContent
        components={{
          InsightNote,
          EditorialCTA,
          SignatureBlock,
          Emphasis,
          SoftList,
        }}
      />
    </div>
  );
}
