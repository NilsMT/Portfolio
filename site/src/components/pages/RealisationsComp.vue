<template>
    <div id="realisations">
        <TitreSectionComp titre="Réalisations" />

        <div v-for="(label, type) in realisationTypes" :key="type">
            <h2>{{ label }}</h2>

            <div class="real_cont">
                <RealComp
                    v-for="title in realisationsByCategory[type]"
                    :key="title"
                    :imgName="realisations[title].imgName"
                    :titre="title"
                    :desc="realisations[title].desc"
                    :destination="realisations[title].destination"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.real_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}

#final_real_cont {
    padding-top: var(--padding);
    margin-top: calc(var(--padding) * 2);
    border-top: solid 1px var(--text);
}
</style>

<script>
import TitreSectionComp from "../TitreSectionComp.vue";
import RealComp from "../RealComp.vue";
import { ref } from "vue";

const realisationTypes = {
    game: "Jeux-vidéos",
    web: "Applications web",
    other: "Autres Réalisations",
};

const realisations = ref({});

const realisationsByCategory = ref({});

realisationsByCategory.value = {
    game: ["Just Flick It !", "A.I.P.R", "A.R.C.H", "Z.R.C", "Pastek"],
    web: [
        "La Chasse Au Trésor",
        "EclExt",
        "NewsRadar",
        "Antoine Factory",
        "RGB Stuffs",
        "ATLAS",
        "Anime List",
        "Portfolio",
    ],
    other: ["Periodic Encryption", "Et plus encore !"],
};

realisations.value = {
    "Just Flick It !": {
        imgName: "flickit.png",
        desc: "4<sup>ème</sup> jeu vidéo réalisé seul sur Unity.<br> en développement.",
        destination: "/JustFlickIt",
    },
    "A.I.P.R": {
        imgName: "aipr.png",
        desc: "3<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en seulement trois jours.",
        destination: "/AIPR",
    },
    "A.R.C.H": {
        imgName: "arch.png",
        desc: "2<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en développement.",
        destination: "/ARCH",
    },
    "Z.R.C": {
        imgName: "zrc.png",
        desc: "1<sup>er</sup> jeu vidéo réalisé sur Roblox avec 2 personnes.<br>Développement terminé en 2024.",
        destination: "/ZRC",
    },
    Pastek: {
        imgName: "pastek.png",
        desc: "Jeu Scratch réalisé au collège puis republié en mars 2023.",
        destination: "/Pastek",
    },
    "La Chasse Au Trésor": {
        imgName: "chasseautresor.png",
        desc: "Site réalisé pour une animation de chasse au trésor.",
        destination: "/ChasseAuTresor",
    },
    EclExt: {
        imgName: "eclext.png",
        desc: "Outil de standardisation de données.<br> réalisé pendant mon stage de 2<sup>ème</sup> année de BUT.",
        destination: "/EclExt",
    },
    NewsRadar: {
        imgName: "newsradar.png",
        desc: "Site de recherche géalocalisée d'articles de presse .<br> Projet de fin de 2<sup>ème</sup> année de BUT.",
        destination: "/NewsRadar",
    },
    "Antoine Factory": {
        imgName: "antoinefactory.png",
        desc: "Site d'e-shopping pour un client réel.<br> Projet de début de 2<sup>ème</sup> année de BUT.",
        destination: "/AntoineFactory",
    },
    "RGB Stuffs": {
        imgName: "rgb.png",
        desc: "Site qui regroupe des outils concernants les couleurs.",
        destination: "/RGBStuffs",
    },
    ATLAS: {
        imgName: "atlas.png",
        desc: "Site ayant pour thème l'espace.<br> Projet d'une matière en de 1<sup>ère</sup> année de BUT.",
        destination: "/ATLAS",
    },
    "Anime List": {
        imgName: "animelist.png",
        desc: "Liste d'anime réalisée en no-code en utilisant le site softr.",
        destination: "/AnimeList",
    },
    Portfolio: {
        imgName: "portoflio.png",
        desc: "Eh oui ! Ce portfolio est réalisé de mes propres mains pour qu'il me corresponde à 100%.",
        destination: "",
    },
    "Periodic Encryption": {
        imgName: "periodic.png",
        desc: "Librairie de cryptographie utilisant les éléments du tableau périodique.",
        destination: "/PeriodicEncryption",
    },
    "Et plus encore !": {
        imgName: "github.png",
        desc: "Mon profil GitHub regorge d’autres projets, jetez-y un œil !",
        destination: "https://github.com/NilsMT?tab=repositories",
    },
};

export default {
    name: "RealisationsComp",
    components: {
        TitreSectionComp,
        RealComp,
    },
    setup() {
        return {
            realisationTypes,
            realisations,
            realisationsByCategory,
        };
    },
};
</script>
