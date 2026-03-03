<template>
    <div id="formation">
        <TitreSection titre="Formation" />

        <div id="chrono_cont">
            <Chronologie
                annee="2028"
                titre="Ingénieur IMAC"
                sous_titre="Image Multimédia Audiovisuel Communication"
            >
                <p>
                    Le cursus Ingénieur IMAC me permettra de continuer le
                    développement web tout en acquérant des compétences
                    créatives en audiovisuel, 3D, photographie, image,
                    multimédia.
                </p>
            </Chronologie>

            <Chronologie
                annee="2025"
                titre="BUT Informatique"
                sous_titre="Parcours Conception, Développement et Validation d'Applications"
            >
                <p>
                    Le BUT m'a permis de confirmer mon orientation vers le
                    développement web et m'a appris beaucoup sur le
                    développement d'applications web et mobiles, l'architecture
                    réseaux, et la sécurité informatique. <br />
                    Cette formation m'a également offert l'opportunité de
                    découvrir le monde de l'entreprise grâce à 2 stages.
                </p>
            </Chronologie>

            <Chronologie
                annee="2022"
                titre="Bac Technologique STI2D"
                sous_titre="Option SIN (Système d'Information et Numérique)"
            >
                <p>
                    Le Bac STI2D m'a initié aux bases de l'informatique, de
                    l'électronique et de la programmation, confirmant mon
                    intérêt pour le développement.<br />
                    J'ai approfondi mon anglais en prenant l'option classe
                    anglophone en 2<sup>nde</sup> et j'ai obtenu mon Bac avec
                    mention assez bien.
                </p>
            </Chronologie>

            <Chronologie
                annee="2019"
                titre="Collège"
                sous_titre="Option LCE (Langues et Cultures Étrangères)"
                :last="true"
            >
                <p>
                    Au collège, j'ai découvert l'anglais et l'espagnol. J'ai
                    développé un intérêt particulier pour l'anglais, renforcé
                    par l'option LCE en 4<sup>ème</sup> et 3<sup>ème</sup>.
                </p>
            </Chronologie>
        </div>
    </div>
</template>

<style scoped>
#chrono_cont {
    gap: var(--gap);
    display: flex;
    flex-direction: column;
}
</style>

<script>
import TitreSection from "../TitreSection.vue";
import Chronologie from "../Chronologie.vue";

export default {
    name: "Formation",
    components: {
        TitreSection,
        Chronologie,
    },
};
</script>
