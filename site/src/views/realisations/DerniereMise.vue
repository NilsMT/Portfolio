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
                <!--TODO: desc dernière mise-->
                Dernière Mise est un court-métrage de fiction racontant
                l'histoire d'un homme à la recherche d'un toit dans un monde en
                pleine crise du logement.
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Ce court-métrage a été réalisé dans le cadre d'un projet de fin
                de semestre, et c'était mon premier court-métrage avec du
                matériel professionnel.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Pour le scénario, Nous nous sommes inspirés de la fameuse série
                télévisée Squid Game pour créer un univers dystopique et sombre.
                Pour le montage, nous avons utilisé Adobe Premiere Pro avec
                Essential Sound pour le mixage audio.
            </p>
        </section>

        <section id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="Le court-métrage">
                    <iframe
                        src="https://drive.google.com/file/d/1p2tPnPTLKW5vILvndHuG2DOk9xYYQptj/preview"
                        width="640"
                        height="480"
                        allow="fullscreen"
                    ></iframe>
                </Video>

                <Img
                    imgName="DerniereMise/poster.jpg"
                    desc="Posters de promotion du court-métrage"
                />

                <Img
                    imgName="DerniereMise/timeline.png"
                    desc="Aperçu du projet sur Premiere Pro"
                />
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
