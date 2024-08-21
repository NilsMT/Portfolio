import { reactive } from 'vue'

const debug = false

// Initialize
if (debug) {
    document.documentElement.classList.add('debug')
} else {
    document.documentElement.classList.remove('debug')
}

// Toggler
export const debugStore = reactive({
    isDebugMode: debug,
    toggleDebug() {
        this.isDebugMode = !this.isDebugMode
        const root = document.documentElement
        if (this.isDebugMode) {
            root.classList.add('debug')
        } else {
            root.classList.remove('debug')
        }
    }
});