/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: "Corso Salerno 2024", // Change this to your website's name.
  short_name: "Corso Salerno", // Change this to your website's short name.
  description:
    "27, 28 e 29 settembre si terra' a Marina di Camerota il corso del Territorio Salerno", // Change this to your websites description.
  theme_color: "#09009f", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
