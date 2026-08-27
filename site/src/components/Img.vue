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
const images = import.meta.glob("../assets/img/RealisationsDetails/**/*", {
    eager: true,
    query: "?url",
    import: "default",
});

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
            const path = `../assets/img/RealisationsDetails/${name}`;

            const image = images[path];

            if (!image) {
                console.error("IMAGE NOT FOUND:", name);
                return `/img/missingimage.jpg`;
            }

            return image;
        },
    },
};
</script>
