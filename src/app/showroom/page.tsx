import type { Metadata } from "next";

import { showroomClients } from "@/data/showroomClients";
import ShowroomHero from "@/components/showroom/ShowroomHero";
import LogoMarquee from "@/components/showroom/LogoMarquee";
import ShowroomClients from "@/components/showroom/ShowroomClients";
import ShowroomForm from "@/components/showroom/ShowroomForm";

export const metadata: Metadata = {
  title: "Showroom | ExpoMarbella — Clientes Platinum y Premium de Marbella y la Costa del Sol",
  description:
    "El Showroom de ExpoMarbella reúne a las empresas, marcas y profesionales seleccionados que representan los mejores productos y servicios de Marbella y la Costa del Sol.",
  keywords: [
    "showroom ExpoMarbella",
    "clientes ExpoMarbella",
    "marcas Marbella",
    "empresas Costa del Sol",
    "interiorismo Marbella",
    "real estate Marbella",
  ],
  alternates: {
    canonical: "https://expomarbella.com/showroom",
  },
  openGraph: {
    title: "Showroom | ExpoMarbella",
    description:
      "Empresas, marcas y profesionales seleccionados que forman parte del ecosistema ExpoMarbella en Marbella y la Costa del Sol.",
    url: "https://expomarbella.com/showroom",
    siteName: "ExpoMarbella",
    locale: "es_ES",
    type: "website",
  },
};

export default function ShowroomPage() {
  const categories = Array.from(
    new Set(showroomClients.map((client) => client.category))
  ).sort((a, b) => a.localeCompare(b, "es"));

  const platinumCount = showroomClients.filter((client) => client.tier === "platinum").length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Showroom ExpoMarbella",
    description:
      "Clientes Platinum y Premium del Showroom de ExpoMarbella en Marbella y la Costa del Sol.",
    numberOfItems: showroomClients.length,
    itemListElement: showroomClients.map((client, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: client.name,
        description: client.description,
        ...(client.website ? { url: client.website } : {}),
        address: {
          "@type": "PostalAddress",
          addressLocality: client.city,
          addressCountry: "ES",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <ShowroomHero
        totalClients={showroomClients.length}
        platinumCount={platinumCount}
        sectorCount={categories.length}
      />
      <LogoMarquee clients={showroomClients} />
      <ShowroomClients clients={showroomClients} />
      <ShowroomForm categories={categories} />
    </>
  );
}
