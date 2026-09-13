import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spindelx.com"),
  title: {
    default: "SpindelX | Precision Sheet Metal Manufacturing — Mysore, India",
    template: "%s | SpindelX",
  },
  description:
    "SpindelX is a premium precision sheet metal manufacturer in Mysore, India. 6 kW fiber laser cutting, 150T CNC bending, DFM engineering support, and complete quality documentation. Engineering Precision. Manufacturing Excellence.",
  keywords: [
    "precision sheet metal manufacturing",
    "laser cutting Mysore",
    "CNC bending Karnataka",
    "sheet metal fabrication India",
    "fiber laser cutting",
    "DFM engineering support",
    "SpindelX",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spindelx.com",
    siteName: "SpindelX",
    title: "SpindelX | Precision Sheet Metal Manufacturing",
    description: "Premium precision sheet metal manufacturing from DXF to dispatch.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SpindelX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpindelX | Precision Sheet Metal Manufacturing",
    description: "Premium precision sheet metal manufacturing from DXF to dispatch.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "SpindelX",
  description: "Precision Sheet Metal Manufacturing — Laser Cutting, CNC Bending, Engineering Support",
  url: "https://spindelx.com",
  email: "spindelx@outlook.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mysore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  slogan: "Engineering Precision. Manufacturing Excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1F3855" />
      </head>
      <body className="bg-white text-neutral-900 overflow-x-hidden">
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <div className="grain-overlay" aria-hidden="true" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-VGFYGMP4HN" />
    </html>
  );
}
