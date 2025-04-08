<template>
    <div id="competences">
        <TitreSectionComp titre="Compétences" />

        <h2>Langues</h2>

        <div class="skill_cont">
            <SkillComp imgName="lang/français.png" titre="Langue maternelle"/>
            <SkillComp imgName="lang/english.png" titre="Niveau B2"/>
            <SkillComp imgName="lang/español.png" titre="Notions"/>
        </div>

        <h2>Langages informatiques</h2>

        <div class="skill_cont">
            <SkillComp imgName="prog_lang/html.png" titre="HTML"/>
            <SkillComp imgName="prog_lang/css.png" titre="CSS"/>
            <SkillComp imgName="prog_lang/js.png" titre="JavaScript"/>
            <SkillComp imgName="prog_lang/node.png" titre="Node.js"/>
            <SkillComp imgName="prog_lang/vuejs.png" titre="Vue.js"/>
            <SkillComp imgName="prog_lang/brainfuck.png" titre="Brainfuck"/>
            <SkillComp imgName="prog_lang/sqldev.png" titre="SQL"/>
            <SkillComp imgName="prog_lang/py.png" titre="Python"/>
            <SkillComp imgName="prog_lang/kt.png" titre="Kotlin"/>
            <SkillComp imgName="prog_lang/lua.png" titre="Lua"/>
            <SkillComp imgName="prog_lang/latex.png" titre="LaTeX"/>
            <SkillComp imgName="prog_lang/bash.png" titre="Bash"/>
            <SkillComp imgName="prog_lang/mongodb.svg" titre="MongoDB"/>
            <SkillComp imgName="prog_lang/php.svg" titre="PHP"/>
            <SkillComp imgName="prog_lang/react.svg" titre="React"/>
            <SkillComp imgName="prog_lang/csharp.png" titre="C#"/>
            <SkillComp imgName="prog_lang/c++.png" titre="C++"/>
            <SkillComp imgName="prog_lang/ocaml.png" titre="Ocaml"/>
        </div>

        <h2>Outils & Logiciels</h2>

        <div class="skill_cont">
            <SkillComp imgName="tool/git.png" titre="Git"/>
            <SkillComp imgName="tool/roblox_studio.png" titre="Roblox Studio"/>
            <SkillComp imgName="tool/trello.png" titre="Trello"/>
            <SkillComp imgName="tool/vscode.png" titre="VS Code"/>
            <SkillComp imgName="tool/drawio.png" titre="draw.io"/>
            <SkillComp imgName="tool/shotcut.png" titre="Shotcut"/>
            <SkillComp imgName="tool/medibang.png" titre="Medibang Paint"/>
            <SkillComp imgName="tool/sketch.webp" titre="Sony Sketch"/>
            <SkillComp imgName="tool/google.png" titre="Suite Google"/>
            <SkillComp imgName="tool/office.png" titre="Suite Office"/>
            <SkillComp imgName="tool/overleaf.png" titre="Overleaf"/>
            <SkillComp imgName="tool/android.png" titre="Android Studio"/>
            <SkillComp imgName="tool/docker.webp" titre="Docker"/>
            <SkillComp imgName="tool/wireshark.png" titre="Wireshark"/>
            <SkillComp imgName="tool/figma.svg" titre="Figma"/>
            <SkillComp imgName="tool/pypi.svg" titre="PyPI"/>
            <SkillComp imgName="tool/godot.svg" titre="Godot"/>
            <SkillComp imgName="tool/unreal.png" titre="Unreal Engine"/>
            <SkillComp imgName="tool/blender.png" titre="Blender"/>
            <SkillComp imgName="tool/unity.png" titre="Unity"/>
            <SkillComp imgName="tool/vs.png" titre="Visual Studio"/>
            <SkillComp imgName="tool/jetbrain.png" titre="Suite Jetbrains"/>
            <SkillComp imgName="tool/hipaint.png" titre="HiPaint"/>
            <SkillComp imgName="tool/vercel.png" titre="Vercel"/>
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
import TitreSectionComp from '../TitreSectionComp.vue'
import SkillComp from '../SkillComp.vue'

export default {
    name: 'CompetencesComp',
    components: {
        TitreSectionComp,
        SkillComp
    },
}
</script>
