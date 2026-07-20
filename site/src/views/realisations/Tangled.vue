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
                Tangled est le 4<sup>ème</sup> jeu vidéo auquel j'ai participé,
                en 48h, en 2026.<br />
                C'est un "Vampire Survivors" où le but est de survivre le plus
                longtemps possible face à une armée de monstres infinie.
                <a
                    target="_blank"
                    title="Nouvel onglet - Itch.io | Tangled : Crocky"
                    class="btn btn-secondary"
                    href="https://n0th3.itch.io/tangled-final"
                >
                    Lien vers le jeu
                    <span class="material-symbols-outlined" aria-hidden="true">
                        open_in_new
                    </span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <div class="fake_p">
                Avec un ami, nous avons décidé de participer à une
                <a
                    target="_blank"
                    title="Nouvel onglet - Itch.io | GameJam Wii 803Z - 2026"
                    href="https://itch.io/jam/gamejam-wii"
                >
                    Game Jam
                </a>
                où le but est de produire un jeu vidéo dans un laps de temps
                très court (24h, 48h, 7 jours...) avec un thème défini et
                parfois des contraintes. Cette Game Jam avait pour thème
                <b>Emmêlé</b> avec les deux contraintes suivantes :
                <ul>
                    <li>Avoir les contrôles inversés à un moment</li>
                    <li>Avoir des bruitages faits à la bouche</li>
                </ul>
                Nous avons fait un Vampire Survivors car cela nous semblait le
                plus faisable en 48h.
            </div>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Pour le créer, nous avons utilisé le moteur de jeu Godot, avec
                son propre langage de programmation.<br />
                Nous avons commencé par reprendre un tutoriel de Vampire
                Survivorss pour avoir une base, tandis que je codais, mon ami
                créait toutes les ressources graphiques (sur Adobe
                Illustrator).<br />
                Tout au long du développement, il y avait aussi des défis à
                compléter, qui nécessitaient parfois des modifications dans le
                jeu (comme inclure une référence à la Wii U).<br />
                Tous les bruitages et musiques ont été réalisés par mon ami et
                moi avec nos bouches.
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img imgName="Tangled/menu.png" desc="Menu du jeu" />

                <Img imgName="Tangled/ingame.png" desc="Vue en jeu" />

                <Img imgName="Tangled/code_editor.png" desc="Éditeur de code" />

                <Img
                    imgName="Tangled/scene_editor.png"
                    desc="Éditeur de scène"
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
