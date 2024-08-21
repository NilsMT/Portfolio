<template>
    <div id="grid_chrono">
        <h2 id="annee">{{ annee }}</h2>
        <div id="trait"></div>
        <h2 id="titre">{{ titre }}</h2>
        <div id="cont">
            <div>{{ sous_titre }}</div>
            <div>
                <slot></slot>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
#grid_chrono {
    display: grid;
    grid-template-areas: 
    "a t" 
    "l c";
    grid-template-columns: min-content auto;
    gap: var(--gap);
}

#grid_chrono > * {
    display: flex;
    align-self: center;
    flex-direction: column;
    margin: 0px;
}

#annee {
    grid-area: a;

    display: flex;
    justify-self: center;

    border-radius: var(--radius);
    background-color: var(--bg-light);
    padding: calc(var(--padding) / 2);

    white-space: nowrap;
}

#titre {
    grid-area: t;
}

#trait {
    grid-area: l;
    background-color: var(--text);
    width: 5px;

    display: flex;
    align-self: normal;
    margin-left: calc(var(--text-size) * 2);
}

#cont {
    grid-area: c;
}

#cont > *:nth-child(1) {
    font-weight: 700 !important;
    font-size: 1.2em;
}

#cont > *:nth-child(2) {
    opacity: 0.75;
}
</style>

<script>
export default {
    name: 'ChronologieComp',
    props: {
        annee: {
            type: String,
            required: true,
        },
        titre: {
            type: String,
            required: true,
        },
        sous_titre: {
            type: String,
            required: true,
        }
    }
}
</script>