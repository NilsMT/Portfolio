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
                J'ai participé au 24H du mapping avec un ami.<br />Le mapping
                consiste à projeter une vidéo sur une surface, et la vidéo joue
                préférablement avec les formes, les reliefs de la surface.
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Ce projet a été réalisé uniquement pour le fun en 24 heures. Il
                m'a permis de découvrir un nouveau logiciel créer par un de mes
                professeurs d'IMAC :
                <a href="https://coollab-art.com/">Coollab</a>.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Le projet a donc été fait sur Coollab et puis monté sur Adobe
                Première Pro par la suite.<br />
                Nous avons détournée l'utilisation de base de Coollab, étant
                pour la création d'effets graphiques, en l'utilisant pour faire
                une animation (et moi je trouve ça drôle).
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <VideoComp desc="La vidéo finale">
                    <video controls="" height="480" allow="autoplay">
                        <source
                            src="../../assets/video/RealisationsDetails/24hmapping2025.mov"
                            type="video/mp4"
                        />
                    </video>
                </VideoComp>

                <ImgComp
                    imgName="24HMapping2025/coollab.png"
                    desc="Le projet Coollab"
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
