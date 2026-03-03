<template>
    <div id="realisation">
        <Header>
            <router-link
                class="btn btn-normal"
                to="/#realisations"
                title="Retour à l'accueil"
            >
                <span class="material-symbols-outlined"> home </span>
            </router-link>

            <a
                href="#à-propos"
                title="Aller à la section À propos du projet"
                target="_self"
                class="btn btn-normal"
            >
                À propos du projet
            </a>
            <a
                href="#visuels"
                title="Aller à la section Quelques visuels"
                target="_self"
                class="btn btn-normal"
            >
                Quelques visuels
            </a>
        </Header>

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                J'ai participé au 24H du mapping avec une amie.<br />Le mapping
                consiste à projeter une vidéo sur une surface, et la vidéo joue
                avec les formes et les reliefs de la surface.
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Ce challenge a été réalisé uniquement pour le fun en 24 heures.
                C'était une activité proposée par une association étudiante
                nommée
                <a
                    target="_blank"
                    title="Nouvel onglet - HelloAsso | 803Z"
                    href="https://www.helloasso.com/associations/803z"
                >
                    803Z
                </a>
                . Il m'a permis de découvrir un nouveau logiciel créé par un de
                mes professeurs d'IMAC :
                <a
                    target="_blank"
                    title="Nouvel onglet - Coollab"
                    href="https://coollab-art.com/"
                >
                    Coollab
                </a>
                .
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Le projet a été créé sur Coollab et puis monté sur Adobe
                Première Pro par la suite.<br />
                Nous avons détourné l'utilisation de base de Coollab : Il est
                normalement utilisé pour réaliser des effets graphiques, mais
                nous l'avons utilisé pour créer une animation (je trouve ça
                drôle).
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="La vidéo finale">
                    <video controls="" height="480" allow="autoplay">
                        <source
                            src="../../assets/video/RealisationsDetails/24hmapping2025.mov"
                            type="video/mp4"
                        />
                    </video>
                </Video>

                <Img
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
