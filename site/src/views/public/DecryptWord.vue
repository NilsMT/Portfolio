<template>
  <div id="app_cont">
    <h1>Décryption du mot</h1>
    <input type="text" v-model="word" placeholder="Le texte">
    <input type="text" v-model="private_key" placeholder="La cle privée">
    <input type="text" v-model="public_key"  placeholder="La cle public">
    <button @click="handleDecryptionWord" v-if="word!='' && private_key !='' && public_key !=''">
        Démarrer le processus
    </button>
    <div v-if="result!=''">
        Résultat : {{ result }}
    </div>
  </div>
</template>

<style>

</style>

<script setup>
    import * as encryption from '@/assets/js/encryption_engine.mjs'

    import { ref } from 'vue'

    const word = ref('')
    const private_key = ref('')
    const public_key = ref('')
    const result = ref('')
    
    function handleDecryptionWord() {
        result.value = encryption.default.decryptWord(public_key.value,private_key.value,word.value)
    }
</script>