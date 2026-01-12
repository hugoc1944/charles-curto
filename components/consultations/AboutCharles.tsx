"use client";

import Image from "next/image";

export function AboutCharles() {
  return (
    <section
      className="
        px-3
        md:px-4
        pt-15
        lg:pt-30
        pb-10
      "
    >
      <div
        className="
          max-w-[1170px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-5
        "
      >
        {/* IMAGE HEIGHT ROW */}
        <div className="lg:col-span-2">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              lg:gap-5
              items-center
              lg:min-h-[650px]
            "
          >
            {/* TITLE */}
            <div
              className="
                flex
                justify-start
                lg:justify-end
                px-18
                lg:px-0
              "
            >
              <h2
                className="
                  font-title
                  uppercase
                  text-[#15585E]
                  font-semibold
                  md:font-normal
                  text-[56px]
                  leading-[1.05]

                  md:text-[56px]
                  lg:text-[94px]

                  max-w-[420px]
                  text-left
                "
              >
                À
                <br />
                PROPOS
                <br />
                DE
                <br />
                CHARLES
                <br />
                CURTO.
              </h2>
            </div>

            {/* IMAGE */}
            <div
              className="
                flex
                justify-center
                px-5
                lg:px-0
                lg:pr-12
              "
            >
              <Image
                src="/images/home/A_Propos.jpg"
                alt="Charles Curto"
                width={541}
                height={721}
                className="
                  w-full
                  max-w-[460px]
                  lg:w-[500px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div
          className="
            lg:col-span-2

            px-5
            lg:px-0

            max-w-[460px]
            mx-auto
            lg:mx-0

            lg:pl-5
            lg:ml-[calc(50%+12px)]
          "
        >
          <p
            className="
              font-body
              text-[22px]
              md:text-[24px]
              lg:text-[26px]
              leading-[1.8]
              font-light
              tracking-[0.04em]
              text-left
            "
          >
            Charles Curto accompagne depuis plus de quarante ans celles et ceux qui cherchent
            clarté et apaisement spirituel. Il commence sa pratique à Paris en 1982, avant de
            l’étendre à Toulouse, Nice, Madrid, Toronto, Montreal et Lisbonne. Son approche unit
            lecture spirituelle, alignement énergétique et guidance concrète. Plus de 40 000
            personnes ont fait appel à lui, certaines depuis plusieurs décennies.
          </p>
        </div>
      </div>
    </section>
  );
}
