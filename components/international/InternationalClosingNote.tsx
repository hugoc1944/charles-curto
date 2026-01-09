"use client";

import { Button } from "@/components/ui/Button";

export function InternationalClosingNote() {
  return (
    <section className="w-full py-13 md:py-28">
      <div
        className="
          max-w-[880px]
          mx-auto
          px-6
          text-center
        "
      >
        <p
          className="
            font-title
            text-[26px]
            md:text-[36px]
            leading-[1.2]
            font-light
            text-left
          "
        >
          Si votre situation ne correspond pas à un pays précis, ou si vous
          résidez ailleurs, les consultations restent possibles à distance,
          dans le même cadre confidentiel et attentif. Chaque demande est
          étudiée avec soin, selon les périodes et les disponibilités.
        </p>

        <div className="mt-7 md:mt-10">
          <Button variant="softFilled" size="md" className="text-[18px]">
            Une question avant de réserver&nbsp;?
          </Button>
        </div>
      </div>
    </section>
  );
}
