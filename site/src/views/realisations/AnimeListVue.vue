<template>
    <div id="realisation">
        <HeaderComp>
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
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                AnimeList est une application web permettant de gérer une liste
                de visionnage d'animes (dessins animés japonais).<br />
                Les utilisateurs connectés peuvent ajouter des animes à ma
                liste, les modifier et les supprimer.<br />
                <a
                    target="_blank"
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
        </div>

        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp
                    imgName="AnimeList/connexion.png"
                    desc="Page de connexion de l'application"
                />

                <ImgComp
                    imgName="AnimeList/editor.png"
                    desc="Vue de l'application dans l'éditeur"
                />

                <ImgComp
                    imgName="AnimeList/sheet.png"
                    desc="La tableau Google Sheets"
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

        <FooterComp></FooterComp>
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

import HeaderComp from "../../components/HeaderComp.vue";
import FooterComp from "../../components/FooterComp.vue";
import TitreSectionComp from "../../components/TitreSectionComp.vue";

import ImgComp from "../../components/ImgComp.vue";

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp,
    },
};
</script>
