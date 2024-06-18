import { createRouter, createWebHistory } from 'vue-router'

import DecryptWord from '../views/public/DecryptWord.vue'
import EncryptCode from '../views/public/EncryptCode.vue'
import LaHonte from '../views/public/LaHonte.vue'
import Erreur404 from '../views/public/Erreur404.vue'

import DecryptCode from '../views/admin/DecryptCode.vue'
import EncryptWord from '../views/admin/EncryptWord.vue'
import Nav from '../views/admin/Nav.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Le début',
        component: DecryptWord,
    },
    {
        path: '/thefinals',
        name: 'La fin',
        component: EncryptCode,
        meta: {
            passwordRequired: true
        }
    },
    {
        path: '/admin/decrypt/code',
        name: 'Décryption du code',
        component: DecryptCode,
        meta: {
            restricted: true
        }
    },
    {
        path: '/admin/encrypt/word',
        name: 'Encryption du mot',
        component: EncryptWord,
        meta: {
            restricted: true
        }
    },
    {
        path: '/admin/nav',
        name: 'Navigation',
        component: Nav,
        meta: {
            restricted: true
        }
    },
    {
        path: '/lahonte',
        name: 'La honte',
        component: LaHonte,
    },
    {
        path: '/:Erreur404',
        name: 'Erreur 404',
        component: Erreur404,
    }
  ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.title = `Chasse au trésor | ${to.name}`

    //Check si besoin d'un mot de passe
    if (to.meta.restricted) { //page admin

        let psw = prompt('Mot de passe ?')
        if (psw === 'ChiasseOTrésor') { //NAV: PSW ADMIN
            next()
        } else {
            next({ name: 'La honte' })
        }

    } else if (to.meta.passwordRequired) { //page final

        let psw = prompt('Mot de passe ?')
        if (psw === '') { //NAV: PSW PUBLIC
            next()
        } else {
            next({ name: 'La Honte' })
        }
    } else { //autre
        next()
    }
})

export default router
