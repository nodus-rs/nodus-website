import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://nodus.elata.ai",
  adapter: cloudflare()
});