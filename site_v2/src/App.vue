<template>
    <div id="app_cont">
        <RouterView></RouterView>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue'

export default {
    name: 'App',
    components: {
        RouterView,
        FooterComp
    },
}
</script>
