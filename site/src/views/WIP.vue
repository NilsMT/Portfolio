<template>
    <div id="cont">
        <div id="code">
            <img src="../assets/img/WIP/road-barrier.webp" />
        </div>

        <div id="text">La page est en cours de construction</div>
        <router-link class="btn btn-normal" :to="fallbackRoute">
            Retour à l'accueil
            <span class="material-symbols-outlined"> home </span>
        </router-link>

        <ThemeButton id="theme" />
    </div>

    <Footer />
</template>

<style scoped>
#cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: var(--gap);
    color: var(--text);
}

#code {
    font-size: 10rem;
    margin: 0px;
    padding: var(--padding);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

#code > img {
    width: 9rem;
    aspect-ratio: 1 / 1;
}
</style>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer,
        ThemeButton,
    },
    data() {
        return {
            fallbackRoute: "/",
        };
    },
    mounted() {
        const params = new URLSearchParams(window.location.search);
        const fallback = params.get("fallback");

        if (fallback) {
            this.fallbackRoute = fallback;
            window.history.replaceState(
                {},
                document.title,
                window.location.pathname,
            );
        }
    },
};
</script>
