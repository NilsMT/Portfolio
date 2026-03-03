<template>
    <header>
        <div id="flex-container">
            <ThemeButton id="theme" />

            <slot></slot>
        </div>
    </header>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    left: 0;

    z-index: 2;

    padding: var(--padding);

    background-color: var(--bg);
    box-shadow: 0px 0px 20px #0005;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#flex-container {
    display: flex;
    flex-direction: row;

    overflow-x: auto;

    max-width: 100%;

    gap: var(--gap);
}
</style>

<script>
import ThemeButton from "./ThemeButton.vue";

export default {
    name: "Header",
    components: {
        ThemeButton,
    },
};
</script>
