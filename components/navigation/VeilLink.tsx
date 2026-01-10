"use client";

import { useNavigation } from "@/navigation/NavigationContext";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface VeilLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function VeilLink({ href, children, className }: VeilLinkProps) {
  const { navigateTo } = useNavigation();
  const pathname = usePathname();

  function handleClick() {
    const [targetPath = "/", hash] = href.split("#");

    const normalizedTargetPath =
      targetPath === "" ? "/" : targetPath;

    const isSamePath = normalizedTargetPath === pathname;

    // 1. SAME PAGE + HASH → smooth scroll
    if (isSamePath && hash) {
      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      history.pushState(null, "", href);
      return;
    }

    // 2. SAME PAGE + NO HASH → do nothing
    if (isSamePath && !hash) {
      return;
    }

    // 3. DIFFERENT PAGE → animated navigation
    navigateTo(href);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
