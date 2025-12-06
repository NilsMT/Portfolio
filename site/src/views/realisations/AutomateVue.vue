<template>
    <div id="realisation">
        <HeaderComp>
            <router-link
                class="btn btn-normal"
                to="/#realisations"
                title="Accueil"
            >
                <span class="material-symbols-outlined"> home </span>
            </router-link>

            <a href="#à-propos" target="_self" class="btn btn-normal"
                >À propos du projet</a
            >
            <a href="#visuels" target="_self" class="btn btn-normal"
                >Quelques visuels</a
            >
        </HeaderComp>

        <div class="section" id="à-propos">
            <TitreSectionComp titre="À propos du projet" />

            <h2>Qu'est-ce que c'est ?</h2>

            <p>
                La simulation d'automate est, comme son nom l'indique, une
                simulation d'automate qui analyse une chaîne de caractères et
                l'accepte ou non.
                <a
                    target="_blank"
                    class="btn btn-secondary"
                    href="https://github.com/NilsMT/Automate"
                >
                    Lien vers le dépôt GitHub
                    <span class="material-symbols-outlined">open_in_new</span>
                </a>
            </p>

            <h2>Pourquoi l'ai-je fait ?</h2>

            <p>
                Ce projet était une implémentation de ce que l'ont avait vu sur
                papier, cela m'a permis de comprendre comment le
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
                    target="_blank"
                    >RegEX</a
                >
                fonctionne.
            </p>

            <h2>Comment l'ai-je réalisé ?</h2>

            <p>
                J'ai d'abord réalisé les automates sur un logiciel de
                diagrammes, et ensuite j'ai implémentée la "construction" d'un
                automate avec du code Kotlin.
            </p>
        </div>

        <div class="section" id="visuels">
            <TitreSectionComp titre="Quelques visuels" />

            <div id="cont">
                <ImgComp imgName="Automate/automate.png" desc="Le programme" />

                <ImgComp
                    imgName="Automate/exemple_diag.png"
                    desc="Exemple d'automate schématisé"
                />

                <ImgComp
                    imgName="Automate/exemple_code.png"
                    desc="Exemple d'automate implémenté"
                />

                <ImgComp
                    imgName="Automate/exemple_diag_complex.png"
                    desc="Exemple d'automate plus complexe schématisé"
                />
            </div>
        </div>

        <div class="section" id="accueil">
            <router-link
                class="btn btn-primary"
                to="/#realisations"
                title="Accueil"
            >
                Retour à l'accueil
                <span class="material-symbols-outlined"> home </span>
            </router-link>
        </div>

        <FooterComp></FooterComp>
    </div>
</template>

<style>
#accueil {
    display: flex;
    justify-content: center;
    padding-top: var(--padding);
}

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

#res {
    line-height: 1.5;

    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}
</style>

<script>
import { RouterLink } from "vue-router";

import HeaderComp from "../../components/HeaderComp.vue";
import FooterComp from "../../components/FooterComp.vue";
import TitreSectionComp from "../../components/TitreSectionComp.vue";

import ImgComp from "../../components/ImgComp.vue";
import VideoComp from "../../components/VideoComp.vue";

export default {
    components: {
        RouterLink,
        HeaderComp,
        FooterComp,
        TitreSectionComp,
        ImgComp,
        VideoComp,
    },
};
</script>
