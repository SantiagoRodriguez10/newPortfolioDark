import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://santiagoportfoliodev.netlify.app",
  integrations: [tailwind(), robotsTxt()],
});