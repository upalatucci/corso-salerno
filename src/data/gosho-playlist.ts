export interface GoshoPlaylistPart {
  slug: string;
  label: string;
}

export const goshoPlaylistTitle =
  "Il raggiungimento della Buddità in questa esistenza";

export const goshoReadingPlaylist: GoshoPlaylistPart[] = [
  { slug: "lettura-gosho-volume-i", label: "Parte I" },
  { slug: "video-19-settembre-2026", label: "Parte II" },
  { slug: "lettura-gosho-parte-iii", label: "Parte III" },
  { slug: "lettura-gosho-parte-iv", label: "Parte IV" },
];

export function getGoshoPlaylistNav(currentSlug: string) {
  const index = goshoReadingPlaylist.findIndex(
    (part) => part.slug === currentSlug,
  );
  if (index === -1) return null;

  return {
    index,
    current: goshoReadingPlaylist[index],
    previous: index > 0 ? goshoReadingPlaylist[index - 1] : null,
    next:
      index < goshoReadingPlaylist.length - 1
        ? goshoReadingPlaylist[index + 1]
        : null,
    total: goshoReadingPlaylist.length,
    parts: goshoReadingPlaylist,
  };
}
