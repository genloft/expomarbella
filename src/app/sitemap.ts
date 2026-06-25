import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://expomarbella.com';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Si hubiera más páginas como /contacto o /blog, se añadirían aquí.
    // Actualmente parece una landing page (one-pager).
  ];
}
