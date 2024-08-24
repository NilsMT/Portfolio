<template>
    <div id="grille">
        <div id="img">
            <img src="../assets/img/Bienvenue/nils.png" alt="Photo de Nils Moreau--Thomas">
        </div>

        <div id="txt">
            <span id="mynameis">
                Je m'appelle
            </span>

            <span id="name">
                Nils Moreau--Thomas
            </span>

            <span id="dev">
                Et je suis un développeur web <span class="text-primary">full-stack</span>
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

#txt > span {
    text-align: left;
}

#name {

    font-family: "Merriweather Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 3rem;

    position: relative;
    top: -1rem;
}

#dev {
    font-size: 1.25rem;
}

#img {
    display: flex;
    justify-content: right;
    align-items: center;

    filter: grayscale(1) 
        drop-shadow(2px 0px 0px #fff)
        drop-shadow(-2px 0px 0px #fff)
        drop-shadow(0px 2px 0px #fff)
        drop-shadow(0px -2px 0px #fff);

    height: 60vh;
}

#img > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    
    border-radius: 1rem;
}
</style>

<script>
export default {
    name: 'BienvenuComp',
}
</script>