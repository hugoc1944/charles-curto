// components/home/HomeHeroBanner.tsx
"use client";

import Image from "next/image";

export function HomeHeroBanner() {
  return (
    <div
      className="
        w-full
        bg-white

        /* White frame around banner */
        pt-3
        px-3

        sm:pt-4
        sm:px-3

        md:pt-4
        md:px-3

        lg:pt-6
        lg:px-4
      "
    >
      {/* Desktop image */}
      <div className="hidden md:block">
        <Image
          src="/images/home/Main_Thumbnail_6.png"
          alt="Charles Curto"
          priority
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src="/images/home/Main_Thumbnail_mobile_v4.png"
          alt="Charles Curto"
          priority
          width={900}
          height={1200}
          className="w-full h-[72vh] object-cover object-bottom"
        />
      </div>
    </div>
  );
}
