// docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./styles/index.css";
import { inBrowser, useRoute, useRouter, useData } from "vitepress";
import Layout from "./components/Layout.vue";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import { App } from "vue";
import Tabs from "./components/tabs.vue";
import LaunchCard from "./components/LaunchCard.vue";
import FilterableList from "./components/FilterableList.vue";
import { onMounted, watch, nextTick, onBeforeMount } from "vue";
import mediumZoom from "medium-zoom";
import OSTabs from "./components/OStabs.vue";

const LANGUAGE_ZH_PATH = "/zh/";
const LANGUAGE_LOCAL_KEY = "language";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component("Tabs", Tabs);
    app.component("LaunchCard", LaunchCard);
    app.component("FilterableList", FilterableList);
    app.component("OSTabs", OSTabs);
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const { lang } = useData();
    let isMenuChange = false;

    const routerRedirect = () => {
      const localLanguage = localStorage.getItem(LANGUAGE_LOCAL_KEY);
      const language = localLanguage || navigator.language || "en";

      if (language.startsWith("zh") && !route.path.includes(LANGUAGE_ZH_PATH)) {
        router.go(`/zh${route.path}`);
        return;
      }
      if (!language.startsWith("zh") && route.path.includes(LANGUAGE_ZH_PATH)) {
        router.go(route.path.replace(LANGUAGE_ZH_PATH, "/"));
        return;
      }
    };

    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };

    const toggleMenuStatus = () => {
      const menuDom = document.querySelector(".menu .VPMenu");
      menuDom?.addEventListener("click", (e) => {
        const target = e.target as Element;
        const isLink = target?.classList.contains("VPLink");
        if (isLink) {
          isMenuChange = true;
        }
      });
    };

    if (inBrowser) {
      routerRedirect();
    }

    onMounted(() => {
      toggleMenuStatus();
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
      () => lang.value,
      (newValue) => {
        if (isMenuChange) {
          localStorage.setItem(LANGUAGE_LOCAL_KEY, newValue);
          isMenuChange = false;
        }
      }
    );

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
