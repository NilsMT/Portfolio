import { createRouter, createWebHistory } from 'vue-router'
import Erreur404Vue from '@/views/Erreur404Vue.vue'
import PortfolioVue from '@/views/PortfolioVue.vue'
import WIPVue from '@/views/WIPVue.vue'

/* realisation */

import ZRCVue from '@/views/realisations/ZRCVue.vue'
import ARCHVue from '@/views/realisations/ARCHVue.vue'
import AIPRVue from '@/views/realisations/AIPRVue.vue'
import JustFlickItVue from '@/views/realisations/JustFlickItVue.vue'

import NewsRadarVue from '@/views/realisations/NewsRadarVue.vue'
import RGBStuffsVue from '@/views/realisations/RGBStuffsVue.vue'
import EclExtVue from '@/views/realisations/EclExtVue.vue'
import ChasseAuTresorVue from '@/views/realisations/ChasseAuTresorVue.vue'
import ATLASVue from '@/views/realisations/ATLASVue.vue'
import AntoineFactoryVue from '@/views/realisations/AntoineFactoryVue.vue'

import AnimeListVue from '@/views/realisations/AnimeListVue.vue'
import PastekVue from '@/views/realisations/PastekVue.vue'

const WIPPath = [
    '/ChasseAuTresor','/RGBStuffs','/NewsRadar','/AntoineFactory','/Atlas','/EclExt',
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        

        // Portfolio
        {
            path: '/',
            name: 'Accueil',
            component: PortfolioVue,
        },

        //////////// Réalisations
        {
            path: '/ZRC',
            name: 'Z.R.C',
            component: ZRCVue,
        },

        {
            path: '/ARCH',
            name: 'A.R.C.H',
            component: ARCHVue,
        },

        {
            path: '/AIPR',
            name: 'A.I.P.R',
            component: AIPRVue,
        },

        {
            path: '/JustFlickIt',
            name: 'Just Flick It !',
            component: JustFlickItVue,
        },

        
        {
            path: '/NewsRadar',
            name: 'NewsRadar',
            component: NewsRadarVue,
        },

        {
            path: '/RGBStuffs',
            name: 'RGB Stuffs',
            component: RGBStuffsVue,
        },

        {
            path: '/EclExt',
            name: 'EclExt',
            component: EclExtVue,
        },

        {
            path: '/ChasseAuTresor',
            name: 'Chasse Au Trésor',
            component: ChasseAuTresorVue,
        },

        {
            path: '/ATLAS',
            name: 'ATLAS',
            component: ATLASVue,
        },

        {
            path: '/AntoineFactory',
            name: 'Antoine Factory',
            component: AntoineFactoryVue,
        },

        {
            path: '/Pastek',
            name: 'Pastek',
            component: PastekVue,
        },

        {
            path: '/AnimeList',
            name: 'Anime List',
            component: AnimeListVue,
        },

        // WIP
        {
            path: '/WIP',
            name: 'Page en construction',
            component: WIPVue,
        },

        // Erreur 404 (en dernier)
        {
            path: '/:pathMatch(.*)*',
            name: 'Erreur 404',
            component: Erreur404Vue,
        }
    ],
    /* scroll to anchor */
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            }
        }
        return { 
            x: 0, 
            y: 0
        }
    },
})

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0 })

    document.title = `NMT | ${to.name}`

    console.log(to.path in WIPPath)

    if (WIPPath.includes(to.path)) {
        next({ path: '/WIP' })
    } else {
        next()
    }
})

export default router
