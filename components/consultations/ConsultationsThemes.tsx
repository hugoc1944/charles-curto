"use client";

import Image from "next/image";

export function ConsultationsThemes() {
  const themes = [
    {
      src: "/gifs/Chemins_de_vie.gif",
      label: "Chemins de vie &\ndécisions essentielles",
    },
    {
      src: "/gifs/Tensions_familiales.gif",
      label: "Tensions familiales\n& relations",
    },
    {
      src: "/gifs/Blocages_&_schemas_main.gif",
      label: "Blocages & schémas\nrépétitifs",
    },
    {
      src: "/gifs/Alignement_interieur.gif",
      label: "Alignement intérieur\n& apaisement",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#FCFAF5]
        pb-24
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
        "
      >
        {/* ================= TITLE ================= */}
        <h2
          className="
            font-title
            text-[#1F2E5A]
            text-[36px]
            md:text-[56px]
            leading-[1]
            text-center
            mb-5
            md:mb-14
          "
        >
          Quels thèmes aborder&nbsp;?
        </h2>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-x-0
            gap-y-6
            md:gap-x-6
            md:gap-y-0
          "
        >
          {themes.map((theme) => (
            <div
              key={theme.src}
              className="flex flex-col items-center"
            >
              {/* Square GIF */}
              <div className="w-full aspect-square overflow-hidden">
                <Image
                  src={theme.src}
                  alt={theme.label.replace(/\n/g, " ")}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              {/* Caption */}
              <p
                className="
                  font-title
                  text-[#1F2E5A]
                  text-[20px]
                  md:text-[26px]
                  leading-[1.2]
                  text-center
                  mt-2
                  whitespace-pre-line
                "
              >
                {theme.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
