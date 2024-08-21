<template>
    <header>
        <div id="flex-container">
            <div class="material-symbols-outlined btn btn-normal" id="theme" @click="themeStore.toggleTheme">
                {{ themeStore.isDarkMode ? 'dark_mode' : 'light_mode' }}
            </div>

            <a href="#presentation" target="_self" class="btn btn-normal">Présentation</a>
            <a href="#parcours-scolaire" target="_self" class="btn btn-normal">Parcours scolaire</a>
            <a href="#competences" target="_self" class="btn btn-normal">Compétences</a>
            <a href="#implication-sociale" class="btn btn-normal">Implication sociale</a>
            <a href="#passions" target="_self" class="btn btn-normal">Passions</a>
            <a href="#realisations" target="_self" class="btn btn-normal">Réalisations</a>
            <a href="#avenir" target="_self" class="btn btn-normal">Avenir</a>
            <a href="#contacts-et-liens" target="_self" class="btn btn-normal">Contacts & liens</a>
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
    box-shadow: 0px 0px 1rem 1rem #0005;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 2rem;
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