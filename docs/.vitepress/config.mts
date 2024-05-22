import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { en } from "./en";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Terminus",
  description: "Let people own their data again",
  lang: "en",
  locales: {
    root: {
      label: "English",
      ...en,
    },
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "0614S1555J",
        apiKey: "cbf4702e9d6bfb5a0ae85bf0d486a591",
        indexName: "jointerminus",
      },
    },
  },

  sitemap: {
    hostname: "https://docs.jointerminus.com/",
  },
  lastUpdated: true,
  base: process.env.DOC_BASE || "/",
  vite: {
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
  },
});
