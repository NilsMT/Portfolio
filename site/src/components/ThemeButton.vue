<template>
    <div
        class="btn btn-normal material-symbols-outlined"
        aria-hidden="true"
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
