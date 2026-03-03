<template>
    <div id="implication-sociale">
        <TitreSection titre="Implication sociale" />

        <p>
            Depuis 2019 je suis bénévole pour des animations de jeux vidéos à la
            médiathèque de Treillières : j'aide pour l'organisation logistique
            et l'encadrement des joueurs.
        </p>

        <p>
            Je suis en charge de diverses animations dans un serveur
            communautaire sur Discord de +1300 membres.<br />
            Par exemple
            <a target="_blank" href="https://chasse-au-tresor-2024.vercel.app/">
                cette chasse au trésor
            </a>
            que j'ai créée.
        </p>

        <p>
            Je suis aussi actif sur la communauté de Roblox, afin d'aider les
            nouveaux venus sur leurs projets.
        </p>
    </div>
</template>

<style scoped>
a:not(.btn) {
    color: var(--secondary);
}

a:not(.btn):hover {
    text-decoration: underline;
}
</style>

<script>
import TitreSection from "../TitreSection.vue";

export default {
    name: "Implication",
    components: {
        TitreSection,
    },
};
</script>
