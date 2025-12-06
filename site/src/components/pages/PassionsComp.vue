<template>
    <div id="passions">
        <TitreSectionComp titre="Passions" />

        <h2>Les jeux vidéos</h2>

        <p>
            J'adore les jeux vidéos, en particulier les Open-world (exploration
            de monde ouvert), les Sandbox (bac à sable) et les FPS (jeux de tir
            à la 1ère personne).<br />
            J'y joue souvent et cela me permet d'entrainer ma réactivité, ma
            créativité et ma compréhension de différents univers.
        </p>

        <p>
            J'aime énormément l'univers et les graphismes de l'Open-world
            Genshin Impact.<br />
            L'histoire autour du monde de Genshin Impact est très prenante et
            bien développée.<br />
            Les environnements sont magnifiques et pleins d'histoires.<br />
            <img id="genshin" src="../../assets/img/Passions/genshin.png" />
        </p>

        <p>
            Mais mon jeu favori reste Outer Wild.<br />
            Dans ce jeu, nous somme bloqué dans une boucle temporelle et nous
            explorons l'espace dans le but de satisfaire notre curiosité.<br />
            J'adore le fait d'être libre de choisir ce que je fais, et le fait
            de, factuellement, pouvoir finir le jeu en une boucle, mais il nous
            manque le savoir.<br />"30 heures pour finir le jeu en 22 minutes."
            <img id="outerwild" src="../../assets/img/Passions/outerwild.png" />
        </p>

        <p>
            Je suis aussi friand des jeux sandbox, en particulier Roblox et
            Minecraft.<br />
            Parce qu'ils proposent une grande variété de modes de jeux et de
            possibilités de création.
        </p>

        <h2>La création</h2>

        <p>
            J'aime beaucoup le pouvoir de créer.<br />
            J'éprouve un sentiment d'accomplissement lorsque je regarde le
            résultat final de mes productions.<br />
            C'est gratifiant de voir tous mes efforts d'apprentissages
            récompensés, et c'est pour cela que j'écris, je dessine, je
            programme, je construis et je modélise.
            <img id="creation" src="../../assets/img/Passions/dessin.png" />
        </p>

        <h2>La culture japonaise</h2>

        <p>
            Je suis un très grand fan de culture japonaise et j'aime ses styles
            graphiques uniques.<br />
            Je possède plus d'une centaine de mangas et je regarde beaucoup
            d'animes (séries et dessins animés japonais).
        </p>

        <p>
            La culture japonaise m'a aussi fait découvrir l'univers des
            conventions.<br />
            Ce sont des événements où des fans de culture japonaise se
            rassemblent.<br />
            Certains se déguisent et tout le monde s'amuse.
        </p>

        <p>
            Et en découvrant l'univers des conventions, j'ai découvert le
            cosplay. C'est un loisir qui consiste à se déguiser en personnage de
            fiction.<br />
            J'ai moi-même réalisé quelques cosplays, comme par exemple Danny de
            l'anime
            <a href="https://www.nautiljon.com/animes/satsuriku+no+tenshi.html"
                >Angels of death</a
            >
            (à gauche) et un soldat "MTF" de
            <a href="https://fr.wikipedia.org/wiki/Fondation_SCP"
                >la Fondation SCP</a
            >
            (à droite).<br />
            <img src="../../assets/img/Passions/cosplay.png" />
        </p>

        <h2>Les LEGO®</h2>

        <p>
            Comme j'aime créer, les Legos sont un moyen parfait pour exprimer
            les idées que j'ai en tête et leur donner vie.<br />
            <img src="../../assets/img/Passions/lego.jpg" />
        </p>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    object-fit: contain;
    border-radius: var(--radius);
}

#genshin {
    border: 10px solid var(--secondary);
    width: calc(100% - (10px * 2));
}

#creation {
    border: 10px solid var(--primary);
    width: calc(100% - (10px * 2));
}
</style>

<script>
import TitreSectionComp from "../TitreSectionComp.vue";

export default {
    name: "PassionsComp",
    components: {
        TitreSectionComp,
    },
};
</script>
