<template>
    <div id="realisations">
        <TitreSectionComp titre="Réalisations" />

        <div id="real_cont">
            <RealComp v-for="(real, key) in dico_real" :key="key" 
                :imgName="real.imgName" 
                :titre="key" 
                :desc="real.desc" 
                :destination="real.destination"
            />
        </div>
    </div>
</template>

<style scoped>
#real_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}
</style>

<script>
import TitreSectionComp from '../TitreSectionComp.vue'
import RealComp from '../RealComp.vue'
import { ref } from 'vue'

const dico_real = ref({})

dico_real.value = {
    "Just Flick It !": {
        "imgName": "flickit.png",
        "desc": "4<sup>ème</sup> jeu vidéo réalisé seul sur Unity.<br> en développement.",
        "destination": "/FlickIt"
    },
    "A.I.P.R": {
        "imgName": "aipr.png",
        "desc": "3<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en seulement trois jours.",
        "destination": "/AIPR"
    },
    "A.R.C.H": {
        "imgName": "arch.png",
        "desc": "2<sup>ème</sup> jeu vidéo réalisé seul sur Roblox.<br> en développement.",
        "destination": "/ARCH"
    },
    "Z.R.C": {
        "imgName": "zrc.png",
        "desc": "1<sup>er</sup> jeu vidéo réalisé sur Roblox en collaboration avec 2 personnes.<br>Développement en pause pour favoriser celui d'A.R.C.H.",
        "destination": "/ARCH"
    },
    "La Chasse Au Trésor": {
        "imgName": "chasseautresor.png",
        "desc": "Site réalisé pour une animation de chasse au trésor.",
        "destination": "/ChasseAuTresor"
    },
    "EclExt": {
        "imgName": "eclext.png",
        "desc": "Outil de standardisation de données.<br> réalisé pendant mon stage de 2<sup>ème</sup> année de BUT.",
        "destination": "/EclExt"
    },
    "NewsRadar": {
        "imgName": "newsradar.png",
        "desc": "Site de recherche d'articles de presse géalocalisé.<br> Projet de fin de 2<sup>ème</sup> année de BUT.",
        "destination": "/NewsRadar"
    },
    "Antoine Factory": {
        "imgName": "antoinefactory.png",
        "desc": "Site d'e-shopping pour un client réel.<br> Projet de début de 2<sup>ème</sup> année de BUT.",
        "destination": "/AntoineFactory"
    },
    "RGB Stuffs": {
        "imgName": "rgb.png",
        "desc": "Site qui regroupe des outils concernants les couleurs.",
        "destination": "/RGBStuffs"
    },
    "Pastek": {
        "imgName": "pastek.png",
        "desc": "Jeu Scratch réalisé au collège puis republié en mars 2023.",
        "destination": "/Pastek"
    },
    "ATLAS": {
        "imgName": "atlas.png",
        "desc": "Site ayant pour thème l'espace.<br> Projet d'une matière en de 1<sup>ère</sup> année de BUT.",
        "destination": "/Atlas"
    },
    "Vidéos YouTube": {
        "imgName": "youtube.png",
        "desc": "Je fais des vidéos youtubes de temps à autres.",
        "destination": "/Youtube"
    },
    "Anime List": {
        "imgName": "animelist.png",
        "desc": "Liste d'anime réalisée en no-code en utilisant le site softr.",
        "destination": "/AnimeList"
    },
    "Portfolio": {
        "imgName": "portoflio.png",
        "desc": "Eh oui ! Ce portfolio est réalisé des mes propres main pour qu'il me correspondent à 100%.",
        "destination": ""
    },
    "En construction": {
        "imgName": "soon.gif",
        "desc": "D'autres projets sont à venir",
        "destination": ""
    },
}

export default {
    name: 'RealisationsComp',
    components: {
        TitreSectionComp,
        RealComp
    },
    setup() {
        return { 
            dico_real 
        }
    }
}
</script>