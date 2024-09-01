<template>
    <div id="avenir">
        <TitreSectionComp titre="Avenir" />

        <h2>Quels métiers ?</h2>

        <div id="metiers">
            J'envisage de travailler en tant que :
            <ul>
                <li>Développeur Web Front-End</li>
                <li>Développeur Web Back-End</li>
                <li>Développeur Web Full-Stack</li>
                <li>Développeur de jeux vidéo</li>
                <li>Intégrateur Web</li>
                <li>Designer Web</li>
            </ul>
        </div>

        <h2>Quels entreprises ?</h2>

        <p>
            De la startup au grand groupe, en France ou à l'étranger, je n'ai aucune préférence.
        </p>

        <h2>Projet de vie</h2>

        <p>
            À l'avenir, je me vois évoluer en tant que développeur, avec une préférence pour le développement Web.<br>
            Je suis toutefois ouvert à des opportunités dans d'autres secteurs.<br>
            Je me projette avec une famille et un revenu me permettant de vivre confortablement.<br>
            Je souhaite occuper un poste où je pourrai utiliser divers logiciels et langages.
        </p>

    </div>
</template>

<style scoped>
#metiers {
    line-height: 1.5;

    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}
</style>

<script>
import TitreSectionComp from '../TitreSectionComp.vue'

export default {
    name: 'AvenirComp',
    components: {
        TitreSectionComp
    },
}
</script>