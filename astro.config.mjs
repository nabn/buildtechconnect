import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.buildtechconnect.com",
  integrations: [tailwind(), robotsTxt()],
  output: "server",
  adapter: cloudflare()
});