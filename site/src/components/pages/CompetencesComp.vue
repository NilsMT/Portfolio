<template>
    <div id="competences">
        <TitreSectionComp titre="Compétences" />

        <h2>Langues</h2>

        <div class="skill_cont">
            <SkillComp imgName="français.png" titre="Langue maternelle"/>
            <SkillComp imgName="english.png" titre="Niveau B2"/>
            <SkillComp imgName="español.png" titre="Notions"/>
        </div>

        <h2>Langages informatiques maitrisés</h2>

        <div class="skill_cont">
            <SkillComp imgName="lang_mastered/html.png" titre="HTML"/>
            <SkillComp imgName="lang_mastered/css.png" titre="CSS"/>
            <SkillComp imgName="lang_mastered/js.png" titre="JavaScript"/>
            <SkillComp imgName="lang_mastered/node.png" titre="Node.js"/>
            <SkillComp imgName="lang_mastered/vuejs.png" titre="Vue.js"/>
            <SkillComp imgName="lang_mastered/brainfuck.png" titre="Brainfuck"/>
            <SkillComp imgName="lang_mastered/sqldev.png" titre="SQL"/>
            <SkillComp imgName="lang_mastered/py.png" titre="Python"/>
            <SkillComp imgName="lang_mastered/kt.png" titre="Kotlin"/>
            <SkillComp imgName="lang_mastered/lua.png" titre="Lua"/>
            <SkillComp imgName="lang_mastered/latex.png" titre="LaTeX"/>
        </div>

        <h2>Langages informatiques en cours d'apprentissage</h2>

        <div class="skill_cont">
            <SkillComp imgName="lang_learn/bash.png" titre="Bash"/>
            <SkillComp imgName="lang_learn/mongodb.svg" titre="MongoDB"/>
            <SkillComp imgName="lang_learn/php.svg" titre="PHP"/>
            <SkillComp imgName="lang_learn/csharp.png" titre="C#"/>
            <SkillComp imgName="lang_learn/c++.png" titre="C++"/>
        </div>

        <h2>Applications maitrisées</h2>

        <div class="skill_cont">
            <SkillComp imgName="app_mastered/git.png" titre="Git"/>
            <SkillComp imgName="app_mastered/roblox_studio.png" titre="Roblox Studio"/>
            <SkillComp imgName="app_mastered/trello.png" titre="Trello"/>
            <SkillComp imgName="app_mastered/vscode.png" titre="VS Code"/>
            <SkillComp imgName="app_mastered/drawio.png" titre="draw.io"/>
            <SkillComp imgName="app_mastered/shotcut.png" titre="Shotcut"/>
            <SkillComp imgName="app_mastered/medibang.png" titre="Medibang Paint"/>
            <SkillComp imgName="app_mastered/sketch.webp" titre="Sony Sketch"/>
            <SkillComp imgName="app_mastered/google.png" titre="Suite Google"/>
            <SkillComp imgName="app_mastered/office.png" titre="Suite Office"/>
            <SkillComp imgName="app_mastered/overleaf.png" titre="Overleaf"/>
            <SkillComp imgName="app_mastered/android.png" titre="Android Studio"/>
            <SkillComp imgName="app_mastered/docker.webp" titre="Docker"/>
            <SkillComp imgName="app_mastered/wireshark.png" titre="Wireshark"/>
        </div>

        <h2>Applications en cours d'apprentissage</h2>

        <div class="skill_cont">
            <SkillComp imgName="app_learn/unreal.png" titre="Unreal Engine"/>
            <SkillComp imgName="app_learn/blender.png" titre="Blender"/>
            <SkillComp imgName="app_learn/unity.png" titre="Unity"/>
            <SkillComp imgName="app_learn/vs.png" titre="Visual Studio"/>
            <SkillComp imgName="app_learn/jetbrain.png" titre="Suite Jetbrains"/>
            <SkillComp imgName="app_learn/hipaint.png" titre="HiPaint"/>
            <SkillComp imgName="app_learn/vercel.png" titre="Vercel"/>
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
