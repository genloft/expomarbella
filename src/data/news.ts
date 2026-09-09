export type NewsItem = {
  readonly id: number;
  readonly slug: string;
  readonly town: string;
  readonly category: string;
  readonly title: string;
  readonly body: string;
  /** Portada generada, no fotográfica: ver public/images/noticias/. */
  readonly cover: string;
};

/** Periodo que cubre este resumen de prensa. */
export const NEWS_PERIOD = "31 de agosto - 6 de septiembre de 2026";

/**
 * Resumen de actualidad de la Costa del Sol.
 * Fuente: "20 Noticias (31 agosto - 6 septiembre).docx".
 */
export const newsItems: readonly NewsItem[] = [
  {
    id: 1,
    slug: "el-puerto-de-la-bajadilla-triplicara-sus-amarres",
    town: "Marbella",
    category: "Náutico",
    title: "El Puerto de La Bajadilla triplicará sus amarres",
    body: "Se ha anunciado el desbloqueo de la ampliación y transformación del puerto, un proyecto llamado a convertirlo en un nuevo polo náutico y turístico de Marbella.",
    cover: "/images/noticias/el-puerto-de-la-bajadilla-triplicara-sus-amarres.svg",
  },
  {
    id: 2,
    slug: "la-ocupacion-hotelera-alcanza-el-92-4-en-agosto",
    town: "Marbella",
    category: "Turismo",
    title: "La ocupación hotelera alcanza el 92,4% en agosto",
    body: "Marbella vuelve a cerrar uno de los meses clave del verano con cifras muy elevadas. La media de la Costa del Sol fue del 92,85%, con especial peso del visitante internacional.",
    cover: "/images/noticias/la-ocupacion-hotelera-alcanza-el-92-4-en-agosto.svg",
  },
  {
    id: 3,
    slug: "el-paro-cae-un-13-interanual",
    town: "Marbella",
    category: "Economía",
    title: "El paro cae un 13% interanual",
    body: "Agosto terminó con 5.863 desempleados, 877 menos que un año antes, lo que supone el mejor registro para la ciudad desde 2007.",
    cover: "/images/noticias/el-paro-cae-un-13-interanual.svg",
  },
  {
    id: 4,
    slug: "starlite-acoge-la-primera-edicion-europea-de-premios",
    town: "Marbella",
    category: "Música",
    title: "Starlite acoge la primera edición europea de Premios Juventud",
    body: "La gala reunió a más de 250 artistas de la industria musical hispanohablante y fue retransmitida a más de un centenar de países, reforzando la proyección internacional de Marbella.",
    cover: "/images/noticias/starlite-acoge-la-primera-edicion-europea-de-premios.svg",
  },
  {
    id: 5,
    slug: "sierra-blanca-by-the-sea-desvela-su-diseno",
    town: "Marbella",
    category: "Arquitectura",
    title: "Sierra Blanca by the Sea desvela su diseño",
    body: "El estudio marbellí GC Studio ha avanzado la arquitectura e interiorismo del nuevo desarrollo de Sierra Blanca Estates, un proyecto especialmente interesante para los sectores de arquitectura, interiorismo y real estate de lujo.",
    cover: "/images/noticias/sierra-blanca-by-the-sea-desvela-su-diseno.svg",
  },
  {
    id: 6,
    slug: "se-eliminan-siete-torres-electricas-en-golden-beach",
    town: "Marbella",
    category: "Urbanismo",
    title: "Se eliminan siete torres eléctricas en Golden Beach",
    body: "La actuación supone unos 200.000 euros y permite retirar aproximadamente 100 metros de tendido aéreo, mejorando el entorno urbano y liberando espacio público junto al río Real de Zaragoza.",
    cover: "/images/noticias/se-eliminan-siete-torres-electricas-en-golden-beach.svg",
  },
  {
    id: 7,
    slug: "cerca-de-300-jovenes-competiran-en-el-circuito-andal",
    town: "Marbella",
    category: "Deporte",
    title: "Cerca de 300 jóvenes competirán en el Circuito Andaluz de Pádel",
    body: "Marbella acogerá del 11 al 13 de septiembre la séptima prueba del Circuito Andaluz de Menores, puntuable para los rankings andaluz y nacional.",
    cover: "/images/noticias/cerca-de-300-jovenes-competiran-en-el-circuito-andal.svg",
  },
  {
    id: 8,
    slug: "la-marea-rosa-quiere-superar-los-3-000-participantes",
    town: "Marbella",
    category: "Solidario",
    title: "La Marea Rosa quiere superar los 3.000 participantes",
    body: "Se ha presentado la XIV edición de esta gran cita solidaria contra el cáncer de mama, que se celebrará el 4 de octubre en Marbella.",
    cover: "/images/noticias/la-marea-rosa-quiere-superar-los-3-000-participantes.svg",
  },
  {
    id: 9,
    slug: "campana-para-impulsar-el-comercio-local-con-la-vuelt",
    town: "San Pedro Alcántara",
    category: "Comercio",
    title: "Campaña para impulsar el comercio local con la vuelta al colegio",
    body: "Apymespa ha puesto en marcha una nueva campaña escolar destinada a facilitar las compras de las familias y dinamizar los establecimientos de San Pedro.",
    cover: "/images/noticias/campana-para-impulsar-el-comercio-local-con-la-vuelt.svg",
  },
  {
    id: 10,
    slug: "la-vuelta-a-espana-atravesara-el-centro-urbano-camin",
    town: "San Pedro Alcántara",
    category: "Deporte",
    title: "La Vuelta a España atravesará el centro urbano camino de Estepona",
    body: "La etapa reina del 11 de septiembre, con final en Peñas Blancas, pasará por la travesía urbana de San Pedro Alcántara antes de dirigirse hacia Estepona.",
    cover: "/images/noticias/la-vuelta-a-espana-atravesara-el-centro-urbano-camin.svg",
  },
  {
    id: 11,
    slug: "comienzan-las-obras-del-nuevo-complejo-los-boliches",
    town: "Fuengirola",
    category: "Urbanismo",
    title: "Comienzan las obras del nuevo Complejo Los Boliches",
    body: "Ha arrancado la demolición de la infraestructura existente para desarrollar un gran aparcamiento con capacidad prevista para 1.070 vehículos, una actuación urbana de considerable dimensión.",
    cover: "/images/noticias/comienzan-las-obras-del-nuevo-complejo-los-boliches.svg",
  },
  {
    id: 12,
    slug: "take-that-elige-marenostrum-para-su-unica-actuacion-",
    town: "Fuengirola",
    category: "Música",
    title: "Take That elige Marenostrum para su única actuación en Andalucía",
    body: "Esta semana se ha anunciado que la histórica banda británica actuará el 11 de julio de 2027 en Marenostrum Fuengirola, reforzando el posicionamiento internacional del recinto.",
    cover: "/images/noticias/take-that-elige-marenostrum-para-su-unica-actuacion-.svg",
  },
  {
    id: 13,
    slug: "chambao-pone-el-broche-final-a-marenostrum-2026",
    town: "Fuengirola",
    category: "Música",
    title: "Chambao pone el broche final a Marenostrum 2026",
    body: "La Mari celebra sus 25 años en la música con el concierto que cierra la temporada del gran recinto musical fuengiroleño.",
    cover: "/images/noticias/chambao-pone-el-broche-final-a-marenostrum-2026.svg",
  },
  {
    id: 14,
    slug: "nueva-copa-fuengirola-de-basket-femenino",
    town: "Fuengirola",
    category: "Deporte",
    title: "Nueva Copa Fuengirola de Basket Femenino",
    body: "El pabellón Juan Gómez “Juanito” acogerá el 13 de septiembre la competición organizada por la Federación Andaluza de Baloncesto y el CB Salliver.",
    cover: "/images/noticias/nueva-copa-fuengirola-de-basket-femenino.svg",
  },
  {
    id: 15,
    slug: "el-turismo-cierra-agosto-con-un-94-4-de-ocupacion-ho",
    town: "Mijas",
    category: "Turismo",
    title: "El turismo cierra agosto con un 94,4% de ocupación hotelera",
    body: "Es una de las cifras más altas de toda la Costa del Sol y sitúa a Mijas entre los destinos con mayor ocupación durante el cierre de la temporada alta.",
    cover: "/images/noticias/el-turismo-cierra-agosto-con-un-94-4-de-ocupacion-ho.svg",
  },
  {
    id: 16,
    slug: "arranca-la-feria-de-mijas-2026",
    town: "Mijas",
    category: "Cultura",
    title: "Arranca la Feria de Mijas 2026",
    body: "La gran cita de Mijas Pueblo se celebra del 7 al 12 de septiembre, con música, gastronomía, actividades familiares y actuaciones como Camela y Medina Azahara.",
    cover: "/images/noticias/arranca-la-feria-de-mijas-2026.svg",
  },
  {
    id: 17,
    slug: "100-000-euros-para-premiar-la-excelencia-deportiva",
    town: "Mijas",
    category: "Deporte",
    title: "100.000 euros para premiar la excelencia deportiva",
    body: "Se han presentado los nuevos Premios a la Excelencia Deportiva, destinados a deportistas del municipio que consiguieron méritos destacados durante 2025.",
    cover: "/images/noticias/100-000-euros-para-premiar-la-excelencia-deportiva.svg",
  },
  {
    id: 18,
    slug: "la-vuelta-prepara-uno-de-sus-finales-mas-decisivos-e",
    town: "Estepona",
    category: "Deporte",
    title: "La Vuelta prepara uno de sus finales más decisivos en Peñas Blancas",
    body: "La ciudad está preparando la llegada de la 19ª etapa el 11 de septiembre y repartirá 3.000 camisetas conmemorativas. La jornada incluirá además una quedada ciclista con un recorrido similar al de la etapa profesional.",
    cover: "/images/noticias/la-vuelta-prepara-uno-de-sus-finales-mas-decisivos-e.svg",
  },
  {
    id: 19,
    slug: "350-kilos-de-sardinas-protagonizan-la-gran-espetada",
    town: "Estepona",
    category: "Gastronomía",
    title: "350 kilos de sardinas protagonizan La Gran Espetada",
    body: "El Puerto Pesquero ha acogido una gran cita gastronómica con algunos de los mejores espeteros de la provincia y degustación gratuita de sardinas, además de una vertiente solidaria.",
    cover: "/images/noticias/350-kilos-de-sardinas-protagonizan-la-gran-espetada.svg",
  },
  {
    id: 20,
    slug: "dubai-gana-la-copa-de-oro-de-alto-handicap",
    town: "Sotogrande",
    category: "Deporte",
    title: "Dubai gana la Copa de Oro de Alto Hándicap",
    body: "El equipo Dubai recuperó el título del prestigioso torneo internacional de polo de Sotogrande, poniendo fin a una de las grandes citas deportivas y sociales del verano.",
    cover: "/images/noticias/dubai-gana-la-copa-de-oro-de-alto-handicap.svg",
  },
];
