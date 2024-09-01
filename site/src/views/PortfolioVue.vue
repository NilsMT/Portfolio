<template>
    <div id="portfolio">
        <BienvenueComp></BienvenueComp>

        <HeaderComp></HeaderComp>

        <PresentationComp class="section"></PresentationComp>

        <ParcoursComp class="section"></ParcoursComp>

        <CompetencesComp class="section"></CompetencesComp>

        <ImplicationComp class="section"></ImplicationComp>

        <PassionsComp class="section"></PassionsComp>

        <RealisationsComp class="section"></RealisationsComp>

        <AvenirComp class="section"></AvenirComp>

        <ContactComp class="section"></ContactComp>

        <FooterComp></FooterComp>
    </div>
    
</template>

<style scoped>
#portfolio {
    gap: 2rem;
    display: flex;
    flex-direction: column;
}
</style>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
//pages
import BienvenueComp from '../components/BienvenueComp.vue'
import PresentationComp from '../components/pages/PresentationComp.vue'
import ParcoursComp from '../components/pages/ParcoursComp.vue'
import CompetencesComp from '../components/pages/CompetencesComp.vue'
import ImplicationComp from '../components/pages/ImplicationComp.vue'
import PassionsComp from '../components/pages/PassionsComp.vue'
import RealisationsComp from '../components/pages/RealisationsComp.vue'
import AvenirComp from '../components/pages/AvenirComp.vue'
import ContactComp from '../components/pages/ContactComp.vue'

export default {
    components: {
        HeaderComp,
        FooterComp,
        BienvenueComp,
        PresentationComp,
        ParcoursComp,
        CompetencesComp,
        ImplicationComp,
        PassionsComp,
        RealisationsComp,
        AvenirComp,
        ContactComp
    },
}
</script>