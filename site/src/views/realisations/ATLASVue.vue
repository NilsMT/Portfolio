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
                Atlas est un projet dans le cadre d'une matière à l'IUT nommée Communication Professionnelle.<br>
                C'est un site web ayant pour thème le système solaire.<br>
                <a target="_blank" class="btn btn-secondary" href="https://bastianmary.github.io/ATLAS/">
                    Lien vers le site web
                    <span data-v-3a6ff9f5="" class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <div id="res">
                Dans le cadre de la matière Communication Professionnelle, nous devions réaliser un site web pour une entreprise fictive de notre choix.<br>
            </div>

            <h2>Comment l'avons nous réalisé ?</h2>

            <p>
                Nous avons commencé par nous répartir les potentielles tâches.<br>
                J'étais en charge des illustrations ainsi que de la programmation du Paralax 
                (l'arrière plan qui bouge grâce à la souris).
            </p>
        </div>


        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp imgName="Atlas/accueil.png" desc="Page d'accueil" />

                <ImgComp imgName="Atlas/planete.png" desc="Page d'information sur une planète" />
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