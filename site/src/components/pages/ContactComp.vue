<template>
    <div id="contacts-et-liens">
        <TitreSectionComp titre="Contacts & liens" />

        <div id="contact_cont">
            <a
                class="btn btn-primary txt-selectable"
                href="mailto:nilsmoreauthomas@gmail.com"
            >
                <i class="fa-solid fa-envelope"></i>
                nilsmoreauthomas@gmail.com
            </a>

            <a class="btn btn-primary txt-selectable" href="tel:+33769437638">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
                +33 (0)7 69 43 76 38
            </a>
        </div>

        <p id="void"></p>

        <div id="contact_cont">
            <a class="btn btn-primary" href="https://github.com/NilsMT">
                <i class="fa-brands fa-github"></i>
                Mon Github
            </a>

            <a
                class="btn btn-primary"
                href="https://www.linkedin.com/in/nils-moreau-thomas-2b7a95259/"
            >
                <i class="fa-brands fa-linkedin"></i>
                Mon LinkedIn
            </a>

            <a class="btn btn-primary" href="./CV_Nils_Moreau--Thomas.pdf">
                <i class="fa-brands fa-linkedin"></i>
                Mon CV
            </a>
        </div>
    </div>
</template>

<style scoped>
#contact_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}

.txt-selectable {
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
}

#void {
    opacity: 0;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    margin: 0px;
}
</style>

<script>
import TitreSectionComp from "../TitreSectionComp.vue";

export default {
    name: "ContactComp",
    components: {
        TitreSectionComp,
    },
};
</script>
