<template>
    <div id="presentation">
        <TitreSectionComp titre="Présentation" />
        <p>
            Bonjour, je m'appelle <span class="text-secondary">Nils Moreau--Thomas</span>.<br>
            Développeur web full-stack passionné, j'étudie actuellement en BUT Informatique à l'Université de Nantes.<br>
            Originaire du Nord de Nantes (Loire-Atlantique), je m'intéresse particulièrement au développement web et mobile.<br>
            Je suis toujours prêt à relever de nouveaux défis et à travailler sur des projets innovants.
        </p>
        <a class="btn btn-secondary" href="./CV_Nils_Moreau--Thomas.pdf">Voir Mon CV</a>
    </div>
</template>

<script>
import TitreSectionComp from '../TitreSectionComp.vue'
import { ref } from 'vue'

const age = ref(0)

const birthDate = new Date('2004-10-12');
const today = new Date();

age.value = today.getFullYear() - birthDate.getFullYear()
const monthDifference = today.getMonth() - birthDate.getMonth()

if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age.value--
}

export default {
    name: 'PresentationComp',
    components: {
        TitreSectionComp
    },
    setup() {
        return {
            age
        }
    }
}
</script>