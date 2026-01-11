import { getEcritBySlug, getEcritSlugs } from "@/lib/ecrits";
import type { Metadata } from "next";

import { getRelatedEcrits } from "@/lib/ecrits";
import { RelatedEcrits } from "@/components/ecrits/RelatedEcrits";
import { EcritContent } from "./EcritContent";
import { PageFade } from "@/components/transitions/PageFade";
import { VeilLink } from "@/components/navigation/VeilLink";
import { EcritPageClient } from "./EcritPageClient";

export async function generateStaticParams() {
  return getEcritSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const ecrit = getEcritBySlug(slug);

  return {
    title: `${ecrit.meta.title} — Charles Curto`,
    description: ecrit.meta.description,
  };
}

export default async function EcritPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const ecrit = getEcritBySlug(slug);
  const related = getRelatedEcrits(slug, ecrit.meta.themes);

  return (
    <EcritPageClient>
      <section className="w-full pt-32 pb-40">
        <article className="max-w-[780px] mx-auto px-6">
          <div className="mb-12">
            <VeilLink href="/ecrits" className="cursor-pointer inline-flex gap-2 text-[13px] tracking-[0.28em] uppercase text-[#8F8A7E] hover:text-[#C7A36A]">
              ← Tous les écrits
            </VeilLink>
          </div>

          <header className="mb-20">
            <h1 className="font-title text-[#1F2E5A] text-[40px] md:text-[56px] leading-[1.1]">
              {ecrit.meta.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[#9A9A9A]">
              <span className="text-[13px] uppercase tracking-[0.2em]">
                Lecture {ecrit.meta.readingTime}
              </span>

              {ecrit.meta.themes.map((theme) => (
                <span key={theme} className="text-[13px] uppercase tracking-[0.2em]">
                  {theme}
                </span>
              ))}
            </div>
          </header>

          <EcritContent slug={slug} />

          <RelatedEcrits
            items={related.map((e) => ({
              slug: e.slug,
              title: e.meta.title,
              readingTime: e.meta.readingTime,
            }))}
          />
        </article>
      </section>
    </EcritPageClient>
  );
}
