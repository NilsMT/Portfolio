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
                Projet Particule est un système de particule réalisé pour une
                SAE (Projet de validation d'un semestre), en groupe de 2. Il
                permet d'avoir des particules dont la configuration est
                personnalisable.<br />
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/Projet-particule"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Cette SAE avait pour objectif de nous faire apprendre le lien
                entre un language dit "back-end" et une interface graphique, en
                utilisant la bibliothèque Ebiten.<br />
                Il y avait des contraintes sur ce que le système devait
                permettre de faire, et des optimisations à réaliser pour que le
                système soit fluide.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Nous avons commencé par se documenter sur la bibliothèque
                Ebiten. puis nous avons experimenté en tatonnant pour comprendre
                comment créer des particules et les afficher.<br />
                Ensuite, nous avons développé les fonctionnalités requises au
                fur et à mesure.<br />
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <VideoComp desc="Vidéo de démonstration du projet">
                    <video controls="" height="480" allow="autoplay">
                        <source
                            src="../../assets/video/RealisationsDetails/projetparticule_demo.mp4"
                            type="video/mp4"
                        />
                    </video>
                </VideoComp>
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
