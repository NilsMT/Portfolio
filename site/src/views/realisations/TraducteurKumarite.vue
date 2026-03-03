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
            <a href="#visuels" target="_self" class="btn btn-normal"
                >Quelques visuels</a
            >
        </Header>

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Traducteur Kumarite est un site web réalisé dans le cadre d'un
                workshop d'écriture (une semaine entière consacrée au
                projet).<br />
                Le site accompagne le lecteur sur la découverte d'une langue
                ancienne.
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://imac-wk-exp-et-ecriture.vercel.app"
                >
                    Lien vers le site web
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Ce workshop avait pour but de nous faire écrire sur le thème de
                la Capsule Temporelle.<br />En plus de notre écrit, il fallait
                lui donner de la forme : j'ai donc construit une langue ancienne
                (avec sa police d'écriture) et un traducteur.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour l'écriture, je me suis inspiré du jeu vidéo
                <a
                    target="_blank"
                    href="https://store.steampowered.com/app/753640/Outer_Wilds/"
                    >Outer Wilds</a
                >
                où le joueur découvre une ancienne civilisation disparue. J'ai
                réalisée la police avec
                <a target="_blank" href="https://www.glyphrstudio.com/">
                    Glyphr Studio</a
                >.<br />
                Pour le site web, j'ai construit un traducteur qui change
                uniquement la police du texte.
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Img
                    imgName="TraducteurKumarite/traducteurkumarite.png"
                    desc="Exemple de traduction"
                />

                <Img
                    imgName="TraducteurKumarite/glyphr.png"
                    desc="La police d'écriture"
                />

                <Img
                    imgName="TraducteurKumarite/test.png"
                    desc="La réflexion sur la police d'écriture"
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
import Video from "../../components/Video.vue";

export default {
    components: {
        RouterLink,
        Header,
        Footer,
        TitreSection,
        Img,
        Video,
    },
};
</script>
