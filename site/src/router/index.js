import { createRouter, createWebHistory } from 'vue-router'
import AccueilVue from '../views/AccueilVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // doesnt display the component apparently but path is correct
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
