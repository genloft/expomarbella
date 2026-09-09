import type { Metadata } from "next";
import { Montserrat, DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";
import { currentIssue } from "@/data/currentIssue";
import "./globals.css";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["900"], // Black
  variable: "--font-heading",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "ExpoMarbella | La revista premium de Arquitectura, Diseño y Lifestyle en la Costa del Sol",
  description: "Descubre ExpoMarbella, la evolución de DecoMarbella. La publicación de referencia sobre interiorismo, construcción, real estate y estilo de vida en Marbella y la Costa del Sol.",
  keywords: ["ExpoMarbella", "DecoMarbella", "revista Marbella", "arquitectura Marbella", "interiorismo Marbella", "lifestyle Costa del Sol", "real estate Marbella"],
  authors: [{ name: "ExpoMarbella" }],
  creator: "ExpoMarbella",
  publisher: "ExpoMarbella",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ExpoMarbella | Interior Design & Lifestyle Magazine",
    description: "La publicación de referencia en Marbella y la Costa del Sol sobre arquitectura, interiorismo, construcción y estilo de vida.",
    url: "https://expomarbella.com",
    siteName: "ExpoMarbella",
    images: [
      {
        url: currentIssue.coverAbsolute, // Usa URL absoluta para og:image
        width: 1000,
        height: 1415,
        alt: `Portada ${currentIssue.title}`,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpoMarbella | Interior Design & Lifestyle Magazine",
    description: "La revista de referencia de la Costa del Sol evoluciona.",
    images: [currentIssue.coverAbsolute],
  },
  alternates: {
    canonical: "https://expomarbella.com",
  },
  other: {
    "geo.region": "ES-AN",
    "geo.placename": "Marbella",
    "geo.position": "36.5100;-4.8824",
    "ICBM": "36.5100, -4.8824",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${sansFont.variable} ${serifFont.variable} font-sans antialiased bg-brand-navy text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ExpoMarbella",
              "url": "https://expomarbella.com",
              "logo": "https://decomarbella.es/wp-content/uploads/2026/02/Portada14-web-724x1024.jpg",
              "description": "La revista de referencia en la Costa del Sol sobre arquitectura, interiorismo y lifestyle.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Marbella",
                "addressRegion": "Andalucía",
                "addressCountry": "ES"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-675-250-741",
                "contactType": "customer service"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
