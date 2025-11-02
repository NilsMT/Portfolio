<template>
    <div id="grille">
        <div id="img">
            <img src="../assets/img/Bienvenue/nils.png" />
        </div>

        <div id="txt">
            <span id="mynameis"> Je m'appelle </span>

            <span id="name"> Nils Moreau--Thomas </span>

            <span id="dev">
                Et je suis un étudiant passionné par le
                <span class="text-primary">développement informatique</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
#grille {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;

    max-width: 100vw;

    padding-top: 10vh;
    padding-bottom: 10vh;
}

#txt {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;
    padding: 2rem;

    font-size: 2rem;
}

/* Texts */
#txt > span {
    text-align: left;
    font-size: 2vw;
}

#name {
    font-family: "Merriweather Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;

    font-size: 4vw;
    position: relative;
    top: -0.5rem;
}

#dev {
    font-size: 1.5vw;
}

#img {
    display: flex;
    justify-content: right;
    align-items: center;

    filter: grayscale(1) drop-shadow(2px 0px 0px #fff)
        drop-shadow(-2px 0px 0px #fff) drop-shadow(0px 2px 0px #fff)
        drop-shadow(0px -2px 0px #fff);

    height: 60vh;
}

#img > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

    border-radius: 1rem;
}

/* Responsiveness */
@media (max-width: 768px) {
    #grille {
        grid-template-columns: 1fr;
        text-align: center;
    }

    #txt > span {
        font-size: calc(var(--text-size) * 0.75);
    }

    #img {
        justify-content: center;
        height: auto;
        width: 50%;
        margin: 0 auto;
    }
}
</style>

<script>
export default {
    name: "BienvenuComp",
};
</script>
