import type { Metadata } from "next";
import { Montserrat, DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: "ExpoMarbella | Interior Design & Lifestyle Magazine",
  description: "La revista de referencia de la Costa del Sol evoluciona. Interior Design, Real Estate, Gastronomy & Lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${headingFont.variable} ${sansFont.variable} ${serifFont.variable} font-sans antialiased bg-brand-navy text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
