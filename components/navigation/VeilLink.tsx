"use client";

import { useNavigation } from "@/navigation/NavigationContext";
import { ReactNode } from "react";

interface VeilLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function VeilLink({ href, children, className }: VeilLinkProps) {
  const { navigateTo } = useNavigation();

  return (
    <button
      type="button"
      onClick={() => navigateTo(href)}
      className={className}
    >
      {children}
    </button>
  );
}
