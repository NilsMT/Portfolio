import { reactive } from "vue";

const DEFAULT_DEBUG = false;
const DEBUG_KEY = "pageDebug";

let initialDebug = DEFAULT_DEBUG;

if (!import.meta.env.SSR) {
    const storedDebug = localStorage.getItem(DEBUG_KEY);

    if (storedDebug !== null) {
        try {
            initialDebug = JSON.parse(storedDebug);
        } catch {
            initialDebug = DEFAULT_DEBUG;
        }
    }
}

export const debugStore = reactive({
    isDebugMode: initialDebug,

    updateDebugClass() {
        if (import.meta.env.SSR) {
            return;
        }

        const root = document.documentElement;

        root.classList.toggle("debug", this.isDebugMode);
    },

    toggleDebug() {
        this.isDebugMode = !this.isDebugMode;

        if (!import.meta.env.SSR) {
            localStorage.setItem(DEBUG_KEY, JSON.stringify(this.isDebugMode));

            this.updateDebugClass();
        }
    },
});
