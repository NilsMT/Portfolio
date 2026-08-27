<template>
    <div id="realisation">
        <Header>
            <router-link
                class="btn btn-normal"
                to="/#realisations"
                title="Retour à l'accueil"
            >
                <span class="material-symbols-outlined" aria-hidden="true">
                    home
                </span>
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

        <section id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                TicTacToe est un jeu de morpion en C++ jouable dans le terminal,
                réalisé dans le cadre d'un projet individuel à l'IMAC.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - GitHub | imac-algo-s1-individuel"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/imac-algo-s1-individuel"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined" aria-hidden="true">
                        open_in_new
                    </span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Ce projet avait pour but d'évaluer notre niveau en programmation
                C++ à travers
                <a
                    target="_blank"
                    title="Nouvel onglet - Sujet | Cours de programmation C++"
                    href="https://dsmte.github.io/Learn--cpp_programming/Subjects/IMAC2028/S1/Sujet/"
                >
                    un projet individuel
                </a>
                à réaliser de A à Z, tout en nous familiarisant avec
                l'utilisation de Git et GitHub.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <div class="fake_p">
                J'ai commencé par réaliser le jeu de base (Joueur contre Joueur
                et Joueur contre IA) puis j'ai ajouté plusieurs améliorations :
                <ul>
                    <li>Une IA avancé (qui réfléchis ses coups)</li>
                    <li>un mode IA contre IA</li>
                    <li>
                        une extension vers le jeu de Gomoku (un plateau de
                        19x19, ou il faut aligner 5 symboles)
                    </li>
                    <li>Des couleurs sur les symboles</li>
                </ul>
                Le jeu a d'abord été pensé pour un plateau fixe, avant d'être
                restructuré autour d'une taille de plateau variable (à l'aide
                d'un <b>vector</b> plutôt que d'un tableau statique) afin de
                pouvoir réutiliser la même classe pour le TicTacToe et le
                Gomoku.
            </div>
        </section>

        <section id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="Vidéo de démonstration du projet">
                    <video controls="" height="480" allow="autoplay">
                        <source
                            src="../../assets/video/RealisationsDetails/tictactoe_demo.mp4"
                            type="video/mp4"
                        />
                    </video>
                </Video>
            </div>
        </section>

        <section id="accueil">
            <router-link class="btn btn-primary" to="/#realisations">
                Retour à l'accueil
                <span class="material-symbols-outlined" aria-hidden="true">
                    home
                </span>
            </router-link>
        </section>

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
import { useRealisationHead } from "../../composables/useRealisationhead";
import { RouterLink } from "vue-router";

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitreSection from "../../components/TitreSection.vue";

import Video from "../../components/Video.vue";

export default {
    components: {
        RouterLink,
        Header,
        Footer,
        TitreSection,
        Video,
    },

    setup() {
        useRealisationHead();
    },
};
</script>
