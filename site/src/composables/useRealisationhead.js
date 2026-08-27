import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";
import { realData } from "../data/realisation";

export function useRealisationHead() {
    const route = useRoute();

    const projectKey = route.path.substring(1);
    const project = realData.list[projectKey];

    console.log(projectKey);
    console.log(project);

    if (!project) {
        return;
    }

    const description = project.desc
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/<sup>ère<\/sup>/gi, "ᵉʳᵉ")
        .replace(/<sup>er<\/sup>/gi, "ᵉʳ")
        .replace(/<sup>ème<\/sup>/gi, "ᵉ");

    useHead({
        title: `NMT | ${project.name}`,

        meta: [
            {
                name: "description",
                content: description,
            },
            {
                property: "og:title",
                content: `NMT | ${project.name}`,
            },
            {
                property: "og:description",
                content: description,
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:url",
                content: `https://nilsmt.vercel.app${project.destination}`,
            },
        ],
    });
}
