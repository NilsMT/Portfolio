import { reactive, ref } from "vue";
import { ThemeConstant } from "./constants/themeConstant";

const DEFAULT_THEME = ThemeConstant.DARK;
const THEME_KEY = "theme";
const root = document.documentElement;
const THEME_LIST = Object.values(ThemeConstant);

// Helper to get theme object by name
function getThemeByName(name) {
    return THEME_LIST.find((theme) => theme.name === name) || DEFAULT_THEME;
}

// Helper to get the next theme object
function getNextTheme(currentName) {
    const idx = THEME_LIST.findIndex((theme) => theme.name === currentName);
    return THEME_LIST[(idx + 1) % THEME_LIST.length];
}

// Reactive store
export const themeStore = reactive({
    currentTheme: ref(localStorage.getItem(THEME_KEY) || DEFAULT_THEME.name),
    currentIcon: ref(
        getThemeByName(localStorage.getItem(THEME_KEY) || DEFAULT_THEME.name)
            .icon,
    ),

    updateTheme() {
        // Remove all classes that start with "theme_"
        root.classList.forEach((cls) => {
            if (cls.startsWith("theme_")) {
                root.classList.remove(cls);
            }
        });
        root.classList.add("theme_" + this.currentTheme);
        localStorage.setItem(THEME_KEY, this.currentTheme);
        this.currentIcon = getThemeByName(this.currentTheme).icon;
    },

    toggleTheme() {
        const nextTheme = getNextTheme(this.currentTheme);
        this.currentTheme = nextTheme.name;
        this.currentIcon = nextTheme.icon;
        this.updateTheme();

        console.log(this.currentIcon);
    },
});

// Initialize theme if not stored yet
if (localStorage.getItem(THEME_KEY) == null) {
    localStorage.setItem(THEME_KEY, DEFAULT_THEME.name);
    themeStore.currentTheme = DEFAULT_THEME.name;
    themeStore.currentIcon = DEFAULT_THEME.icon;
}
// Set starting theme
themeStore.currentTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME.name;
themeStore.currentIcon = getThemeByName(themeStore.currentTheme).icon;
themeStore.updateTheme();
