<template>
    <div id="competences">
        <TitreSection titre="Compétences" />

        <div v-for="(label, type) in skillTypes" :key="type">
            <h2>{{ label }}</h2>

            <div class="skill_cont">
                <Skill
                    v-for="id in skillsByCategory[type]"
                    :key="id"
                    :imgName="skills[id].imgName"
                    :titre="skills[id].titre"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}
</style>

<script>
import TitreSection from "../TitreSection.vue";
import Skill from "../Skill.vue";
import { ref } from "vue";
import skillData from "../../data/skills";

const skillTypes = skillData.categories.names;

const skills = ref({});
skills.value = skillData.list;

const skillsByCategory = ref({});
skillsByCategory.value = skillData.categories.members;

export default {
    name: "Skills",
    components: {
        TitreSection,
        Skill,
    },
    setup() {
        return {
            skillTypes,
            skills,
            skillsByCategory,
        };
    },
};
</script>
