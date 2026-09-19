export interface Video {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  description: string;
  src: string;
  poster: string;
  width: number;
  height: number;
}

export const videos: Video[] = [
  {
    slug: "loris-andrea-giardini",
    title: "Loris · Andrea Giardini",
    eyebrow: "Video",
    date: "Settembre 2026",
    description:
      "Video di Andrea Giardini, condiviso dalla Redazione Corso Salerno 2026.",
    src: "/video/loris-andrea-giardini.mp4",
    poster: "/video/loris-andrea-giardini-thumb.jpg",
    width: 720,
    height: 1280,
  },
];

export function getVideo(slug: string) {
  return videos.find((video) => video.slug === slug);
}
