<template>
    <footer>
        <div>
            Réalisé avec 
            <span class="material-symbols-outlined">
                favorite
            </span>
            par Nils Moreau--Thomas
        </div>
        <div>|</div>
        <div>
            © {{ year }} NilsMT, Tous droits réservés
        </div>
    </footer>
</template>

<style>
footer {
    z-index: 1;
    padding: var(--padding);

    background-color: var(--bg);
    box-shadow: 0px 0px 1rem 1rem #0005;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: var(--gap);
}
</style>

<script>
import { ref } from 'vue'

const year = ref(0)
year.value = new Date().getFullYear()

export default {
    name: 'FooterComp',
    setup() {   
        return {
            year
        }
    },
}
</script>