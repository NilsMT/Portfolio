import { reactive } from 'vue';


const defaultTheme = true

//init

if (defaultTheme) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.add('light')
}

//toggler

export const themeStore = reactive({
  isDarkMode: defaultTheme,
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const root = document.documentElement;
        root.classList.toggle('dark', this.isDarkMode)
        root.classList.toggle('light', !this.isDarkMode)
    }
})