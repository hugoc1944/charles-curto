import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Alex_Brush,
} from "next/font/google";
import "./globals.css";

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
    <html lang="fr">
      <body
        className={`${sourceSans.variable} ${cormorant.variable} ${alexBrush.variable}`}
      >
        {/* Font activators (do not remove) */}
        <span className={cormorant.className} style={{ display: "none" }} />
        <span className={alexBrush.className} style={{ display: "none" }} />

        {children}
      </body>
    </html>
  );
}

