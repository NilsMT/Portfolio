import { reactive, ref } from 'vue'

const defaultTheme = 'dark'
const root = document.documentElement

// Initialize theme if not stored yet
if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', defaultTheme)
}

// Set starting theme
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
} else {
    root.classList.add('light')
    root.classList.remove('dark')
}

// Reactive store
export const themeStore = reactive({
    isDarkMode: ref(localStorage.getItem('theme') === 'dark'),
    
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode

        if (this.isDarkMode) {
            localStorage.setItem('theme', 'dark')
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            localStorage.setItem('theme', 'light')
            root.classList.add('light')
            root.classList.remove('dark')
        }
    }
})