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
                La Chasse Au Trésor est un site web que j'ai créé pour une
                animation organisée pour un serveur communautaire sur
                Discord.<br />
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://chasse-au-tresor-2024.vercel.app/"
                >
                    Lien vers le site web
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Je l'ai fait car je voulais expérimenter la cryptographie et en
                même temps organiser la chasse au trésor annuelle du serveur
                discord dont je suis animateur.<br />
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai utilisé le framework Vue.js (Vue 3) et j'ai hébergé le site
                avec Vercel.<br />
                Pour la cryptographie j'ai écrit un processus de chiffrement et
                de déchiffrement en JavaScript qui intègre la
                <a
                    target="_blank"
                    href="https://fr.wikipedia.org/wiki/Chiffre_de_Vigen%C3%A8re#La_table_de_Vigen%C3%A8re"
                    >table de Vinegère</a
                >.<br />
            </p>
        </div>

        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp
                    imgName="ChasseAuTresor/site.png"
                    desc="Page d'accueil du site"
                />

                <ImgComp
                    imgName="ChasseAuTresor/admindecryptcode.png"
                    desc="Page permettant de décoder les codes que les participants m'ont envoyé, afin de savoir qui a terminé la chasse au trésor"
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
