<template>
    <div id="img_cont">
        <img :src="getImageUrl(imgName)" alt="" />
        <div>{{ desc }}</div>
    </div>
</template>

<style>
#img_cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap);

    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}

img {
    width: calc(100% - var(--padding) * 2);
    object-fit: contain;
    border-radius: var(--radius);
}
</style>

<script>
export default {
    name: "Img",

    props: {
        imgName: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },

    methods: {
        getImageUrl(name) {
            return new URL(
                `../assets/img/RealisationsDetails/${name}`,
                import.meta.url,
            ).href;
        },
    },
};
</script>
