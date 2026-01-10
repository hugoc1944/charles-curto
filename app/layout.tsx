import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Alex_Brush,
} from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/navigation/NavigationProvider";
import { BookToggle } from "@/components/navigation/BookToggle";
import { NavigationOverlay } from "@/components/navigation/NavigationOverlay";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageTransitionVeil } from "@/components/layout/PageTransitionVeil";
import { BookingProvider } from "@/contexts/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import Footer from "@/components/layout/Footer";

/* Brand / signature */
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brand",
  display: "swap",
});

/* Titles */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
  display: "swap",
});

/* Body */
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charles Curto",
  description: "Accompagnement spirituel et transformation intérieure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`
        ${alexBrush.variable}
        ${cormorant.variable}
        ${sourceSans.variable}
      `}
    >
      <body>
        <ScrollToTop />

        <NavigationProvider>
          <BookingProvider>
            <PageTransitionVeil/>
            <div id="navigation-layer">
              <BookToggle />
              <NavigationOverlay />
            </div>
              <BookingModal />
            <div id="page-layer">
                  {children}
                  <Footer/>
            </div>
          </BookingProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}