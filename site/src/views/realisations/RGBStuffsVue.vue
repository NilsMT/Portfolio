<template>
    <div id="realisation">
        <Header>
            <router-link
                class="btn btn-normal"
                to="/#realisations"
                title="Accueil"
            >
                <span class="material-symbols-outlined"> home </span>
            </router-link>

            <a href="#à-propos" target="_self" class="btn btn-normal"
                >À propos du projet</a
            >
            <a href="#images" target="_self" class="btn btn-normal"
                >Quelques images</a
            >
        </Header>

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                RGB Stuffs est un site qui regroupe des outils de calculs pour
                des couleurs, pour obtenir la couleur complémentaire d'une
                autre.<br />
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://nilsmt.github.io/NilsDoesStuff/rgbstuff/"
                >
                    Lien vers le site web
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet en voulant créer des outils en rapport
                avec les couleurs pour ma propre utilisation et par
                curiosité.<br />
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>J'ai utilisé de l'HTML, du CSS et du JavaScript.<br /></p>
        </div>

        <div class="section" id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="RGBStuffs/grayscale.png"
                    desc="Page de l'outil pour calculer l'équivalent en niveau de gris d'une couleur"
                />
                <Img
                    imgName="RGBStuffs/complementary.png"
                    desc="Page de l'outil pour calculer la couleur complémentaire d'une autre"
                />
            </div>
        </div>

        <div class="section" id="accueil">
            <router-link
                class="btn btn-primary"
                to="/#realisations"
                title="Accueil"
            >
                Retour à l'accueil
                <span class="material-symbols-outlined"> home </span>
            </router-link>
        </div>

        <Footer></Footer>
    </div>
</template>

<style>
#accueil {
    display: flex;
    justify-content: center;
    padding-top: var(--padding);
}

#realisation {
    gap: 2rem;
    display: flex;
    flex-direction: column;
}

#cont {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
}

img {
    width: 100%;
    object-fit: contain;
    border-radius: var(--radius);
}

a:not(.btn) {
    color: var(--secondary);
}

a:not(.btn):hover {
    text-decoration: underline;
}

#res {
    line-height: 1.5;

    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}
</style>

<script>
import { RouterLink } from "vue-router";

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitreSection from "../../components/TitreSection.vue";

import Img from "../../components/Img.vue";

export default {
    components: {
        RouterLink,
        Header,
        Footer,
        TitreSection,
        Img,
    },
};
</script>
