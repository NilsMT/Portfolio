<template>
    <a
        id="real"
        :href="destination"
        :title="
            isExternal == true ? 'Voir dans un nouvel onglet' : 'Voir le projet'
        "
        :target="isExternal == true ? '_blank' : '_self'"
    >
        <img
            :src="'./assets/img/Realisations/' + imgName"
            id="img"
            :alt="'img_' + imgName"
        />

        <div id="content">
            <div id="titre">{{ titre }}</div>
            <div id="hidden_content">
                <div id="desc" v-html="desc"></div>
            </div>
        </div>
    </a>
</template>

<style scoped>
#real {
    width: 275px;
    aspect-ratio: 1/1.15;
    position: relative;

    background-color: var(--bg-light);
    border-radius: var(--radius);

    overflow: hidden;
}

#real > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
}

/* Image */
#img {
    object-fit: cover;
}

/* Content box */
#content {
    width: calc(100% - (var(--padding) / 2) * 2);
    height: calc(100% - (var(--padding) / 2) * 2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: var(--gap);

    text-align: center;

    padding: calc(var(--padding) / 2);
}

/* Theme */
:root.light #real:hover #content {
    background-color: #fff5;
}

:root.dark #real:hover #content {
    background-color: #0005;
}

/* Content items*/

#hidden_content {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap);

    height: 100%;
}

#titre {
    font-size: 1.5rem;
    font-weight: bold;

    padding: calc(var(--padding) / 2);
    background-color: var(--accent);
    border-radius: var(--radius);
}

#desc {
    text-shadow: 0 0 5px var(--opptext);
    opacity: 1;
    font-weight: bold;
    text-align: left;
    width: 100%;
    overflow-y: auto;
}

/* interaction */

#real:hover {
    z-index: 1;
    box-shadow: 0px 0px 20px var(--text);
}

#real:hover #img {
    transform: scale(1.2);
    filter: blur(4px);
}

#real:hover #hidden_content {
    opacity: 1;
}
</style>

<script>
import { RouterLink } from "vue-router";
import { computed } from "vue";

export default {
    name: "RealComp",
    components: {
        RouterLink,
    },
    props: {
        imgName: {
            type: String,
            required: true,
        },
        titre: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: false,
        },
    },

    setup(props) {
        const isExternal = computed(() =>
            props.destination?.startsWith("http"),
        );

        return { isExternal };
    },
};
</script>
