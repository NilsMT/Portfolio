<template>
    <div id="pp">
        <RouterView></RouterView>
        <canvas></canvas>
    </div>
</template>
  
<script>
    import * as mtr from '@/assets/js/matrix.js'
    import { RouterView } from 'vue-router'

    export default {
        name: 'App',
        components: {
            RouterView
        },
        mounted() {
            mtr.init()
        }
    }
</script>

<style>
 
#pp {
    position: absolute;
}

#pp > * {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
}

#pp > canvas {
    z-index: 0;
}

</style>