<template>
    <div id="implication-sociale">
        <TitreSectionComp titre="Implication sociale" />

        <p>
            Depuis 2019 je suis bénévole pour des animations de jeux vidéos à la médiathèque de Treillières :
            j'aide pour l'organisation logistique et l'encadrement des joueurs.
        </p>

        <p>
            Je suis en charge de diverses animations dans un serveur communautaire sur Discord de +1300 membres.<br>
            Par exemple 
            <a target="_blank" href="https://chasse-au-tresor-2024.vercel.app/">
                cette chasse au trésor
            </a>
             que j'ai créée.
        </p>

        <p>
            Je suis aussi actif sur la communauté de Roblox, afin d'aider les nouveaux venus sur leurs projets.
        </p>

        <p>
            J'ai joué dans une comédie musicale au lycée, nommée Starmania.<br>
            <a target="_blank" class="btn btn-secondary" href="https://stfelixlasalle.fr/actualite/20-jeunes-talents-revisitent-la-comedie-musicale-starmania-2022-les-etoiles-noires">
                Plus d'informations
            </a>
        </p>
    </div>
</template>

<style scoped>
p {
    line-height: 1.5;
    background-color: var(--bg-light);
    padding: var(--padding);
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
import TitreSectionComp from '../TitreSectionComp.vue'

export default {
    name: 'ImplicationComp',
    components: {
        TitreSectionComp
    },
}
</script>