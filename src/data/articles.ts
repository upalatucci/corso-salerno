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
    slug: "lettura-gosho-volume-i",
    title: "Lettura del Gosho «Il raggiungimento della Buddità in questa esistenza»",
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
