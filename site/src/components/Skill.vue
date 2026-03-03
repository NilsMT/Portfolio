<template>
    <div id="skill">
        <div id="titre">
            {{ titre }}
        </div>
        <img :src="getImageUrl(imgName)" id="img" alt="" />
    </div>
</template>

<style scoped>
#skill {
    width: 100px;
    aspect-ratio: 1/1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: var(--bg-light);
    border-radius: var(--radius);
    padding: var(--padding);
}

#img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
}

#titre {
    padding: 5px;
    text-align: center;
}
</style>

<script>
export default {
    name: "Skill",
    props: {
        imgName: {
            type: String,
            required: true,
        },
        titre: {
            type: String,
            required: true,
        },
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/Skills/${name}`, import.meta.url)
                .href;
        },
    },
};
</script>
