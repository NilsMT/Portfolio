<template>
    <div
        class="material-symbols-outlined btn btn-normal"
        id="theme"
        @click="themeStore.toggleTheme"
    >
        {{ themeStore.currentIcon }}
    </div>
</template>

<script setup>
import { themeStore } from "../stores/themeStore.js";
</script>
