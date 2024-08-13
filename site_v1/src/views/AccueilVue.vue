<template>
    <div id="contact-info" :contactDisplayed="contactShowed">

        <div id="contact-cont">
            <a class="btn btn-normal" href="mailto:nilsmoreauthomas@gmail.com">
                <span class="material-symbols-outlined">
                    mail
                </span>
                nilsmoreauthomas@gmail.com
            </a>

            <a class="btn btn-normal"href="tel:+33769437638">
                <span class="material-symbols-outlined">
                    call
                </span>
                +33 (0)7 69 43 76 38
            </a>

            <button class="btn btn-normal" @click="contactShowed = false">
                Fermer
                <span class="material-symbols-outlined">
                    cancel
                </span>
            </button>
        </div>
    </div>
    <div id="grille_cont" :contactDisplayed="contactShowed">
        <div id="grille">
            <div id="titre">
                <em>Bienvenue sur mon portfolio</em>
            </div>

            <RouterLink to="/presentation" class="btn btn-secondary" id="presentation">
                Qui suis-je ?
            </RouterLink>

            <RouterLink to="/competences" class="btn btn-accent" id="competences">
                Mes compétences 
            </RouterLink>

            <RouterLink to="/realisations" class="btn btn-primary" id="realisations">
                Mes réalisations 
            </RouterLink>

            <RouterLink to="/passions" class="btn btn-primary" id="passions">
                Mes passions 
            </RouterLink>

            <RouterLink to="/avenir" class="btn btn-secondary" id="avenir">
                Mon avenir 
            </RouterLink>

            <div id="contact" @click="contactShowed = true" class="btn btn-primary">
                Me contacter
            </div>

            <div class="material-symbols-outlined btn btn-accent" id="theme" @click="themeStore.toggleTheme">
                    {{ themeStore.isDarkMode ? 'dark_mode' : 'light_mode' }}
            </div>
        </div>
    </div>  
</template>

<style>

/* contact */

#contact-info {
    position: absolute;
    scale: 0;

    width: 100%;
    height: 100%;

    backdrop-filter: blur(0px);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
}

#contact-info[contactDisplayed=true] {
    display: flex;
    scale: 100%;
}

#contact-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;

    gap: var(--gap);
}

#contact-cont > * {
    box-shadow: 0px 0px 10px 2px black;
}

/* grille */

#grille_cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    filter: blur(0px);
}

#grille_cont[contactDisplayed=true] {
    filter: blur(5px);
}

#grille {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: var(--gap);

    width: 40%;
    aspect-ratio: 1 / 1;

    grid-template-areas: 
    "t t t t t t t"
    ". pr pr pr pr . ."
    ". . s s s r r"
    "pa pa s s s r r"
    "pa pa s s s . ."
    ". . a a a a ."
    ". th th th c c c";
}

#grille > * {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-size: 1.5rem;
}

/* disposition */

#titre {
    grid-area: t;
}

#presentation {
    grid-area: pr;
}

#competences {
    grid-area: s;
}

#realisations {
    grid-area: r;
}

#passions {
    grid-area: pa;
}

#avenir {
    grid-area: a;
}

#theme {
    grid-area: th;

    font-size: 2rem;
}

#contact {
    grid-area: c;
}

</style>

<script>
import { themeStore } from '../assets/js/themeStore.js';
import { ref } from 'vue';

const contactShowed = ref(false);

export default {
    setup() {
        return {
            themeStore,
            contactShowed
        }
    },
}
</script>