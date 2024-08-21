<template>
    <div id="parcours-scolaire">
        <TitreSectionComp titre="Parcours scolaire" />

        <div id="chrono_cont">
            <ChronologieComp 
                annee="2025" 
                titre="BUT Informatique" 
                sous_titre="Parcours Conception, Développement et Validation d'Applications"
            >
                <p>
                    Le BUT m'a permis de confirmer mon orientation vers le développement web et continue de m'apprendre beaucoup sur le développement d'applications web et mobiles, l'architecture réseaux, et la sécurité informatique. <br>
                    Cette formation m'a également offert l'opportunité de découvrir le monde de l'entreprise grâce à un stage en 2<sup>ème</sup> année.
                </p>
            </ChronologieComp>

            <ChronologieComp 
                annee="2022" 
                titre="Bac Technologique STI2D" 
                sous_titre="Option SIN (Système d'Information et Numérique)"
            >
                <p>
                    Le Bac STI2D m'a initié aux bases de l'informatique, de l'électronique et de la programmation, confirmant mon intérêt pour le développement, initialement orienté vers la robotique.<br>
                    J'ai approfondi mon anglais en prenant l'option classe anglophone en 2<sup>nde</sup> et j'ai obtenu mon Bac avec mention assez bien.
                </p>
            </ChronologieComp>

            <ChronologieComp 
                annee="2019" 
                titre="Collège" 
                sous_titre="Option LCE (Langues et Cultures Étrangères)"
            >
                <p>
                    Au collège, j'ai découvert l'anglais et l'espagnol, développant un intérêt particulier pour l'anglais, renforcé par l'option LCE en 4<sup>ème</sup> et 3<sup>ème</sup>.
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
import TitreSectionComp from '../TitreSectionComp.vue'
import ChronologieComp from '../ChronologieComp.vue'

export default {
    name: 'ParcoursComp',
    components: {
        TitreSectionComp,
        ChronologieComp,
    },
}
</script>