"use client";

export function CoachingCoreStatement() {
  return (
    <section
      className="
        w-full
        bg-[#FCFAF5]
        mt-5
        py-10
        md:py-32
      "
    >
      <div
        className="
          max-w-[900px]
          mx-auto
          px-6
        "
      >
        <p
          className="
            font-title
            font-medium
            text-[#1F2E5A]
            text-[32px]
            md:text-[56px]
            
            leading-[1.2]
            tracking-[0]
            text-left
          "
        >
          <span
            className="
                bg-textHighlightGolden
                bg-clip-text
                text-transparent
            "
            >
            C’est le cœur du travail de Charles
          </span>, qu’il mène auprès de certains clients
          avec une présence régulière depuis
          plus de 30 ans.
        </p>
      </div>
        {/* =========================================================
           Decorative band (GIF)
        ========================================================== */}
        <div
          className="
            w-full
            h-[120px]
            md:h-[220px]
            lg:h-[241px]
            bg-center
            bg-cover
            mt-8
            md:mt-15
          "
          style={{
            backgroundImage: "url('/gifs/band.gif')",
          }}
        />
    </section>
  );
}
