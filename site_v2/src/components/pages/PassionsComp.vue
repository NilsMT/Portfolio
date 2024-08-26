<template>
    <div id="passions">
        <TitreSectionComp titre="Passions" />

        <h2>Les jeux-vidéos</h2>

        <p>
            J'adore les jeux vidéos, en particulier les open-world (exploration de monde ouvert), les sandbox (bac à sable) 
            et les FPS (jeux de tir à la 1ère personne).<br>
            J'y joue souvent et cela me permet d'entrainer ma réactivité, ma créativité et ma compréhension de différents univers.
        </p>

        <p>
            J'aime énormément l'univers et les graphismes de l'Open-world Genshin Impact.<br>
            <img id="genshin" src="../../assets/img/Passions/genshin.png"/>
        </p>

        <p>
            Je suis aussi friand des jeux sandbox, en particulier Roblox et Minecraft.<br>
            Parce qu'ils proposent une grande variété de modes de jeux et de possibilités de création.
        </p>

        <h2>La création</h2>

        <p>
            J'aime beaucoup le pouvoir de créer.<br>
            J'éprouve un sentiment d'accomplissement lorsque je regarde le résultat final de mes productions.<br>
            C'est gratifiant de voir tous mes efforts d'apprentissages récompensés, 
            et c'est pour cela que j'écris, je dessine, je programme, je construis et je modélise.
            <img id="creation" src="../../assets/img/Passions/dessin.png"/>
        </p>

        <h2>La culture japonaise</h2>

        <p>
            Je suis un très grand fan de culture japonaise car son style graphique est unique.<br>
            Je possède plus d'une centaine de mangas et je regarde beaucoup d'animes (séries et dessins animés japonais).
        </p>

        <p>
            La culture japonaise m'a aussi fait découvrir l'univers des conventions.<br>
            Ce sont des événements où des fans de culture japonaise se rassemblent.<br>
            Certains se déguisent et tout le monde s'amuse.
        </p>

        <p>
            Et en découvrant l'univers des conventions, j'ai découvert le cosplay. C'est un loisir qui consiste à se déguiser en personnage de fiction.<br>
            J'ai moi-même réalisé quelques cosplays, comme par exemple un soldat "MTF" de la Fondation SCP.<br>
            <img src="../../assets/img/Passions/cosplay.jpg"/>
        </p>

        <h2>Les LEGO®</h2>

        <p>
            Comme j'aime créer, les Legos sont un moyen parfait pour exprimer les idées que j'ai en tête et leur donner vie.<br>
            <img src="../../assets/img/Passions/lego.jpg"/>
        </p>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    object-fit: contain;
    border-radius: var(--radius);
}

p {
    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}

#genshin {
    border: 10px solid var(--secondary);
    width: calc(100% - (10px * 2) );
}

#creation {
    border: 10px solid var(--primary);
    width: calc(100% - (10px * 2) );
}
</style>

<script>
import TitreSectionComp from '../TitreSectionComp.vue'

export default {
    name: 'PassionsComp',
    components: {
        TitreSectionComp
    },
}
</script>