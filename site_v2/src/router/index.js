import { createRouter, createWebHistory } from 'vue-router'
import Erreur404Vue from '@/views/Erreur404Vue.vue'
import PortfolioVue from '@/views/PortfolioVue.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        

        //Pages
        {
            path: '/',
            name: 'Accueil',
            component: PortfolioVue,
        },

        // Erreur 404 (en dernier)
        {
            path: '/:catchAll(.*)',
            name: 'Erreur 404',
            component: Erreur404Vue,
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.title = `NMT | ${to.name}`

    next()
})

export default router
