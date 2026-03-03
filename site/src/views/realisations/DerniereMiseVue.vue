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
                <!--TODO: desc dernière mise-->
                Dernière Mise est un court-métrage de fiction racontant
                l'histoire d'un homme à la recherche d'un toit dans un monde en
                pleine crise du logement.
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Ce court-métrage a été réalisé dans le cadre d'un projet de fin
                de semestre, et c'était mon premier court-métrage avec du
                matériel professionnel.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Pour le scénario, Nous nous sommes inspirés de la fameuse série
                télévisée Squid Game pour créer un univers dystopique et sombre.
                Pour le montage, nous avons utilisé Adobe Premiere Pro avec
                Essential Sound pour le mixage audio.
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <VideoComp desc="Le court-métrage">
                    <iframe
                        src="https://drive.google.com/file/d/1p2tPnPTLKW5vILvndHuG2DOk9xYYQptj/preview"
                        height="480"
                        allow="fullscreen"
                    ></iframe>
                </VideoComp>

                <ImgComp
                    imgName="DerniereMise/poster.jpg"
                    desc="Posters de promotion du court-métrage"
                />

                <ImgComp
                    imgName="DerniereMise/timeline.png"
                    desc="Aperçu du projet sur Premiere Pro"
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
