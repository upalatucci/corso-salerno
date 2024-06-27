import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { manifest } from "./src/manifest";

// https://astro.build/config
export default defineConfig({
  site: "https://corso-salerno.vercel.app",
  integrations: [sitemap(), compress()],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
});
