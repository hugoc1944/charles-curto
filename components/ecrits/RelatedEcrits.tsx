import Link from "next/link";

interface RelatedEcritsProps {
  items: {
    slug: string;
    title: string;
    readingTime: string;
  }[];
}

export function RelatedEcrits({ items }: RelatedEcritsProps) {
  if (!items.length) return null;

  return (
    <section className="mt-32">
      <p
        className="
          font-body
          text-[14px]
          tracking-[0.3em]
          uppercase
          text-[#9A9A9A]
          mb-10
        "
      >
        Lire aussi
      </p>

      <div className="space-y-12">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/ecrits/${item.slug}`}
            className="group block"
          >
            <h3
              className="
                font-title
                text-[26px]
                md:text-[30px]
                leading-[1.2]
                text-[#1F2E5A]
                transition-colors
                group-hover:text-[#C7A36A]
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                font-body
                text-[14px]
                tracking-[0.18em]
                uppercase
                text-[#9A9A9A]
              "
            >
              Lecture {item.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
