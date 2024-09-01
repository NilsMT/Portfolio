import { reactive, ref } from 'vue'

const defaultDebug = false
const root = document.documentElement

// Initialize debug mode from localStorage or default value
const storedDebug = localStorage.getItem('pageDebug')
const debugMode = storedDebug !== null ? JSON.parse(storedDebug) : defaultDebug

// Apply the initial debug mode
if (debugMode) {
    root.classList.add('debug')
} else {
    root.classList.remove('debug')
}

// Reactive store
export const debugStore = reactive({
    isDebugMode: ref(debugMode),

    toggleDebug() {
        this.isDebugMode = !this.isDebugMode
        
        // Update the DOM class based on the current state
        if (this.isDebugMode) {
            root.classList.add('debug')
        } else {
            root.classList.remove('debug')
        }
        
        // Store the current state in localStorage
        localStorage.setItem('pageDebug', JSON.stringify(this.isDebugMode))
    }
})