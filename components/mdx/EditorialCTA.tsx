import Link from "next/link";

interface EditorialCTAProps {
  href: string;
  label: string;
}

export function EditorialCTA({ href, label }: EditorialCTAProps) {
  return (
    <div className="my-24 flex justify-center">
      <div
        className="
          max-w-[520px]
          w-full
          text-center
          px-6
          py-10
          border-t
          border-b
          border-[#C7A36A]/30
        "
      >
        <p className="font-body text-[16px] text-[#6B6B6B] mb-6 leading-[1.6]">
          Certaines réflexions appellent parfois un éclairage plus personnel.
        </p>

        <Link
          href={href}
          className="
            group
            inline-flex
            items-center
            gap-2
            font-title
            text-[18px]
            tracking-[0.25em]
            uppercase
            text-[#1F2E5A]
            transition-all
            duration-300
            ease-out
            hover:text-[#C7A36A]
            hover:tracking-[0.32em]
          "
        >
          {label}

          <span
            className="
              text-[#C7A36A]/60
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
