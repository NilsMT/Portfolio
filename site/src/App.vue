<template>
    <div id="app_cont">
        <RouterView></RouterView>
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        RouterView,
        Footer,
    },
};
</script>
