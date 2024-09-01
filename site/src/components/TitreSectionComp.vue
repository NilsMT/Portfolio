<template>
    <h1>
        <div class="dot">

        </div>
        <div>
            {{ titre }}
        </div>
    </h1>
</template>

<style scoped>
    h1 {
        padding: var(--padding);
        width: fit-content;

        display: flex;
        flex-direction: row;

        justify-content: left;
        align-items: center;

        gap: var(--gap);
    }

    .dot {
        width: 1.25rem;
        aspect-ratio: 1/1;
        border-radius: 100%;

        background-color: var(--primary);
        box-shadow: 0px 0px 1rem var(--primary);
    }
</style>

<script>
export default {
    name: 'TitreSectionComp',
    props: {
        titre: {
            type: String,
            required: true,
        },
    }
}
</script>