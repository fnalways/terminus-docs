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
