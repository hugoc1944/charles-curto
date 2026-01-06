"use client";

import clsx from "clsx";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  stars?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  stars = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        `
        bg-white
        rounded-[20px]
        border border-black/10
        p-6
        flex flex-col
        gap-2
        md:gap-4
        `,
        className
      )}
    >
      {/* Stars */}
      <div className="flex text-accent text-[20px] text-[#D4AF37]">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="
          font-body
          text-[21px]
          lg:text-[18px]
          leading-[1.6]
          text-text
        "
      >
        « {quote} »
      </p>

      {/* Author (optional) */}
      {author && (
        <span
          className="
            font-body
            text-[19px]
            lg:text-[16px]
            text-[#6B6B6B]
            font-light
          "
        >
          — {author}
        </span>
      )}
    </div>
  );
}
