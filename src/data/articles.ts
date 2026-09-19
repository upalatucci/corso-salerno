export interface Article {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    slug: "loris-andrea-giardini",
    title: "Video incoraggiamento di Loris Andrea Giardini",
    eyebrow: "Incoraggiamento",
    date: "Settembre 2026",
    author: "Andrea Giardini 'Loris'",
    readTime: "3 min",
    excerpt:
      "Video incoraggiamento di Loris Andrea Giardini per il Corso Autunnale del Territorio Salerno 2026.",
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
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}