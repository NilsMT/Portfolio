<template>
    <div id="realisation">
        <HeaderComp>
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
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                NewsRadar est un site réalisé pour une SAE (Projet de validation
                d'un semestre), en groupe de 5.<br />
                Il permet de faire une recherche géolocalisée d'articles de
                presse.<br />
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/NewsRadar"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Cette SAE avait pour objectif de développer une application web
                en utilisant des API publiques et un framework web.<br />
                Une autre exigence était de créer nos propres API.
            </p>

            <h2>Comment l'avons nous réalisé ?</h2>

            <p>
                Nous avons commencé par nous répartir les potentielles tâches
                sur un tableau Trello.<br />
                Puis avec une maquette du site web, faite sur le logiciel Figma,
                nous l'avons concrétisée avec le framework web Vue.js (avec la
                version Vue 3).<br />
                J'étais en charge de la gestion de l'équipe, la rédaction des
                rapports demandés et le développement du site web (avec son
                design également).
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <VideoComp
                    desc="Vidéo de présentation (humoristique) du projet et de l'équipe"
                >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/6RlUISc_nQQ?si=oZDETMi64CnWxi2e"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </VideoComp>

                <ImgComp
                    imgName="NewsRadar/site.png"
                    desc="Page de recherche d'articles dans l'application"
                />

                <ImgComp
                    imgName="NewsRadar/userapi.png"
                    desc="Page de documentation d'une de nos API"
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

import HeaderComp from "../../components/HeaderComp.vue";
import FooterComp from "../../components/FooterComp.vue";
import TitreSectionComp from "../../components/TitreSectionComp.vue";

import ImgComp from "../../components/ImgComp.vue";
import VideoComp from "../../components/VideoComp.vue";

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp,
        VideoComp,
    },
};
</script>
