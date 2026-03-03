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
                Arch Industries Potato Reactor est mon 3<sup>ème</sup> jeu sur
                la plateforme Roblox, créé en 2024 et développé seul en trois
                jours.<br />
                C'est un jeu de type "Core Game" (jeu centré sur un réacteur au
                sein d’une installation scientifique, à l’image d’une centrale
                nucléaire) où les joueurs doivent produire de l'électricité avec
                des patates en suivant des instructions.<br />

                <a
                    target="_blank"
                    title="Nouvel onglet - Roblox | Arch Industries Potato Reactor"
                    class="btn btn-secondary"
                    href="https://www.roblox.com/games/18744063505/Arch-Industries-Potato-Reactor"
                >
                    Lien vers le jeu
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <div class="fake_p">
                J'ai commencé ce projet en demandant à une communauté de
                développeurs, quelles seraient les pires idées pour un "Core
                Game".<br />
                Le résultat de cette question :
                <ul>
                    <li>Patates comme source d'énergie</li>
                    <li>
                        Un processus long et compliqué pour produire de
                        l'électricité
                    </li>
                    <li>Une erreur d'inattention réduit les efforts à néant</li>
                </ul>

                Et j'ai décidé de le réaliser.<br />
            </div>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le créer, j'ai utilisé le moteur de jeu Roblox Studio, qui
                fonctionne sous le langage de programmation Lua.<br />
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu,
                à son gameplay.<br />
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="AIPR/entrance.png"
                    desc="L'entrée de l'installation"
                />

                <Img imgName="AIPR/crusher.png" desc="Broyeuse de patates" />

                <Img
                    imgName="AIPR/tank.png"
                    desc="La cuve (réacteur) avec son interface"
                />

                <Img imgName="AIPR/plant.png" desc="Plantation de patates" />
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
