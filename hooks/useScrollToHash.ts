"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollToHash(delay = 600) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.replace("#", "");
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    const timeout = setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [pathname, delay]);
}
