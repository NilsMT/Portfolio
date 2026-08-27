// replace <br> with " "
// replace <sup>ère</sup> with "ᵉʳᵉ"
// replace <sup>er</sup> with "ᵉʳ"
// replace <sup>ème</sup> with "ᵉ"

real = {
    /*LE JSON*/
};

Object.keys(real).forEach((k) => {
    console.log(`setup() {
        useHead({
            title: "NMT | ${real[k].name}",
            meta: [
                {
                    name: "description",
                    content: "${real[k].desc}",
                },

                {
                    property: "og:title",
                    content: "NMT | ${real[k].name}",
                },

                {
                    property: "og:description",
                    content: "${real[k].desc}",
                },

                {
                    property: "og:type",
                    content: "website",
                },

                {
                    property: "og:url",
                    content: "https://nilsmt.vercel.app${real[k].destination}",
                },
            ],
        });
    },`);
});
