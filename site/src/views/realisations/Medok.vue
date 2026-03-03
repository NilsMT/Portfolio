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
                Medok est une application de suivi de traitement
                médicamenteux.<br />
                Cette application a été réalisé dans le cadre d'un SAE (Projet
                de validation d'un semestre), en groupe de 5.<br />
                <a
                    target="_blank"
                    title="Nouvel onglet - Github | Medok"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/Medok"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'avons-nous fait ?</h2>

            <p>
                Ce projet était une demande du Ministère de la Santé, il devait
                permettre le suivi de traitement médical par le médecin traitant
                et par le patient.
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Le projet a été réalisé avec la méthode SCRUM, donc avec un
                principe de Sprint (= Un jalon).<br />
                Un PDF avec des médicaments et de leurs interactions provenant
                de l'ANSM a été particulièrement difficile à transformer en base
                de données.<br />L'application a été développée avec
                <a
                    target="_blank"
                    title="Nouvel onglet - Android Compose"
                    href="https://developer.android.com/compose"
                >
                    Android Compose
                </a>
            </p>
        </section>

        <section id="visuels">
            <TitreSection titre="Quelques visuels" />

            <div id="cont">
                <Video desc="Vidéo de présentation de l'application">
                    <iframe
                        src="https://drive.google.com/file/d/1MFxETY0E4buVT5esSSKyabrBNBBA0E1N/preview"
                        width="640"
                        height="480"
                    ></iframe>
                </Video>

                <Img
                    imgName="Medok/issue_board.png"
                    desc="Tableau des tâches"
                />

                <Img imgName="Medok/figma.png" desc="Maquette Figma" />

                <Img
                    imgName="Medok/compte_rendu.png"
                    desc="Exemple de compte rendu de sprint"
                />
            </div>
        </section>

        <section id="accueil">
            <router-link
                class="btn btn-primary"
                to="/#realisations"
                title="Accueil"
            >
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
