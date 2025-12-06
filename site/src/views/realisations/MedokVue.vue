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
                Medok est une application de suivi de traitement
                médicamenteux.<br />
                Cette application a été réalisé dans le cadre d'un SAE (Projet
                de validation d'un semestre), en groupe de 5.<br />
                <a
                    target="_blank"
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
                permettre le suivi de traitement et devait permettre au médecin
                traitant de suivre le traitement du patient (mais pour des
                soucis de RGPD cela ne sera pas le cas).
            </p>

            <h2>Comment l'avons-nous réalisé ?</h2>

            <p>
                Le projet a été réalisé avec la méthode SCRUM, donc avec un
                principe de sprint (période on l'ont fait nos tâches assignées)
                d'une semaine.<br />
                Un PDF avec des médicaments et de leurs interactions provenant
                de l'ANSM a été particulièrement difficile à transformer en base
                de données.<br />L'application a été faites avec
                <a href="https://developer.android.com/compose" target="_blank"
                    >Compose</a
                >
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <VideoComp desc="Vidéo de présentation de l'application">
                    <iframe
                        src="https://drive.google.com/file/d/1MFxETY0E4buVT5esSSKyabrBNBBA0E1N/preview"
                        width="640"
                        height="480"
                    ></iframe>
                </VideoComp>

                <ImgComp
                    imgName="Medok/issue_board.png"
                    desc="Tableau des tâches"
                />

                <ImgComp imgName="Medok/figma.png" desc="Maquette Figma" />

                <ImgComp
                    imgName="Medok/compte_rendu.png"
                    desc="Exemple de compte rendu de sprint"
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
