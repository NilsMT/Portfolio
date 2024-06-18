<template>
    <div id="app_cont">
      <h1>Décryption du code de récompense</h1>
      <input type="text" v-model="code" placeholder="Code de récompense">
      <button @click="handleDecryptionCode" v-if="code!=''">
          Démarrer le processus
      </button>
      <div v-if="result!=''">
          Ce code appartient à {{ result[0] }} et a été généré le {{ result[1] }}
      </div>
    </div>
  </template>
  
  <style>
  
  </style>
  
  <script setup>
      import * as encryption from '@/assets/js/encryption_engine.mjs'
  
      import { ref } from 'vue'
  
      const code = ref('')
      const result = ref('')
      
      function handleDecryptionCode() {
          result.value = encryption.default.decryptCode(code.value)
      }
  </script>