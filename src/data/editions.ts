import { currentIssue } from "./currentIssue";

export type Edition = {
  readonly number: number;
  readonly brand: "ExpoMarbella" | "DecoMarbella";
  readonly date: string;
  readonly coverStory: string;
  readonly cover: string;
  readonly readUrl: string;
};

const calameoCover = (bookId: string) =>
  `https://www.calameo.com/books/social/cover/${bookId}`;
const calameoRead = (bookId: string) => `https://www.calameo.com/read/${bookId}`;

/**
 * Archivo de ediciones, de la más reciente a la más antigua.
 *
 * Número y fecha están tomados de la propia portada de cada revista, no del
 * orden de la lista. Faltan por incorporar los números 6 y 1: no tenemos
 * enlace al visor para ellos.
 */
export const editions: readonly Edition[] = [
  {
    number: currentIssue.number,
    brand: "ExpoMarbella",
    date: currentIssue.date,
    coverStory: "Mariana Zhytariuk · DKV",
    cover: currentIssue.cover,
    readUrl: currentIssue.readUrl,
  },
  {
    number: 14,
    brand: "DecoMarbella",
    date: "Winter/Spring 2026",
    coverStory: "José Félix Pérez-Peña y Verónica Castilla · Savills",
    cover: "https://decomarbella.es/wp-content/uploads/2026/02/Portada14-web-724x1024.jpg",
    readUrl: calameoRead("007334244285c31f043a4"),
  },
  {
    number: 13,
    brand: "DecoMarbella",
    date: "Summer/Autumn 2025",
    coverStory: "Toni Masián · Alumed",
    cover: calameoCover("00798977796033d08fc0a"),
    readUrl: calameoRead("00798977796033d08fc0a"),
  },
  {
    number: 12,
    brand: "DecoMarbella",
    date: "Winter/Spring 2025",
    coverStory: "Maja Bylak · Loriini",
    cover: "/images/portada-12.jpg",
    readUrl: calameoRead("00618036738ac9134ce1a"),
  },
  {
    number: 11,
    brand: "DecoMarbella",
    date: "Summer/Autumn 2024",
    coverStory: "Mauricio Mesa · Cordia",
    cover: calameoCover("006180367cb596f1efb37"),
    readUrl: calameoRead("006180367cb596f1efb37"),
  },
  {
    number: 10,
    brand: "DecoMarbella",
    date: "Winter 2024",
    coverStory: "Adrian Meronk y Lukasz Tobys · Loriini",
    cover: calameoCover("00618036748829f9c6888"),
    readUrl: calameoRead("00618036748829f9c6888"),
  },
  {
    number: 9,
    brand: "DecoMarbella",
    date: "Summer 2023",
    coverStory: "Bijan Laufer · The Art of Marbella",
    cover: calameoCover("006180367de65c934f9a8"),
    readUrl: calameoRead("006180367de65c934f9a8"),
  },
  {
    number: 8,
    brand: "DecoMarbella",
    date: "Winter/Spring 2023",
    coverStory: "Strand Properties",
    cover: calameoCover("006180367fc3f806d68e3"),
    readUrl: calameoRead("006180367fc3f806d68e3"),
  },
  {
    number: 7,
    brand: "DecoMarbella",
    date: "Summer 2022",
    coverStory: "Artur Loginov · Drumelia Real Estate",
    cover: calameoCover("006180367d07b1089a3d2"),
    readUrl: calameoRead("006180367d07b1089a3d2"),
  },
  {
    number: 5,
    brand: "DecoMarbella",
    date: "Abril/Mayo 2021",
    coverStory: "La Carolina Crown · Prestige Expo",
    cover: calameoCover("00618036707dbf26e60e9"),
    readUrl: calameoRead("00618036707dbf26e60e9"),
  },
  {
    number: 4,
    brand: "DecoMarbella",
    date: "Enero/Febrero 2021",
    coverStory: "Setareh Mohregi · Gilmar Real Estate",
    cover: calameoCover("006180367b572c350cca2"),
    readUrl: calameoRead("006180367b572c350cca2"),
  },
  {
    number: 3,
    brand: "DecoMarbella",
    date: "Octubre/Noviembre 2020",
    coverStory: "Rodolfo Amieva · González & Jacobson Arquitectos",
    cover: calameoCover("006180367671f6c353ea9"),
    readUrl: calameoRead("006180367671f6c353ea9"),
  },
  {
    number: 2,
    brand: "DecoMarbella",
    date: "Julio/Agosto 2020",
    coverStory: "José Carlos León · Nvoga Marbella Realty",
    cover: calameoCover("006180367d3130913ee50"),
    readUrl: calameoRead("006180367d3130913ee50"),
  },
];
