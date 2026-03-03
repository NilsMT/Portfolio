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
                Antoine Factory est un site réalisé pour une SAE (Projet de
                validation d'un semestre), en groupe de 4.<br />
                C'est un site web d'e-commerce.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - Github | Antoine Factory"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/AntoineFactory"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Cette SAE avait pour objectif de développer une application web
                d'e-commerce en utilisant le language PHP.<br />
                Notre spécificité était d'avoir un réel client, ce qui nous a
                permis de travailler en conditions réelles.
            </p>

            <h2>Comment l'avons nous réalisé ?</h2>

            <p>
                Nous avons commencé par nous répartir les potentielles tâches
                sur un tableau Trello.<br />
                Puis avec une maquette du site web, faite sur le logiciel Figma,
                nous l'avons concrétisée avec le framework web Symfony et une
                base de données SQL.<br />
                J'étais en charge de la partie front-end, de la communication
                avec le client et de la rédaction des rapports demandés.
            </p>
        </section>

        <section id="images">
            <TitreSection titre="Quelques images" />

            <div id="cont">
                <Img
                    imgName="AntoineFactory/catalog.png"
                    desc="Catalogue du site web"
                />

                <Img
                    imgName="AntoineFactory/admin.png"
                    desc="Page de gestion des articles"
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
