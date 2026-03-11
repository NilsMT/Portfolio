<template>
    <div id="realisations">
        <TitreSection titre="Réalisations" />

        <div v-for="(label, type) in realisationTypes" :key="type">
            <h2>{{ label }}</h2>

            <div class="real_cont">
                <Real
                    v-for="id in realisationsByCategory[type]"
                    :key="id"
                    :imgName="realisations[id].imgName"
                    :titre="realisations[id].name"
                    :desc="realisations[id].desc"
                    :destination="realisations[id].destination"
                    :isWip="realisations[id].isWip"
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
import TitreSection from "../TitreSection.vue";
import Real from "../Real.vue";
import { ref } from "vue";

const realisationTypes = {
    game: "Jeux-vidéos",
    web: "Applications web",
    other: "Autres Réalisations",
};

const realisations = ref({});

realisations.value = {
    JustFlickIt: {
        name: "Just Flick It !",
        destination: "/JustFlickIt",
        imgName: "flickit.png",
        desc: "4<sup>ème</sup> jeu vidéo réalisé seul sur Unity.<br> en développement.",
    },
    AIPR: {
        name: "A.I.P.R",
        destination: "/AIPR",
        imgName: "aipr.png",
        desc: "3<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en seulement trois jours.",
    },
    ARCH: {
        name: "A.R.C.H",
        destination: "/ARCH",
        imgName: "arch.png",
        desc: "2<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en développement.",
    },
    ZRC: {
        name: "Z.R.C",
        destination: "/ZRC",
        imgName: "zrc.png",
        desc: "1<sup>er</sup> jeu vidéo réalisé sur Roblox avec 2 personnes.<br>Développement terminé en 2024.",
    },
    ChasseAuTresor: {
        name: "La Chasse Au Trésor",
        destination: "/ChasseAuTresor",
        imgName: "chasseautresor.png",
        desc: "Site réalisé pour une animation de chasse au trésor.",
    },
    EclExt: {
        name: "EclExt",
        destination: "/EclExt",
        imgName: "eclext.png",
        desc: "Outil de standardisation de données.<br> réalisé pendant mon stage de 2<sup>ème</sup> année de BUT.",
    },
    NewsRadar: {
        name: "NewsRadar",
        destination: "/NewsRadar",
        imgName: "newsradar.png",
        desc: "Site de recherche géalocalisée d'articles de presse.<br> Projet de fin de 2<sup>ème</sup> année de BUT.",
    },
    AntoineFactory: {
        name: "Antoine Factory",
        destination: "/AntoineFactory",
        imgName: "antoinefactory.png",
        desc: "Site d'e-shopping pour un client réel.<br> Projet de début de 2<sup>ème</sup> année de BUT.",
    },
    RGBStuffs: {
        name: "RGB Stuffs",
        destination: "/RGBStuffs",
        imgName: "rgb.png",
        desc: "Site qui regroupe des outils concernants les couleurs.",
    },
    ATLAS: {
        name: "ATLAS",
        destination: "/ATLAS",
        imgName: "atlas.png",
        desc: "Site ayant pour thème l'espace.<br> Projet d'une matière en de 1<sup>ère</sup> année de BUT.",
    },
    AnimeList: {
        name: "Anime List",
        destination: "/AnimeList",
        imgName: "animelist.png",
        desc: "Liste d'anime réalisée en no-code en utilisant le site softr.",
    },
    Portfolio: {
        name: "Portfolio",
        destination: "",
        imgName: "portoflio.png",
        desc: "Eh oui ! Ce portfolio est réalisé de mes propres mains pour qu'il me corresponde à 100%.",
    },
    PeriodicEncryption: {
        name: "Periodic Encryption",
        destination: "/PeriodicEncryption",
        imgName: "periodic.png",
        desc: "Librairie de cryptographie utilisant les éléments du tableau périodique.",
    },
    ProjetParticule: {
        name: "Projet Particule",
        destination: "/ProjetParticule",
        imgName: "projetparticule.png",
        desc: "Système de particule en Go.<br> Projet de fin de 1<sup>ère</sup> année de BUT.",
    },
    PuissanceQuatre: {
        name: "Puissance Quatre",
        destination: "/PuissanceQuatre",
        imgName: "puissancequatre.png",
        desc: "Jeu de Puissance Quatre a transformer pour être jouable en ligne.<br> Projet de 2<sup>ème</sup> année de BUT.",
    },
    Pickomino: {
        name: "Pickomino",
        destination: "/Pickomino",
        imgName: "pickomino.png",
        desc: "Transformation du jeu de société en un jeu vidéo.<br> Projet de fin de 2<sup>ème</sup> année de BUT.",
    },
    TraducteurKumarite: {
        name: "Traducteur Kumarite",
        destination: "/TraducteurKumarite",
        imgName: "traducteurkumarite.png",
        desc: "Site qui traduit une langue inventée, et raconte une histoire.<br> Workshop de 1<sup>ère</sup> année d'IMAC.",
    },
    Catificator: {
        name: "Catificator",
        destination: "/Catificator",
        imgName: "catificator.jpg",
        desc: "Une extension web qui remplace toutes les images par des chats.",
    },
    Medok: {
        name: "Medok",
        destination: "/Medok",
        imgName: "medok.png",
        desc: "Application de suivi de traitement médical.<br> Projet de 3<sup>ème</sup> année de BUT.",
    },
    Automate: {
        name: "Automate",
        destination: "/Automate",
        imgName: "automate.png",
        desc: "Simulation d'automate écrit en Kotlin.<br> Projet de 2<sup>ème</sup> année de BUT.",
    },
    "24HMapping2025": {
        name: "24H du Mapping 2025",
        destination: "/24HMapping2025",
        imgName: "24hmapping2025.png",
        desc: "Projet de mapping réalisé en duo en 24 heures.",
    },
    DerniereMise: {
        name: "Dernière Mise",
        destination: "/DerniereMise",
        imgName: "derniere_mise.png",
        desc: "Court-métrage de 1<sup>ère</sup> année d'IMAC réalisé en duo.",
    },
    More: {
        name: "Et plus encore !",
        destination: "https://github.com/NilsMT?tab=repositories",
        imgName: "github.png",
        desc: "Mon profil GitHub regorge dautres projets, jetez-y un œil !",
    },
    TicTacToe: {
        name: "Tic Tac Toe",
        destination: "/WIP?fallback=%2F%23realisations",
        imgName: "tictactoe.png",
        desc: "Jeu de Tic Tac Toe réalisé en C++.<br> Workshop de 1<sup>ère</sup> année d'IMAC.",
        isWip: true,
    },
    EsthetiqueEtAlgo: {
        name: "Esthétique et Algorithmique",
        destination: "/WIP?fallback=%2F%23realisations",
        imgName: "estheetalgo.png",
        desc: "Dessins algorithmiques.<br> Workshop de 1<sup>ère</sup> année d'IMAC.",
        isWip: true,
    },
    WkProgAlgo1: {
        name: "WK - Prog & Algo 1",
        destination: "/WIP?fallback=%2F%23realisations",
        imgName: "wkprogalgo1.png",
        desc: "Programmation d'effets graphiques.<br> Workshop de 1<sup>ère</sup> année d'IMAC.",
        isWip: true,
    },
};

const realisationsByCategory = ref({});

realisationsByCategory.value = {
    game: [
        "JustFlickIt",
        "AIPR",
        "ARCH",
        "ZRC",
        "ProjetParticule",
        "PuissanceQuatre",
        "Pickomino",
        "TicTacToe",
    ],
    web: [
        "ChasseAuTresor",
        "EclExt",
        "NewsRadar",
        "AntoineFactory",
        "RGBStuffs",
        "ATLAS",
        "AnimeList",
        "TraducteurKumarite",
        "Portfolio",
    ],
    other: [
        "PeriodicEncryption",
        "Catificator",
        "Medok",
        "Automate",
        "24HMapping2025",
        "DerniereMise",
        "WkProgAlgo1",
        "EsthetiqueEtAlgo",
        "More",
    ],
};

export default {
    name: "Realisations",
    components: {
        TitreSection,
        Real,
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
