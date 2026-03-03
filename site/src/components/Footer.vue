<template>
    <footer>
        <div>
            Réalisé avec
            <span class="material-symbols-outlined"> favorite </span>
            par Nils Moreau--Thomas
        </div>
        <div @click="debugStore.toggleDebug" id="debug">
            <span
                v-if="debugStore.isDebugMode"
                class="material-symbols-outlined"
            >
                bug_report
            </span>

            <span v-else> | </span>
        </div>
        <div>© {{ year }} NilsMT, Tous droits réservés</div>
    </footer>
</template>

<style scoped>
footer {
    z-index: 2;
    padding: var(--padding);

    background-color: var(--bg);
    box-shadow: 0px 0px 20px #0005;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: var(--gap);
}

#debug {
    cursor: help;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

<script>
import { ref } from "vue";
import { debugStore } from "../assets/js/debugStore.js";

const year = ref(0);
year.value = new Date().getFullYear();

export default {
    name: "FooterComp",
    setup() {
        return {
            year,
            debugStore,
        };
    },
};
</script>
