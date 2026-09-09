/**
 * Número actual de la revista. Origen único: portada, enlace al visor y
 * titulares de portada se consumen desde aquí (home, ediciones, /revista y
 * las imágenes sociales del layout).
 */
export const currentIssue = {
  number: 15,
  title: "ExpoMarbella Nº15",
  date: "Autumn/Winter 2026-27",
  cover: "/images/portada-15.jpg",
  /** URL absoluta para og:image y twitter:image. */
  coverAbsolute: "https://expomarbella.com/images/portada-15.jpg",
  readUrl: "https://www.calameo.com/read/007334244675018afd9aa",
  coverStory: "Mariana Zhytariuk — Asesora especializada en salud y protección empresarial",
  highlights: [
    { title: "Alumed Group redefines the future of aluminium", page: 48 },
    { title: "Aloha Forest: the new oasis in Nueva Andalucía", page: 62 },
    { title: "Silence Marbella: intelligence beyond real estate", page: 66 },
    { title: "Driver Cars: luxury at full power", page: 201 },
  ],
} as const;
