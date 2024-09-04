<template>
    <header>
        <div id="flex-container">
            <div class="material-symbols-outlined btn btn-normal" id="theme" @click="themeStore.toggleTheme">
                {{ themeStore.isDarkMode ? 'dark_mode' : 'light_mode' }}
            </div>

            <slot></slot>
        </div>
        
    </header>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    left: 0;

    z-index: 1;

    padding: var(--padding);

    background-color: var(--bg);
    box-shadow: 0px 0px 20px #0005;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#flex-container {
    display: flex;
    flex-direction: row;

    overflow-x: auto;

    max-width: 100%;

    gap: var(--gap);
}
</style>

<script>
import { themeStore } from '../assets/js/themeStore.js'

export default {
    name: 'HeaderComp',
    setup() {
        return {
            themeStore,
        }
    },
}
</script>