import "./assets/css/main.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes, WIPPath } from "./router";
import { themeStore } from "./stores/themeStore";

export const createApp = ViteSSG(App, { routes }, ({ app, router }) => {
    app.use(router);

    app.config.globalProperties.$darktheme = false;

    if (!import.meta.env.SSR) {
        themeStore.updateTheme();
    }

    router.beforeEach((to, from, next) => {
        if (!import.meta.env.SSR) {
            window.scrollTo({ top: 0 });
            document.title = `NMT | ${to.name}`;
        }

        if (WIPPath.includes(to.path)) {
            next({ path: "/WIP" });
        } else {
            next();
        }
    });
});
