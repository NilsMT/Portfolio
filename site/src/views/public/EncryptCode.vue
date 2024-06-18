<template>
    <div id="app_cont">
      <h1>Génération du code de récompense</h1>
      <input type="text" v-model="username" placeholder="Ton pseudo">
      <button @click="handleEncryptionWord" v-if="username !=''">
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
  
      const username = ref('')
      const result = ref('')
      
      function handleEncryptionWord() {
          result.value = encryption.default.encryptCode(username.value)
      }
  </script>