"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type BookingServiceType = "classic" | "signature" | "urgent";

interface BookingContextValue {
  isOpen: boolean;
  serviceType: BookingServiceType | null;
  openBooking: (type: BookingServiceType) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceType, setServiceType] =
    useState<BookingServiceType | null>(null);

  const openBooking = useCallback((type: BookingServiceType) => {
    setServiceType(type);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setServiceType(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        serviceType,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return ctx;
}
