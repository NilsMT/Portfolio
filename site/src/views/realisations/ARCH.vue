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
                Arch Research Central Hub est mon 2<sup>ème</sup> jeu sur la
                plateforme Roblox, créé en 2022 et développé seul.<br />
                C'est un jeu de type "Core Game" (jeu centré sur un réacteur au
                sein d’une installation scientifique, à l’image d’une centrale
                nucléaire) où les joueurs doivent explorer un complexe
                scientifique, jouer des rôles comme s'ils étaient employés
                là-bas et maintenir le réacteur à une température stable.<br />
                Sinon, celui-ci explose et c'est la panique à bord !<br />

                <a
                    target="_blank"
                    title="Nouvel onglet - Roblox | Arch Research Central Hub"
                    class="btn btn-secondary"
                    href="https://www.roblox.com/games/8871746612/Arch-Research-Central-Hub"
                >
                    Lien vers le jeu
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet suite à une frustration liée au manque
                d'optimisation de mon premier jeu (<router-link to="/ZRC"
                    >Z.R.C</router-link
                >).<br />
                J'ai donc décidé de créer un jeu plus structuré, plus organisé
                et plus optimisé, avec un système de contrôle du réacteur plus
                simple et complet.<br />
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le moteur de jeu Roblox Studio, qui
                fonctionne sous le langage de programmation Lua.<br />
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu,
                à son gameplay, à son univers et à communiquer les avancées.<br />
                J'ai utilisé Trello pour gérer les tâches et les idées.<br />
                Cependant, avec mes études le temps venait parfois à manquer et
                le développement s'est retrouvé ralenti plusieurs fois.<br />
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="ARCH/labcheckpoint.png"
                    desc="Point de contrôle du secteur des laboratoires"
                />

                <Img
                    imgName="ARCH/lab.png"
                    desc="Caverne du secteur des laboratoires"
                />

                <Img
                    imgName="ARCH/waterstation.png"
                    desc="Station d'épuration"
                />

                <Img imgName="ARCH/annex.png" desc="Annexe de ventilation" />

                <Img
                    imgName="ARCH/reactor.png"
                    desc='Le réacteur "Lumen Based Reactor"'
                />

                <Img imgName="ARCH/icecave.png" desc="Caverne de glace" />

                <Img imgName="ARCH/trello.png" desc="Le Trello  du projet" />
            </div>
        </section>

        <section id="accueil">
            <router-link
                class="btn btn-primary"
                to="/#realisations"
                title="Accueil"
            >
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
