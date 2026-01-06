"use client";

import { createContext, useContext } from "react";

export interface NavigationContextValue {
  /** Whether the navigation overlay is currently open */
  isOpen: boolean;

  /** Opens the navigation overlay */
  open: () => void;

  /** Closes the navigation overlay */
  close: () => void;

  /** Toggles navigation state (used by the BookToggle button) */
  toggle: () => void;

  /**
   * Navigate to a route.
   * Even if it's the same route, it should trigger a page transition.
   */
  navigateTo: (href: string) => void;

  /**
   * Forces PageTransition remount.
   * Incremented on every navigation intent.
   */
  navigationKey: number;
}

export const NavigationContext =
  createContext<NavigationContextValue | null>(null);

export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigation must be used within a NavigationProvider"
    );
  }

  return context;
}
