import { createRouter, createWebHistory } from "vue-router";
import Erreur404 from "@/views/Erreur404.vue";
import Portfolio from "@/views/Portfolio.vue";
import WIP from "@/views/WIP.vue";

/* realisation */

import ZRC from "@/views/realisations/ZRC.vue";
import ARCH from "@/views/realisations/ARCH.vue";
import AIPR from "@/views/realisations/AIPR.vue";
import JustFlickIt from "@/views/realisations/JustFlickIt.vue";
import ProjetParticule from "@/views/realisations/ProjetParticule.vue";
import PuissanceQuatre from "@/views/realisations/PuissanceQuatre.vue";
import Pickomino from "@/views/realisations/Pickomino.vue";

import NewsRadar from "@/views/realisations/NewsRadar.vue";
import RGBStuffs from "@/views/realisations/RGBStuffs.vue";
import EclExt from "@/views/realisations/EclExt.vue";
import ChasseAuTresor from "@/views/realisations/ChasseAuTresor.vue";
import ATLAS from "@/views/realisations/ATLAS.vue";
import AntoineFactory from "@/views/realisations/AntoineFactory.vue";
import AnimeList from "@/views/realisations/AnimeList.vue";
import TraducteurKumarite from "@/views/realisations/TraducteurKumarite.vue";

import Periodic from "@/views/realisations/Periodic.vue";
import Catificator from "@/views/realisations/Catificator.vue";
import Automate from "@/views/realisations/Automate.vue";
import Medok from "@/views/realisations/Medok.vue";
import _24HMapping2025 from "@/views/realisations/_24HMapping2025.vue";
import DerniereMise from "@/views/realisations/DerniereMise.vue";

const WIPPath = [
    /*"/24HMapping2025"*/
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Portfolio
        {
            path: "/",
            name: "Accueil",
            component: Portfolio,
        },

        //////////// Réalisations
        {
            path: "/ZRC",
            name: "Z.R.C",
            component: ZRC,
        },

        {
            path: "/ARCH",
            name: "A.R.C.H",
            component: ARCH,
        },

        {
            path: "/AIPR",
            name: "A.I.P.R",
            component: AIPR,
        },

        {
            path: "/JustFlickIt",
            name: "Just Flick It !",
            component: JustFlickIt,
        },

        {
            path: "/NewsRadar",
            name: "NewsRadar",
            component: NewsRadar,
        },

        {
            path: "/RGBStuffs",
            name: "RGB Stuffs",
            component: RGBStuffs,
        },

        {
            path: "/EclExt",
            name: "EclExt",
            component: EclExt,
        },

        {
            path: "/ChasseAuTresor",
            name: "Chasse Au Trésor",
            component: ChasseAuTresor,
        },

        {
            path: "/ATLAS",
            name: "ATLAS",
            component: ATLAS,
        },

        {
            path: "/AntoineFactory",
            name: "Antoine Factory",
            component: AntoineFactory,
        },

        {
            path: "/AnimeList",
            name: "Anime List",
            component: AnimeList,
        },

        {
            path: "/PeriodicEncryption",
            name: "Periodic Encryption",
            component: Periodic,
        },

        {
            path: "/ProjetParticule",
            name: "Projet Particule",
            component: ProjetParticule,
        },

        {
            path: "/Pickomino",
            name: "Pickomino",
            component: Pickomino,
        },

        {
            path: "/PuissanceQuatre",
            name: "Puissance Quatre",
            component: PuissanceQuatre,
        },

        {
            path: "/TraducteurKumarite",
            name: "Traducteur Kumarite",
            component: TraducteurKumarite,
        },

        {
            path: "/Catificator",
            name: "Catificator",
            component: Catificator,
        },

        {
            path: "/Automate",
            name: "Automate",
            component: Automate,
        },

        {
            path: "/Medok",
            name: "Medok",
            component: Medok,
        },
        {
            path: "/24HMapping2025",
            name: "24H du Mapping 2025",
            component: _24HMapping2025,
        },
        {
            path: "/DerniereMise",
            name: "Dernière Mise",
            component: DerniereMise,
        },

        // WIP
        {
            path: "/WIP",
            name: "Page en construction",
            component: WIP,
        },

        // Erreur 404 (en dernier)
        {
            path: "/:pathMatch(.*)*",
            name: "Erreur 404",
            component: Erreur404,
        },
    ],
    /* scroll to anchor */
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            };
        }
        return {
            x: 0,
            y: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0 });

    document.title = `NMT | ${to.name}`;

    if (WIPPath.includes(to.path)) {
        next({ path: "/WIP" });
    } else {
        next();
    }
});

export default router;
