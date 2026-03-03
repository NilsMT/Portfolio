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
                AnimeList est une application web permettant de gérer une liste
                de visionnage d'animes (dessins animés japonais).<br />
                Les utilisateurs connectés peuvent ajouter des animes à ma
                liste, les modifier et les supprimer.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - Softr | AnimeList"
                    class="btn btn-secondary"
                    href="https://anime-list-arcan.softr.app/liste"
                >
                    Lien vers l'application
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet en voulant créer une application en me
                basant sur mon tableau Google Sheets qui me permettait de gérer
                mes visionnages d'anime.<br />
                Je trouvais qu'utiliser un tableau Google Sheets était peu
                pratique.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le site Softr.io, qui permet de
                créer des applications web sans coder.<br />
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="AnimeList/connexion.png"
                    desc="Page de connexion de l'application"
                />

                <Img
                    imgName="AnimeList/editor.png"
                    desc="Vue de l'application dans l'éditeur"
                />

                <Img
                    imgName="AnimeList/sheet.png"
                    desc="La tableau Google Sheets"
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
