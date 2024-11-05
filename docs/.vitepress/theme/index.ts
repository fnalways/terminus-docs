// docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./styles/index.css";
import { useRoute } from "vitepress";
import Layout from "./components/Layout.vue";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import { App } from "vue";
import Tabs from "./components/tabs.vue";
import LaunchCard from "./components/LaunchCard.vue";
import FilterableList from "./components/FilterableList.vue";
import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component("Tabs", Tabs);
    app.component("LaunchCard", LaunchCard);
    app.component("FilterableList", FilterableList);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      inject();
      injectSpeedInsights();
      initZoom();

      document
        .querySelector(".wrapper .container a.title")
        ?.setAttribute("href", "https://www.olares.xyz/");

      document
        .querySelector(".wrapper .container a.title")
        ?.setAttribute("target", "_blank");
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          initZoom();

          document
            .querySelector(".wrapper .container a.title")
            ?.setAttribute("href", "https://www.olares.xyz/");

          document
            .querySelector(".wrapper .container a.title")
            ?.setAttribute("target", "_blank");
        });
      }
    );
  },
};
