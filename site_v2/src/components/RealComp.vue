<template>
    <div id="real">
        <img :src="'./assets/img/Realisations/'+imgName" id="img" :alt="'img_'+imgName" />

        <div id="content">
            <div id="titre">{{ titre }}</div>
            <div id="desc" v-html="desc"></div>
            <RouterLink id="link" class="btn btn-accent" v-if="destination" :to="destination">
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
    width: 275px;
    aspect-ratio: 1/1;
    position: relative;

    background-color: var(--bg-light);
    border-radius: var(--radius);
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
    width: calc(100% - var(--padding) * 2);
    height: calc(100% - var(--padding) * 2);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap);

    text-align: center;
    
    backdrop-filter: blur(5px);
    

    padding: var(--padding);
}

/* Theme */
:root.light #content {
    background-color: #fff5;
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
    text-align: left;
}

/* interaction */

#real:not(:hover) #desc, #real:not(:hover) #link {
    opacity: 0;
}

#real:not(:hover) #content {
    backdrop-filter: blur(0.5px);
    background-color: transparent;
}

#real:not(:hover) #titre {
    text-shadow: 
    2px 0px 5px var(--opptext), 
    -2px 0px 5px var(--opptext),
    0px 2px  5px var(--opptext),
    0px -2px 5px var(--opptext);
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
            required: false,
        }
    }
}
</script>