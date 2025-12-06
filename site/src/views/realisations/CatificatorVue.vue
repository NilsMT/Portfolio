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
            <a href="#visuels" target="_self" class="btn btn-normal"
                >Quelques visuels</a
            >
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Catificator est une extension web qui remplace les images de la
                page sur laquelle l'utilisateur est par des chats.
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://chromewebstore.google.com/detail/catificator/dacoijgelcpbpmoibpjkmniammagkafg"
                >
                    Lien vers l'extension
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai fais cette extension pour tester la création d'extension
                Google Chrome.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                L'extension récupère les balises HTML img et en change la source
                par une requête à l'API
                <a target="_blank" href="https://cataas.com">Cataas</a>.
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <ImgComp
                    imgName="Catificator/catificator.jpg"
                    desc="Le résultat sur des images de camions"
                />

                <ImgComp
                    imgName="Catificator/cataas.png"
                    desc="Routes de l'API Cataas"
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
import VideoComp from "../../components/VideoComp.vue";

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp,
        VideoComp,
    },
};
</script>
