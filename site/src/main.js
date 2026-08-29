import "./assets/css/main.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes, WIPPath } from "./router";
import { themeStore } from "./stores/themeStore";

export const createApp = ViteSSG(
    App,
    {
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return { el: to.hash };
            }
            if (savedPosition) {
                return savedPosition;
            }
            return { top: 0 };
        },
    },
    ({ app, router }) => {
        app.use(router);
        app.config.globalProperties.$darktheme = false;

        if (!import.meta.env.SSR) {
            themeStore.updateTheme();
        }

        router.beforeEach((to, from, next) => {
            if (!import.meta.env.SSR) {
                if (!to.hash) {
                    window.scrollTo({ top: 0 });
                }
                document.title = `NMT | ${to.name}`;
            }

            if (WIPPath.includes(to.path)) {
                next({ path: "/WIP" });
            } else {
                next();
            }
        });
    },
);
