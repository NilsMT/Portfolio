<template>
    <div id="realisations">
        <TitreSection titre="Réalisations" />

        <div v-for="(label, type) in realisationTypes" :key="type">
            <h2>{{ label }}</h2>

            <div class="real_cont">
                <Real
                    v-for="id in realisationsByCategory[type]"
                    :key="id"
                    :imgName="realisations[id].imgName"
                    :titre="realisations[id].name"
                    :desc="realisations[id].desc"
                    :destination="realisations[id].destination"
                    :isWip="realisations[id].isWip"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.real_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}

#final_real_cont {
    padding-top: var(--padding);
    margin-top: calc(var(--padding) * 2);
    border-top: solid 1px var(--text);
}
</style>

<script>
import TitreSection from "../TitreSection.vue";
import Real from "../Real.vue";
import { ref } from "vue";
import { realData } from "../../data/realisation";

const realisationTypes = realData.categories.names;

const realisations = ref({});

realisations.value = realData.list;

const realisationsByCategory = ref({});

realisationsByCategory.value = realData.categories.members;

export default {
    name: "Realisations",
    components: {
        TitreSection,
        Real,
    },
    setup() {
        return {
            realisationTypes,
            realisations,
            realisationsByCategory,
        };
    },
};
</script>
