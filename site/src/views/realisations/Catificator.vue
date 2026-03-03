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

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Catificator est une extension web qui remplace les images de la
                page sur laquelle l'utilisateur est par des chats.
                <a
                    target="_blank"
                    title="Nouvel onglet - Chrome Web Store | Catificator"
                    class="btn btn-secondary"
                    href="https://chromewebstore.google.com/detail/catificator/dacoijgelcpbpmoibpjkmniammagkafg"
                >
                    Lien vers l'extension
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai développé cette extension pour tester la création
                d'extension Google Chrome.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                L'extension récupère les balises HTML img et en change la source
                par une requête à l'API
                <a
                    target="_blank"
                    title="Nouvel onglet - Cataas"
                    href="https://cataas.com"
                >
                    Cataas
                </a>
                .
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Img
                    imgName="Catificator/catificator.jpg"
                    desc="Le résultat sur des images de camions"
                />

                <Img
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
