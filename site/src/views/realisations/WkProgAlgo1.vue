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
                Ce "workshop" (une semaine entière consacrée au projet) est un
                projet de créations d'effets graphiques
                <a
                    target="_blank"
                    title="Nouvel onglet - GitHub | imac-wk-prog-algo-1"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/imac-wk-prog-algo-1/tree/main"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined" aria-hidden="true">
                        open_in_new
                    </span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Ce workshop avait pour but de nous faire découvrir la création
                d'effets graphiques.<br />
                Nous avions des effets qui étaient plus ou moins difficiles à
                réaliser.<br />
                Pris d'intérêt pour ce projet j'ai réalisé tout les exercices
                possibles et j'ai même fait des effets personnalisés !
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                Pour le code, nous avions
                <a
                    target="_blank"
                    title="Nouvel onglet - Sujet | Cours de programmation C++"
                    href="https://dsmte.github.io/Learn--cpp_programming/Workshop/Sujet"
                >
                    des instructions sur l'utilisation de la librairie sil
                </a>
                qui nous permettait de manipuler les images et
                <a
                    target="_blank"
                    title="Nouvel onglet - Exercices | Cours de programmation C++"
                    href="https://dsmte.github.io/Learn--cpp_programming/Workshop/Exercices"
                >
                    des indices sur les exercices
                </a>
                .<br />
                Pendant la semaine j'essayais de faire un maximum d'effets en
                commençant par ceux dont je comprenais le fonctionnement (et non
                par difficulté)
            </p>
        </section>

        <section id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Img
                    imgName="WkProgAlgo1/ex_code.png"
                    desc="Exemple d'exercice"
                />

                <Img
                    imgName="WkProgAlgo1/cool_effect.png"
                    desc="Tramage sur un Diamond Square Algorithm"
                />
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
