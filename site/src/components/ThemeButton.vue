<template>
    <div
        class="material-symbols-outlined btn btn-normal"
        id="theme"
        title="Changer le thème de couleur"
        @click="themeStore.toggleTheme"
    >
        {{ themeStore.currentIcon }}
    </div>
</template>

<script setup>
import { themeStore } from "../stores/themeStore.js";
</script>
