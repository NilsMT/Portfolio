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
                Zenium Research Center est mon 1<sup>er</sup> jeu sur la
                plateforme Roblox, créé en 2019 et terminé en 2024.<br />
                C'est un jeu de type "Core Game" (jeu centré sur un réacteur au
                sein d’une installation scientifique, à l’image d’une centrale
                nucléaire) où les joueurs doivent explorer un complexe
                scientifique, jouer des rôles comme s'ils étaient employés
                là-bas et maintenir le réacteur à une température stable.<br />
                Sinon, celui-ci explose et c'est la panique à bord !<br />

                <a
                    target="_blank"
                    title="Nouvel onglet - Roblox | Zenium Research Center"
                    class="btn btn-secondary"
                    href="https://www.roblox.com/games/7096759234/V2-Zenium-Research-Center"
                >
                    Lien vers le jeu
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J’ai commencé ce projet après avoir joué au jeu
                <a
                    target="_blank"
                    title="Nouvel onglet - Roblox | Q.S.E.R.F"
                    href="https://www.roblox.com/games/3039795291/QS-Energy-Research-Facility"
                >
                    Q.S.E.R.F
                </a>
                , un "Core Game" (jeu centré sur un réacteur au sein d’une
                installation scientifique, à l’image d’une centrale
                nucléaire).<br />
                Cette expérience m’a donné envie de créer mon propre jeu dans le
                même style. Je me sentais capable de relever ce défi et
                disposais des compétences nécessaires pour le mener à bien.<br />
                Deux personnes rencontrées en ligne m’ont accompagné dans sa
                réalisation, et je leur en suis reconnaissant.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le moteur de jeu Roblox Studio, qui
                fonctionne sous le langage de programmation Lua.<br />
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu,
                à son gameplay, à son univers et à communiquer les avancées.<br />
                Nous avons utilisé Trello pour gérer les tâches et les idées.<br />
                Cependant, nous n'étions pas nombreux pour le réaliser, donc
                j'ai dû réaliser beaucoup de tâches en autonomie.<br />
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img imgName="ZRC/checkpoint.png" desc="Un point de contrôle" />

                <Img
                    imgName="ZRC/reactor.png"
                    desc='Le réacteur "Zenium Reflexion Reactor Core"'
                />

                <Img
                    imgName="ZRC/outside.png"
                    desc="L'extérieur du complexe scientifique"
                />

                <Img
                    imgName="ZRC/reactroom.png"
                    desc="Salle de contrôle du réacteur"
                />

                <Img
                    imgName="ZRC/intersection.png"
                    desc="Une intersection entres plusieurs secteurs"
                />

                <Img
                    imgName="ZRC/coolant.png"
                    desc="Salle de stockage d'azote liquide"
                />

                <Img imgName="ZRC/trello.png" desc="Le Trello  du projet" />
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
