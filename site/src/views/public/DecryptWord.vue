<template>
  <div id="app_cont">
    <h1>Décryption du mot</h1>
    <input type="text" v-model="word" placeholder="Le mot">
    <input type="text" v-model="private_key" placeholder="La cle privée">
    <input type="text" v-model="public_key"  placeholder="La cle public">
    <button @click="handleDecryptionWord" v-if="word!='' && private_key !='' && public_key !=''">
        Démarrer le processus
    </button>
  </div>
</template>

<style>

</style>

<script setup>
    import { ref } from 'vue'

    const word = ref('')
    const private_key = ref('')
    const public_key = ref('')
    
    function handleDecryptionWord() {
        console.log('Démarrer le processus')

        console.log(word.value)
        console.log(private_key.value)
        console.log(public_key.value)
    }
</script>