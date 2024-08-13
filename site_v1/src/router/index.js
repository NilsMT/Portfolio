import { createRouter, createWebHistory } from 'vue-router'
import AccueilVue from '../views/AccueilVue.vue'
import Erreur404Vue from '../views/Erreur404Vue.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:Erreur404',
            name: 'Erreur 404',
            component: Erreur404Vue,
        },
        {
            path: '/',
            name: 'Accueil',
            component: AccueilVue,
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.title = `NMT | ${to.name}`

    next()
})

export default router
