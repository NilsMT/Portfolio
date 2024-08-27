<template>
    <div id="real">
        <img :src="'./assets/img/Realisations/'+imgName" id="img" :alt="'img_'+imgName" />

        <div id="content">
            <div id="titre">{{ titre }}</div>
            <div id="desc">{{ desc }}</div>
            <RouterLink class="btn btn-accent" :to="destination">
                Détails
                <span class="material-symbols-outlined">
                    open_in_new
                </span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
#real {
    width: 33%;
    aspect-ratio: 1/1;
    position: relative;
}

#real > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
}

#real:hover #content {
    opacity: 1;
}

/* Image */
#img {
    object-fit: cover;
}

/* Content box */
#content {
    width: calc(100% - var(--padding) * 2);
    height: calc(100% - var(--padding) * 2);

    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(5px);

    padding: var(--padding);
}

/* Theme */
:root.light #content {
    background-color: #0005;
}

:root.dark #content {
    background-color: #0005;
}

/* Content items*/
#titre {
    font-size: 1.5rem;
    font-weight: bold;
}

#desc {
    opacity: 0.75;
}

</style>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'RealComp',
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
            required: true,
        }
    }
}
</script>