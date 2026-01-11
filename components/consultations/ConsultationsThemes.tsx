"use client";

export function ConsultationsThemes() {
  const themes = [
    {
      key: "chemins-de-vie",
      video: "/videos/Chemins_de_vie",
      poster: "/images/placeholder/Chemins_de_vie.png",
      label: "Chemins de vie &\ndécisions essentielles",
    },
    {
      key: "tensions-familiales",
      video: "/videos/Tensions_familiales",
      poster: "/images/placeholder/Tensions_familiales.png",
      label: "Tensions familiales\n& relations",
    },
    {
      key: "blocages-schemas",
      video: "/videos/Blocages_&_schemas_main",
      poster: "/images/placeholder/Blocages_&_schemas_main.png",
      label: "Blocages & schémas\nrépétitifs",
    },
    {
      key: "alignement-interieur",
      video: "/videos/Alignement_interieur",
      poster: "/images/placeholder/Alignement_interieur.png",
      label: "Alignement intérieur\n& apaisement",
    },
  ];

  return (
    <section className="w-full pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
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
              key={theme.key}
              className="flex flex-col items-center"
            >
              {/* Square video */}
              <div className="relative w-full aspect-square overflow-hidden bg-black">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={theme.poster}
                >
                  <source
                    src={`${theme.video}.webm`}
                    type="video/webm"
                  />
                  <source
                    src={`${theme.video}.mp4`}
                    type="video/mp4"
                  />
                </video>
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
