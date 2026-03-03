<template>
    <div id="portfolio">
        <Bienvenue></Bienvenue>

        <Header>
            <a href="#presentation" target="_self" class="btn btn-normal"
                >Présentation</a
            >
            <a href="#formation" target="_self" class="btn btn-normal"
                >Formation</a
            >
            <a href="#competences" target="_self" class="btn btn-normal"
                >Compétences</a
            >
            <a href="#implication-sociale" class="btn btn-normal"
                >Implication sociale</a
            >
            <a href="#passions" target="_self" class="btn btn-normal"
                >Passions</a
            >
            <a href="#realisations" target="_self" class="btn btn-normal"
                >Réalisations</a
            >
            <a href="#avenir" target="_self" class="btn btn-normal">Avenir</a>
            <a href="#contacts-et-liens" target="_self" class="btn btn-normal"
                >Contacts & liens</a
            >
        </Header>

        <Presentation class="section"></Presentation>

        <Formation class="section"></Formation>

        <Competences class="section"></Competences>

        <Implication class="section"></Implication>

        <Passions class="section"></Passions>

        <Realisations class="section"></Realisations>

        <Avenir class="section"></Avenir>

        <Contact class="section"></Contact>

        <Footer></Footer>
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
//pages
import Bienvenue from "../components/Bienvenue.vue";
import Presentation from "../components/portfolio/Presentation.vue";
import Formation from "../components/portfolio/Formation.vue";
import Competences from "../components/portfolio/Competences.vue";
import Implication from "../components/portfolio/Implication.vue";
import Passions from "../components/portfolio/Passions.vue";
import Realisations from "../components/portfolio/Realisations.vue";
import Avenir from "../components/portfolio/Avenir.vue";
import Contact from "../components/portfolio/Contact.vue";

export default {
    components: {
        Header,
        Footer,
        Bienvenue,
        Presentation,
        Formation,
        Competences,
        Implication,
        Passions,
        Realisations,
        Avenir,
        Contact,
    },
};
</script>
