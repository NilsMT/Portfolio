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
                Arch Research Central Hub est mon 2<sup>ème</sup> jeu sur la plateforme Roblox, créé en 2022 et développé seul.<br>
                C'est un jeu de type "Core Game" (Jeux de réacteur) où les joueurs doivent explorer un complexe scientifique,
                jouer des rôles comme s'ils étaient employés là-bas et maintenir le réacteur à une température stable.<br>
                Sinon, celui-ci explose et c'est la panique à bord !<br>

                <a target="_blank" class="btn btn-secondary" href="https://www.roblox.com/games/8871746612/Arch-Research-Central-Hub">
                    Lien vers le jeu
                    <span data-v-3a6ff9f5="" class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                J'ai commencé ce projet comme un frustration du manque d'organisation et d'optimisation de mon premier jeu (<router-link to="/ZRC">Z.R.C</router-link>).<br>
                J'ai donc décidé de créer un jeu plus structuré, plus organisé et plus optimisé, avec un système de contrôle du réacteur plus simple et complet.<br>
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai utilisé le moteur de jeu Roblox Studio, qui fonctionne sous le langage de programmation Lua, pour le créer.<br>
                J'ai passé beaucoup de temps à réfléchir à la conception du jeu, à son gameplay, à son univers et à communiquer les avancées.<br>
                J'ai utilisé Trello pour gérer les tâches et les idées.<br>
                Cependant, avec mes études le temps venait parfois à manqué et le développement s'est retrouvé ralenti plusieurs fois.<br>
            </p>
        </div>


        <div class="section" id="images">
            <TitreSectionComp titre="Quelques images" />

            <div id="cont">
                <ImgComp imgName="ARCH/labcheckpoint.png" desc="Point de contrôle du secteur des laboratoires" />

                <ImgComp imgName="ARCH/lab.png" desc="Caverne du secteur des laboratoires" />

                <ImgComp imgName="ARCH/waterstation.png" desc="Station d'épuration" />

                <ImgComp imgName="ARCH/annex.png" desc="Annexe de ventilation" />

                <ImgComp imgName="ARCH/reactor.png" desc='Le réacteur "Lumen Based Reactor"' />

                <ImgComp imgName="ARCH/icecave.png" desc="Caverne de glace" />

                <ImgComp imgName="ARCH/trello.png" desc="Le Trello  du projet" />
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