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

        <section id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Atlas est un projet dans le cadre d'une matière à l'IUT nommée
                Communication Professionnelle.<br />
                C'est un site web ayant pour thème le système solaire.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - ATLAS"
                    class="btn btn-secondary"
                    href="https://bastianmary.github.io/ATLAS/"
                >
                    Lien vers le site web
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Dans le cadre de la matière Communication Professionnelle, nous
                devions réaliser un site web pour une entreprise fictive de
                notre choix.<br />
            </p>

            <h2>Comment l'avons nous réalisé ?</h2>

            <p>
                Nous avons commencé par nous répartir les potentielles
                tâches.<br />
                J'étais en charge des illustrations ainsi que de la
                programmation du Paralax (l'arrière plan qui bouge grâce à la
                souris).
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img imgName="Atlas/accueil.png" desc="Page d'accueil" />

                <Img
                    imgName="Atlas/planete.png"
                    desc="Page d'information sur une planète"
                />
            </div>
        </section>

        <section id="accueil">
            <router-link class="btn btn-primary" to="/#realisations">
                Retour à l'accueil
                <span class="material-symbols-outlined"> home </span>
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
import { RouterLink } from "vue-router";

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitreSection from "../../components/TitreSection.vue";

import Img from "../../components/Img.vue";

export default {
    components: {
        RouterLink,
        Header,
        Footer,
        TitreSection,
        Img,
    },
};
</script>
