<template>
    <div id="portfolio">
        <BienvenueComp></BienvenueComp>

        <HeaderComp>
            <a href="#presentation" target="_self" class="btn btn-normal">Présentation</a>
            <a href="#parcours-scolaire" target="_self" class="btn btn-normal">Parcours scolaire</a>
            <a href="#competences" target="_self" class="btn btn-normal">Compétences</a>
            <a href="#implication-sociale" class="btn btn-normal">Implication sociale</a>
            <a href="#passions" target="_self" class="btn btn-normal">Passions</a>
            <a href="#realisations" target="_self" class="btn btn-normal">Réalisations</a>
            <a href="#avenir" target="_self" class="btn btn-normal">Avenir</a>
            <a href="#contacts-et-liens" target="_self" class="btn btn-normal">Contacts & liens</a>
        </HeaderComp>

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