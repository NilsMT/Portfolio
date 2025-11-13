<template>
    <div id="parcours-scolaire">
        <TitreSectionComp titre="Parcours scolaire" />

        <div id="chrono_cont">
            <ChronologieComp
                annee="2028"
                titre="Ingénieur IMAC"
                sous_titre="Image Multimédia Audiovisuel Communication"
            >
                <p>
                    Le diplôme d'ingénieur IMAC m'a permis de continuer le
                    développement web tout en acquérant des compétences
                    créatives en audiovisuel, 3D, photographie, image,
                    multimédia. <br />
                    Ce diplôme me permet d'exprimer ma créativité tout en
                    préparant un diplôme d'ingénieur<br />
                    (avec également le TOEIC et la certification Voltaire).
                </p>
            </ChronologieComp>

            <ChronologieComp
                annee="2025"
                titre="BUT Informatique"
                sous_titre="Parcours Conception, Développement et Validation d'Applications"
            >
                <p>
                    Le BUT m'a permis de confirmer mon orientation vers le
                    développement web et continue de m'apprendre beaucoup sur le
                    développement d'applications web et mobiles, l'architecture
                    réseaux, et la sécurité informatique. <br />
                    Cette formation m'a également offert l'opportunité de
                    découvrir le monde de l'entreprise grâce à un stage en 2
                    <sup>ème</sup> année.
                </p>
            </ChronologieComp>

            <ChronologieComp
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
            </ChronologieComp>

            <ChronologieComp
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
            </ChronologieComp>
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
import TitreSectionComp from "../TitreSectionComp.vue";
import ChronologieComp from "../ChronologieComp.vue";

export default {
    name: "ParcoursComp",
    components: {
        TitreSectionComp,
        ChronologieComp,
    },
};
</script>
