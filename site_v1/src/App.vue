<template>
    <div id="app_cont">
        <BackgroundComp></BackgroundComp>
        <div id="page">
            <HeaderComp v-if="!isHomeRoute"></HeaderComp>
            <div id="page_cont">
                <RouterView></RouterView>
            </div>
            
        </div>
    </div>
    
</template>

<style scoped>
    #app_cont {
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    #app_cont > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        overflow: hidden;
    }

    #page {
        z-index: 1;
        overflow: auto;
    }

    #page > *:nth-child(2) {
        position: absolute;
        top: 0px;
    }
</style>

<script>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

import { themeStore } from './assets/js/themeStore.js';
import BackgroundComp from './components/BackgroundComp.vue'
import HeaderComp from './components/HeaderComp.vue'

export default {
    name: 'App',
    components: {
        RouterView,
        BackgroundComp,
        HeaderComp,
    },
    setup() {
        const route = useRoute();
        const isHomeRoute = computed(() => route.path === '/');

        // Mode debug
        const debug = false;
        if (debug) {
            document.documentElement.classList.add('debug');
        }

        return {
            themeStore,
            isHomeRoute, // Ajout du computed dans le return pour l'utiliser dans le template.
        };
    },
}
</script>
