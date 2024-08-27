<template>
    <div id="realisations">
        <TitreSectionComp titre="Réalisations" />

        <RealComp 
            imgName="img_test.png"
            titre="Error 404" 
            desc="L'erreur 404 swag de ouf" 
            destination="/Erreur404" 
        />
    </div>
</template>

<script>
import TitreSectionComp from '../TitreSectionComp.vue'
import RealComp from '../RealComp.vue'

export default {
    name: 'RealisationsComp',
    components: {
        TitreSectionComp,
        RealComp
    },
}
</script>