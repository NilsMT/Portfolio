<template>
    <div id="competences">
        <TitreSection titre="Compétences" />

        <h2>Langues</h2>

        <div class="skill_cont">
            <Skill imgName="lang/français.png" titre="Langue maternelle" />
            <Skill imgName="lang/english.png" titre="Niveau B2" />
            <Skill imgName="lang/español.png" titre="Notions" />
        </div>

        <h2>Langages informatiques</h2>

        <div class="skill_cont">
            <Skill imgName="prog_lang/html.png" titre="HTML" />
            <Skill imgName="prog_lang/css.png" titre="CSS" />
            <Skill imgName="prog_lang/js.png" titre="JavaScript" />
            <Skill imgName="prog_lang/ts.png" titre="TypeScript" />
            <Skill imgName="prog_lang/node.png" titre="Node.js" />
            <Skill imgName="prog_lang/vuejs.png" titre="Vue.js" />
            <Skill imgName="prog_lang/php.svg" titre="PHP" />
            <Skill imgName="prog_lang/react.svg" titre="React" />
            <Skill imgName="prog_lang/angular.png" titre="Angular" />
            <Skill imgName="prog_lang/brainfuck.png" titre="Brainfuck" />
            <Skill imgName="prog_lang/sqldev.png" titre="SQL" />
            <Skill imgName="prog_lang/mongodb.svg" titre="MongoDB" />
            <Skill imgName="prog_lang/py.png" titre="Python" />
            <Skill imgName="prog_lang/kt.png" titre="Kotlin" />
            <Skill imgName="prog_lang/lua.png" titre="Lua" />
            <Skill imgName="prog_lang/luau.png" titre="Luau" />
            <Skill imgName="prog_lang/csharp.png" titre="C#" />
            <Skill imgName="prog_lang/c++.png" titre="C++" />
            <Skill imgName="prog_lang/ocaml.png" titre="Ocaml" />
        </div>

        <h2>Outils & Logiciels</h2>

        <div class="skill_cont">
            <Skill imgName="tool/git.png" titre="Git" />
            <Skill imgName="tool/roblox_studio.png" titre="Roblox Studio" />
            <Skill imgName="tool/trello.png" titre="Trello" />
            <Skill imgName="tool/vscode.png" titre="VS Code" />
            <Skill imgName="tool/drawio.png" titre="draw.io" />
            <Skill imgName="tool/shotcut.png" titre="Shotcut" />
            <Skill imgName="tool/medibang.png" titre="Medibang Paint" />
            <Skill imgName="tool/sketch.webp" titre="Sony Sketch" />
            <Skill imgName="tool/google.png" titre="Suite Google" />
            <Skill imgName="tool/office.png" titre="Suite Office" />
            <Skill imgName="tool/overleaf.png" titre="Overleaf" />
            <Skill imgName="tool/android.png" titre="Android Studio" />
            <Skill imgName="tool/docker.webp" titre="Docker" />
            <Skill imgName="tool/wireshark.png" titre="Wireshark" />
            <Skill imgName="tool/figma.svg" titre="Figma" />
            <Skill imgName="tool/pypi.svg" titre="PyPI" />
            <Skill imgName="tool/godot.svg" titre="Godot" />
            <Skill imgName="tool/unreal.png" titre="Unreal Engine" />
            <Skill imgName="tool/blender.png" titre="Blender" />
            <Skill imgName="tool/unity.png" titre="Unity" />
            <Skill imgName="tool/vs.png" titre="Visual Studio" />
            <Skill imgName="tool/jetbrain.png" titre="Suite Jetbrains" />
            <Skill imgName="tool/hipaint.png" titre="HiPaint" />
            <Skill imgName="tool/glyphr.png" titre="Glyphr Studio" />
        </div>
    </div>
</template>

<style scoped>
.skill_cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
}
</style>

<script>
import TitreSection from "../TitreSection.vue";
import Skill from "../Skill.vue";

export default {
    name: "Competences",
    components: {
        TitreSection,
        Skill,
    },
};
</script>
