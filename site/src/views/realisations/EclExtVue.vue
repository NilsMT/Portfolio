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
            <a href="#visuels" target="_self" class="btn btn-normal"
                >Quelques visuels</a
            >
        </Header>

        <div class="section" id="à-propos">
            <TitreSection titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                EclExt est un géostandard gouvernemental de données lié à
                l'éclairage urbain. Il permet la standardisation d'un fichier de
                données de points lumineux.<br />
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://www.lobservatoiredelanuit.fr/EclExt/"
                >
                    Lien vers l'outil
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Cet outil de standardisation de données est un outil développé
                pendant mon stage de 2<sup>ème</sup> année de BUT Informatique
                au sein de L'Observatoire de la Nuit.<br />
                Il permet de faciliter l'usage des fichiers de données de points
                lumineux fournis par les collectivités locales et territoriales
                dans les applications de l'entreprise.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai créé du Machine Learning pour suggérer une standardisation
                selon le nom des différents champs de données.<br />
                J'ai aussi réalisé le site web à partir d'une maquette qui m'a
                été fournie.<br />
                Lors de ce stage j'ai utilisé les technologies suivantes :
                Vue.js (Vue 2), Express.js, GitHub CI/CD, Node.js, Mapbox,
                Swagger.
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="Vidéo de démonstration de l'outil">
                    <iframe
                        src="https://drive.google.com/file/d/14Uxh3-GSBx6Vkf0_9JIJmm725cYQb6Gz/preview"
                        allow="autoplay"
                    ></iframe>
                </Video>

                <Img
                    imgName="EclExt/etape1.png"
                    desc="L'étape 1 de l'outil : La configuration"
                />

                <Img
                    imgName="EclExt/etape2.png"
                    desc="L'étape 2 de l'outil : La standardisation des colonnes"
                />

                <Img
                    imgName="EclExt/etape3.png"
                    desc="L'étape 3 de l'outil : La standardisation des attributs"
                />

                <Img
                    imgName="EclExt/etape4.png"
                    desc="L'étape 4 de l'outil : La synthèse de la standardisation"
                />

                <Img
                    imgName="EclExt/etape5.png"
                    desc="L'étape 5 de l'outil : La visualisation de la standardisation"
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
