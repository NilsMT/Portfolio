<template>
    <header>
        <div class="material-symbols-outlined" id="theme" @click="themeStore.toggleTheme">
                {{ themeStore.isDarkMode ? 'dark_mode' : 'light_mode' }}
        </div>
    </header>
</template>

<style>
header {
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--bg);
    backdrop-filter: blur(10px);
    border-radius: 0% 0% 10% 10%;

    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    gap: var(--gap);
    padding: var(--padding);
    width: calc(100vw - var(padding) * 2);
}
</style>

<script>
import { themeStore } from '../assets/js/themeStore.js';

export default {
    name: 'HeaderComp',
    setup() {
        return {
        themeStore,
        }
    },
}
</script>