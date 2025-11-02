<template>
    <div id="presentation">
        <TitreSectionComp titre="Présentation" />
        <p>
            Bonjour, je m'appelle
            <span class="text-secondary">Nils Moreau--Thomas</span> et j'ai
            {{ age }} ans.<br />
            Développeur web passionné, je suis actuellement en diplôme
            d'ingénieur IMAC à l'ESIEE Paris.<br />
            Originaire de la région Nantaise, je m'intéresse particulièrement au
            développement web.<br />
            Je suis toujours prêt à relever de nouveaux défis et à travailler
            sur des projets innovants.
        </p>
        <a class="btn btn-secondary" href="./CV_Nils_Moreau--Thomas.pdf">
            Voir Mon CV
            <span class="material-symbols-outlined"> description </span>
        </a>

        <div id="grid">
            <div>
                <h2>Mes forces</h2>
                <ul>
                    <li>Organisé</li>
                    <li>Créatif</li>
                    <li>Déterminé</li>
                    <li>Curieux</li>
                </ul>
            </div>

            <div>
                <h2>&</h2>
            </div>

            <div>
                <h2>mes faiblesses</h2>
                <ul>
                    <li>Impatient</li>
                    <li>Acharné</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
#grid {
    display: grid;
    grid-template-columns: repeat(3, fit-content(100%));
    gap: var(--gap);
}

#grid > * > ul {
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--bg-light);
    padding: var(--padding);
    padding-left: calc(var(--padding) * 2);
    border-radius: var(--radius);
}
</style>

<script>
import TitreSectionComp from "../TitreSectionComp.vue";
import { ref } from "vue";

const age = ref(0);

const birthDate = new Date("2004-10-12");
const today = new Date();

age.value = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();

if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
) {
    age.value--;
}

export default {
    name: "PresentationComp",
    components: {
        TitreSectionComp,
    },
    setup() {
        return {
            age,
        };
    },
};
</script>
