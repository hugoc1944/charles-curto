"use client";

import { createContext, useContext } from "react";

/**
 * Navigation context contract
 */
export interface NavigationContextValue {
  /** Whether the navigation overlay is currently open */
  isOpen: boolean;

  /** Whether a page transition is currently running */
  isTransitioning: boolean;

  /** Opens the navigation overlay */
  open: () => void;

  /** Closes the navigation overlay */
  close: () => void;

  /** Toggles navigation state (BookToggle button) */
  toggle: () => void;

  /**
   * Navigate to a route.
   * Always triggers a page transition.
   */
  navigateTo: (href: string) => void;

  /**
   * Forces PageTransition remount.
   * Incremented on every navigation intent.
   */
  navigationKey: number;
}

/**
 * Context instance
 */
export const NavigationContext =
  createContext<NavigationContextValue | null>(null);

/**
 * Hook accessor
 */
export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigation must be used within a NavigationProvider"
    );
  }

  return context;
}
