"use client";

import { CountryCard } from "@/components/cards/CountryCard";

export function InternationalCountries() {
  return (
    <section className="w-full pb-20 md:pb-32">
      {/* Guide line + label */}
      <div className="relative max-w-[1100px] mx-auto my-8 h-[160px]">
        {/* Vertical line */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-textHighlightGolden-vertical
          "
        />

        {/* Label */}
        <span
          className="
            absolute
            left-[calc(50%+8px)]
            md:left-[calc(50%+20px)]
            top-1/2
            -translate-y-1/2
            font-title
            text-[21px]
            md:text-[24px]
            text-[#C7A36A]
            bg-clip-text
            whitespace-nowrap
            leading-[1]
          "
        >
          Accédez aux espaces <br/>internationaux
        </span>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          max-w-[1100px]
          mx-auto
          px-5
        "
      >
        <CountryCard
          country="FRANCE"
          title="Cabinet principal"
          description="Consultations privées et accompagnement exclusif proposés depuis le cabinet principal."
          domain="charlescurto.fr"
        />

        <CountryCard
          country="PORTUGAL"
          title="Espace dédié"
          description="Un espace dédié aux consultations et accompagnements à destination du public portugais."
          domain="charlescurto.pt"
        />

        <CountryCard
          country="ESPAGNE"
          title="Présence associée"
          description="Consultations et accompagnement proposés en lien avec le cabinet principal."
          domain="charlescurto.es"
        />
      </div>
    </section>
  );
}
