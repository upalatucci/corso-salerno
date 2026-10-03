export interface Article {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
}

export const articles: Article[] = [
  {
    slug: "lettura-gosho-parte-iv",
    title:
      "Lettura del Gosho, parte IV «Il raggiungimento della Buddità in questa esistenza»",
    eyebrow: "Materiale di studio",
    date: "Ottobre 2026",
    author: "Redazione Corso Salerno 2026",
    readTime: "3 min",
    excerpt:
      "Video della quarta parte della lettura del Gosho «Il raggiungimento della Buddità in questa esistenza».",
    image: "/articoli/og/lettura-gosho-parte-iv.jpg",
    imageAlt: "Lettura del Gosho, parte IV",
  },
  {
    slug: "lettura-gosho-parte-iii",
    title:
      "Lettura del Gosho, parte III «Il raggiungimento della Buddità in questa esistenza»",
    eyebrow: "Materiale di studio",
    date: "Ottobre 2026",
    author: "Redazione Corso Salerno 2026",
    readTime: "3 min",
    excerpt:
      "Video della terza parte della lettura del Gosho «Il raggiungimento della Buddità in questa esistenza».",
    image: "/articoli/og/lettura-gosho-parte-iii.jpg",
    imageAlt: "Lettura del Gosho, parte III",
  },
  {
    slug: "insegnare-agli-altri-al-100",
    title: "Insegnare agli altri al 100% delle proprie capacità",
    eyebrow: "Incoraggiamento",
    date: "Settembre 2026",
    author: "Franco Gregorio",
    readTime: "4 min",
    excerpt:
      "Franco Gregorio, Responsabile Uomini di Regione, ci invita a manifestare la fede e a sfidarci nei tre pilastri fondamentali di fede, pratica e studio.",
    image: "/articoli/og/insegnare-agli-altri-al-100.jpg",
    imageAlt: "Franco Gregorio, Responsabile Uomini di Regione",
  },
  {
    slug: "loris-andrea-giardini",
    title: "Video incoraggiamento di Loris Andrea Giardini",
    eyebrow: "Incoraggiamento",
    date: "Settembre 2026",
    author: "Andrea Giardini 'Loris'",
    readTime: "3 min",
    excerpt:
      "Video incoraggiamento di Loris Andrea Giardini per il Corso Autunnale del Territorio Salerno 2026.",
    image: "/articoli/og/loris-andrea-giardini.jpg",
    imageAlt: "Andrea Giardini 'Loris'",
  },
  {
    slug: "video-19-settembre-2026",
    title: "Lettura del Gosho, parte II «Il raggiungimento della Buddità in questa esistenza»",
    eyebrow: "Materiale di studio",
    date: "Settembre 2026",
    author: "Redazione Corso Salerno 2026",
    readTime: "3 min",
    excerpt:
      "Video della seconda parte della lettura del Gosho «Il raggiungimento della Buddità in questa esistenza».",
    image: "/articoli/og/video-19-settembre-2026.jpg",
    imageAlt: "Lettura del Gosho, parte II",
  },
  {
    slug: "una-vittoria-per-kosen",
    title: "Una vittoria per kosen-rufu",
    eyebrow: "Incoraggiamento",
    date: "Settembre 2026",
    author: "Giuseppe Palatucci",
    readTime: "3 min",
    excerpt:
      "Giuseppe Palatucci, responsabile nazionale del Gruppo Uomini, ci invita a realizzare una grande esperienza di fede in preparazione al Corso del Territorio Salerno.",
    image: "/articoli/og/una-vittoria-per-kosen.jpg",
    imageAlt: "Giuseppe Palatucci, Responsabile Nazionale del Gruppo Uomini",
  },
  {
    slug: "lettura-gosho-volume-i",
    title:
      "Lettura del Gosho «Il raggiungimento della Buddità in questa esistenza»",
    eyebrow: "Materiali di studio",
    date: "Settembre 2026",
    author: "Redazione Corso Salerno 2026",
    readTime: "2 min",
    excerpt:
      "Una lettura del Gosho «Il raggiungimento della Buddità in questa esistenza», tratto dalla Raccolta degli Scritti di Nichiren Daishonin, Volume I.",
    image: "/articoli/og/lettura-gosho-volume-i.jpg",
    imageAlt: "Lettura del Gosho, parte I",
  },
  {
    slug: "al-via-il-corso-autunnale-2026",
    title: "Al via il Corso Autunnale del Territorio Salerno 2026",
    eyebrow: "Notizie dal corso",
    date: "Giugno 2026",
    author: "Territorio Salerno",
    readTime: "3 min",
    excerpt:
      "Inauguriamo il sito ufficiale del Corso Autunnale 2026: date, scadenze, obiettivi di preparazione e tutto ciò che troverete qui.",
    image: "/articoli/og/al-via-il-corso-autunnale-2026.jpg",
    imageAlt: "Corso Autunnale del Territorio Salerno 2026",
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
