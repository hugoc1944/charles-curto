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

  /** Navigation overlay (menu) */
  const [isOpen, setIsOpen] = useState(false);

  /** Page transition veil state */
  const [isTransitioning, setIsTransitioning] = useState(false);

  /** Forces PageTransition remount */
  const [navigationKey, setNavigationKey] = useState(0);

  /** Track previous path */
  const previousPath = useRef(pathname);

  /* ---------------------------------------------------------
     Overlay controls
  --------------------------------------------------------- */

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /* ---------------------------------------------------------
     Navigation with veil-first logic
  --------------------------------------------------------- */

  const navigateTo = useCallback(
    (href: string) => {
      // 1. Immediately trigger veil (visual feedback)
      setIsTransitioning(true);

      // 2. Force PageTransition remount
      setNavigationKey((k) => k + 1);

      // 3. Small delay so veil is visible BEFORE route change
      //    (prevents "nothing happens" feeling)
      setTimeout(() => {
        if (href !== pathname) {
          router.push(href);
        } else {
          // Same page: still close nav
          setIsOpen(false);
        }
      }, 80); // 👈 tuned for elegance, not speed
    },
    [router, pathname]
  );

  /* ---------------------------------------------------------
     Route change detection
     (veil stays up during load, fades out after)
  --------------------------------------------------------- */

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;

      // Close navigation overlay after route change
      setIsOpen(false);

      // Let the new page render, then fade veil out
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // 👈 matches your calm motion pace

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  /* ---------------------------------------------------------
     Scroll locking
  --------------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ---------------------------------------------------------
     Provider
  --------------------------------------------------------- */

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        isTransitioning,
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
