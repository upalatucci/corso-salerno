/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: "Corso Salerno 2026",
  short_name: "Corso Salerno",
  description:
    "9, 10 e 11 ottobre 2026 si terrà a Marina di Camerota il corso autunnale del Territorio Salerno",
  theme_color: "#7C3FA8",
  background_color: "#F7EEF8",
  display: "minimal-ui",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
