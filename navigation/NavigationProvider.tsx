"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { NavigationContext } from "./NavigationContext";

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  /** 
   * Key used to force PageTransition remount
   */
  const [navigationKey, setNavigationKey] = useState(0);

  /**
   * Track previous route to detect real navigation
   */
  const previousPath = useRef(pathname);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /**
   * Navigation intent
   * - Always increments navigationKey
   * - Pushes route only if different
   */
  const navigateTo = useCallback(
    (href: string) => {
      // Force page transition every time
      setNavigationKey((k) => k + 1);

      // Only push if route is different
      if (href !== pathname) {
        router.push(href);
      } else {
        // Same page → still close nav after transition
        setIsOpen(false);
      }
    },
    [router, pathname]
  );

  /**
   * Close navigation AFTER route actually changes
   */
  useEffect(() => {
    if (previousPath.current !== pathname) {
      setIsOpen(false);
      previousPath.current = pathname;
    }
  }, [pathname]);

  /**
   * Scroll locking
   */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
        navigateTo,
        navigationKey,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
