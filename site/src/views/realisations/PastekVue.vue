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
                Pastek est un jeu simple que j'ai réalisé au collège en 2016 et je l'ai republié en mars 2023 après l'avoir retrouvé sur une clé USB.<br>
                Le jeu consiste à attraper des pastèques qui tombent du ciel avant qu'elles ne touchent le sol.<br>
                Mais attention, attraper une pastèque violette fera perdre la partie.<br>
                <a target="_blank" class="btn btn-secondary" href="https://scratch.mit.edu/projects/825278397/">
                    Lien vers le jeu
                    <span  class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <div id="res">
                Quand j'étais au collège, je passais beaucoup de temps sur Scratch à créer des jeux.<br>
                Et un jour, après avoir vu un jeu de ce type, j'ai décidé d'en réaliser un.
            </div>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le site Scratch, qui fonctionne avec des blocs de codes.<br>
            </p>
        </div>


        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp imgName="Pastek/editor.png" desc="Vue du jeu dans l'éditeur" />

                <ImgComp imgName="Pastek/ingame.png" desc="Vue du jeu" />
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