<template>
    <div id="contacts-et-liens">
        <TitreSection titre="Contacts & liens" />

        <div id="contact_cont">
            <a
                class="btn btn-primary txt-selectable"
                href="mailto:nilsmoreauthomas@gmail.com"
            >
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                nilsmoreauthomas@gmail.com
            </a>

            <a class="btn btn-primary txt-selectable" href="tel:+33769437638">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
                +33 (0)7 69 43 76 38
            </a>
        </div>

        <p id="void"></p>

        <div id="contact_cont">
            <a
                class="btn btn-primary"
                target="_blank"
                title="Nouvel onglet - Github | NilsMT"
                href="https://github.com/NilsMT"
            >
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                Github
            </a>

            <a
                class="btn btn-primary"
                target="_blank"
                title="Nouvel onglet - LinkedIn | Nils Moreau-Thomas"
                href="https://www.linkedin.com/in/nils-moreau-thomas-2b7a95259/"
            >
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                LinkedIn
            </a>

            <a
                class="btn btn-primary"
                target="_blank"
                title="Nouvel onglet - Itch.io | NilsMT"
                href="https://nilsmt.itch.io/"
            >
                <i class="fa-brands fa-itch-io" aria-hidden="true"></i>
                Itch.io
            </a>

            <a
                class="btn btn-primary"
                target="_blank"
                title="Voir mon CV"
                :href="getCVFr()"
            >
                <span class="material-symbols-outlined" aria-hidden="true">
                    description
                </span>
                CV (Fr)
            </a>

            <a
                class="btn btn-primary"
                target="_blank"
                title="See My CV (English Version)"
                :href="getCVEn()"
                hreflang="en"
                lang="en"
            >
                <span class="material-symbols-outlined" aria-hidden="true">
                    description
                </span>
                CV (En)
            </a>

            <a
                class="btn btn-primary"
                target="_blank"
                title="Voir mon CV (Version Belge)"
                :href="getCVBe()"
                hreflang="be"
                lang="be"
            >
                <span class="material-symbols-outlined" aria-hidden="true">
                    description
                </span>
                CV (Be)
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
import TitreSection from "../TitreSection.vue";

export default {
    name: "Contact",
    components: {
        TitreSection,
    },
    methods: {
        getCVFr() {
            return new URL(
                `../../assets/docs/Fr_CV_Nils_Moreau--Thomas.pdf`,
                import.meta.url,
            ).href;
        },
        getCVBe() {
            return new URL(
                `../../assets/docs/Be_CV_Nils_Moreau--Thomas.pdf`,
                import.meta.url,
            ).href;
        },
        getCVEn() {
            return new URL(
                `../../assets/docs/En_CV_Nils_Moreau--Thomas.pdf`,
                import.meta.url,
            ).href;
        },
    },
};
</script>
