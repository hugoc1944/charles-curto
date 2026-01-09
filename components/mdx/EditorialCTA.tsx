import Link from "next/link";

interface EditorialCTAProps {
  href: string;
  label: string;
}

export function EditorialCTA({ href, label }: EditorialCTAProps) {
  return (
    <div className="my-20 text-center">
      <div className="font-body text-[16px] text-[#6B6B6B] mb-4">
        Certaines réflexions appellent parfois un éclairage plus personnel.
      </div>

      <Link
        href={href}
        className="
          font-body
          text-[16px]
          tracking-[0.2em]
          uppercase
          text-[#1F2E5A]
          hover:text-[#C7A36A]
          transition
        "
      >
        {label}
      </Link>
    </div>
  );
}
