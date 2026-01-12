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
import { GlobalGridLines } from "@/components/layout/GlobalGridLines";
import Script from "next/script";

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
  title: {
    default: "Charles Curto",
    template: "%s | Charles Curto",
  },
  description:
    "Accompagnement spirituel individuel, transformation intérieure et réalignement profond.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Charles Curto",
    title: "Charles Curto",
    description:
      "Accompagnement spirituel individuel, transformation intérieure et réalignement profond.",
  },
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
    <head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXK2M2WR');
          `,
        }}
      />
    </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXK2M2WR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
      </noscript>
        <ScrollToTop />

        <NavigationProvider>
          <BookingProvider>
            <PageTransitionVeil/>
            <div id="navigation-layer">
              <BookToggle />
              <NavigationOverlay />
            </div>
            <BookingModal />
            <div id="page-layer" className="relative">
              <GlobalGridLines />
              <div className="relative z-[10]">
                {children}
                <Footer />
              </div>
            </div>
          </BookingProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}