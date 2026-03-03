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
                Pickomino est une adaptation du jeu de société éponyme en une
                version numérique réalisé pour une SAE (Projet de validation
                d'un semestre), en groupe de 4.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - Github | Pickomino"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/Pickomino"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Cette SAE avait pour objectif de nous faire réaliser une
                application communiquant avec un serveur, qui lui, jouait la
                partie.<br />En plus de cela, le jeu devait être possible en
                local et en ligne de 2 à 4 joueurs.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Nous avons commencé par faire un diagramme pour comprendre le
                jeu. Puis nous avons commencé le développement en utilisant la
                documentation de l'API et en faisant une maquette.<br />
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="Vidéo de démonstration du projet">
                    <video controls="" height="480" allow="autoplay">
                        <source
                            src="../../assets/video/RealisationsDetails/pickomino_demo.mp4"
                            type="video/mp4"
                        />
                    </video>
                </Video>

                <Img imgName="Pickomino/board.png" desc="Le plateau de jeu" />

                <Img imgName="Pickomino/menu.png" desc="Le menu du jeu" />

                <Img
                    imgName="Pickomino/maquette.png"
                    desc="Maquette du plateau"
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
