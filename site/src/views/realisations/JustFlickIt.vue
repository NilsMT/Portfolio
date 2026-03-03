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
            <a href="#images" target="_self" class="btn btn-normal"
                >Quelques images</a
            >
        </Header>

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Just Flick It ! est mon 4<sup>ème</sup> jeu, créé en 2024 et
                développé seul.<br />
                C'est un jeu de logique où le joueur doit appuyer sur des
                interrupteurs selon les règles spécifiques<br />

                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/Just-Flick-It"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet en voulant apprendre à utiliser le
                moteur de jeu Unity.<br />
                J'ai donc décidé de créer un jeu de logique simple pour
                commencer, en m'inspirant de
                <a target="_blank" href="https://keeptalkinggame.com/"
                    >Keep Talking And Nobody Explodes</a
                >.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le moteur de jeu Unity, qui
                fonctionne sous le langage de programmation C#.<br />
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu,
                à son gameplay et à son environnement.<br />
            </p>
        </div>

        <div class="section" id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="JustFlickIt/v1.png"
                    desc="Test de la génération aléatoire"
                />

                <Img
                    imgName="JustFlickIt/editor.png"
                    desc="Vue du jeu dans l'éditeur"
                />

                <Img imgName="JustFlickIt/ingame.png" desc="Vue en jeu" />

                <Img
                    imgName="JustFlickIt/title.png"
                    desc="Visuel promotionnel du jeu"
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
