<template>
    <div id="realisation">
        <HeaderComp>
            <router-link class="btn btn-normal" to="/" title="Accueil">
                <span class="material-symbols-outlined">
                    home
                </span>
            </router-link>

            <a href="#à-propos" target="_self" class="btn btn-normal">À propos du projet</a>
            <a href="#images" target="_self" class="btn btn-normal">Quelques images</a>
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                Zenium Research Center est mon 1<sup>er</sup> jeu sur la plateforme Roblox, créé en 2019.<br>
                C'est un jeu de type "Core Game" (Jeux de réacteur) où les joueurs doivent explorer un complexe scientifique,
                jouer des rôles comme s'ils étaient employés là-bas et maintenir le réacteur à une température stable.<br>
                Sinon, celui-ci explose et c'est la panique à bord !<br>

                <a target="_blank" class="btn btn-secondary" href="https://www.roblox.com/games/7096759234/V2-Zenium-Research-Center">
                    Lien vers le jeu
                    <span data-v-3a6ff9f5="" class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet après avoir joué au jeu 
                <a target="_blank" href="https://www.roblox.com/games/3039795291/QS-Energy-Research-Facility">Q.S.E.R.F</a>,
                qui est un "Core Game". Cela m'a donné envie de créer mon propre jeu de réacteur.<br>
                Je sentais que j'étais capable de le faire et que j'avais les compétences nécessaires.<br>
                Deux personnes rencontrées en ligne m'ont aidé à le réaliser, et je les en remercie.<br>
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai utilisé le moteur de jeu Roblox Studio, qui fonctionne sous le langage de programmation Lua, pour le créer.<br>
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu, à son gameplay, à son univers et à communiquer les avancées.<br>
                Nous avons utilisé Trello pour gérer les tâches et les idées.<br>
                Cependant, nous n'étions pas nombreux pour le réaliser, donc j'ai dû faire beaucoup de choses seul.<br>
            </p>
        </div>


        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp imgName="ZRC/checkpoint.png" desc="Un point de contrôle" />

                <ImgComp imgName="ZRC/reactor.png" desc='Le réacteur "Zenium Reflexion Reactor Core"' />

                <ImgComp imgName="ZRC/outside.png" desc="L'extérieur du complexe scientifique" />

                <ImgComp imgName="ZRC/reactroom.png" desc="Salle de contrôle du réacteur" />

                <ImgComp imgName="ZRC/intersection.png" desc="Une intersection entres plusieurs secteurs" />

                <ImgComp imgName="ZRC/coolant.png" desc="Salle de stockage d'azote liquide" />

                <ImgComp imgName="ZRC/trello.png" desc="Le Trello  du projet" />
            </div>
        </div>

        <FooterComp></FooterComp>
    </div>
</template>

<style>
#realisation {
    gap: 2rem;
    display: flex;
    flex-direction: column;
}

#cont {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
}

img {
    width: 100%;
    object-fit: contain;
    border-radius: var(--radius);
}

a:not(.btn) {
    color: var(--secondary);
}

a:not(.btn):hover {
    text-decoration: underline;
}
</style>

<script>
import { RouterLink } from 'vue-router'

import HeaderComp from '../../components/HeaderComp.vue'
import FooterComp from '../../components/FooterComp.vue'
import TitreSectionComp from '../../components/TitreSectionComp.vue'

import ImgComp from '../../components/ImgComp.vue'

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp
    }
}
</script>