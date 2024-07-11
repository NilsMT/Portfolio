<template>
    <div id="app_cont">
        <BackgroundComp></BackgroundComp>
        <RouterView></RouterView>
    </div>
    
</template>

<style>
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

    #app_cont > *:not(:first-child) {
        z-index: 1;
        overflow: auto;
    }
</style>

<script>
import BackgroundComp from './components/BackgroundComp.vue'
import { RouterView } from 'vue-router'

export default {
    name: 'App',
    components: {
        RouterView,
        BackgroundComp
    },
}
</script>