import { createRouter, createWebHistory } from 'vue-router'
import Erreur404Vue from '@/views/Erreur404Vue.vue'
import PortfolioVue from '@/views/PortfolioVue.vue'
import WIPVue from '@/views/WIPVue.vue'

const WIPPath = [
    '/FlickIt','/AIPR','/ARCH','/ZRC',
    '/ChasseAuTresor','/NewsRadar','/AntoineFactory','/RGBStuffs','/Atlas',
    '/Pastek','/Youtube','/AnimeList'
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        

        //Pages
        {
            path: '/',
            name: 'Accueil',
            component: PortfolioVue,
        },

        // WIP
        {
            path: '/WIP',
            name: 'Page en construction',
            component: WIPVue,
        },

        // Erreur 404 (en dernier)
        {
            path: '/:catchAll(.*)',
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
