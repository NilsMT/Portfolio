<template>
    <div id="realisation">
        <HeaderComp>
            <router-link class="btn btn-normal" to="/#realisations" title="Accueil">
                <span class="material-symbols-outlined">
                    home
                </span>
            </router-link>

            <a href="#à-propos" target="_self" class="btn btn-normal">À propos du projet</a>
            <a href="#images" target="_self" class="btn btn-normal">Quelques images</a>
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                RGB Stuffs est un site qui regroupe des outils de calculs pour des couleurs, pour obtenir la couleur complémentaire d'une autre.<br>
                <a target="_blank" class="btn btn-secondary" href="https://nilsmt.github.io/NilsDoesStuff/rgbstuff/">
                    Lien vers le site web
                    <span  class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <div id="res">
                J'ai commencé ce projet en voulant créer des outils en rapport avec les couleurs pour ma propre utilisation et par curiosité.<br>
            </div>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai utilisé de l'HTML, du CSS et du JavaScript.<br>
            </p>
        </div>


        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp imgName="RGBStuffs/grayscale.png" desc="Page de l'outil pour calculer l'équivalent en niveau de gris d'une couleur" />
                <ImgComp imgName="RGBStuffs/complementary.png" desc="Page de l'outil pour calculer la couleur complémentaire d'une autre" />
            </div>
        </div>

        <div class="section" id="accueil">
            <router-link class="btn btn-primary" to="/#realisations" title="Accueil">
                Retour à l'accueil
                <span class="material-symbols-outlined">
                    home
                </span>
            </router-link>
        </div>

        <FooterComp></FooterComp>
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
import { RouterLink } from 'vue-router'

import HeaderComp from '../../components/HeaderComp.vue'
import FooterComp from '../../components/FooterComp.vue'
import TitreSectionComp from '../../components/TitreSectionComp.vue'

import ImgComp from '../../components/ImgComp.vue'

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp
    }
}
</script>