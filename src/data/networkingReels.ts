export type NetworkingReel = {
  readonly venue: string;
  readonly postUrl: string;
  /**
   * MP4 autoalojado en `public/videos/`. Es lo único que permite reproducción
   * automática y en bucle: el embed de Instagram sirve solo una imagen de
   * póster con un botón que abre Instagram, sin etiqueta <video> que controlar.
   * Mientras no exista el fichero, la tarjeta cae al embed de Instagram.
   */
  readonly video?: string;
  /** El post ya no existe en Instagram: se evita incrustar su error. */
  readonly unavailable?: boolean;
};

export const networkingReels: readonly NetworkingReel[] = [
  {
    venue: "Boho Club",
    postUrl: "https://www.instagram.com/p/DVqEiFfDt5p/",
  },
  {
    venue: "Cascada Marbella",
    postUrl: "https://www.instagram.com/p/DP0W-c9DEdL/",
  },
  {
    venue: "El Lago",
    // Instagram responde "el enlace de esta foto o video está dañado, o se ha
    // eliminado". Hace falta la URL nueva del post (o el MP4) para reactivarlo.
    postUrl: "https://www.instagram.com/p/DI-oGpwIWs4/",
    unavailable: true,
  },
  {
    venue: "Casino Marbella",
    postUrl: "https://www.instagram.com/p/C0BaUuYt8w4/",
  },
];
