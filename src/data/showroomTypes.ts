export type ClientTier = "platinum" | "premium";

export type ShowroomClient = {
  readonly slug: string;
  readonly name: string;
  readonly tier: ClientTier;
  readonly category: string;
  readonly city: string;
  readonly description: string;
  readonly website?: string;
  readonly instagram?: string;
  readonly logo?: string;
  /** El logotipo está dibujado en blanco: necesita un fondo oscuro para verse. */
  readonly logoOnDark?: boolean;
};
