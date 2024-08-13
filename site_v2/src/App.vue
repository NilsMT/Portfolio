<template>
    <div id="app_cont">
        <RouterView></RouterView>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
    name: 'App',
    components: {
        RouterView,
    },
}
</script>
