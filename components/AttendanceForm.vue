<template>
    <div class="attendance-form">
      <h2>Formulaire de présence</h2>
      <form @submit="submitForm">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" required>
        
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
  
        <!-- Autres champs de formulaire si nécessaire -->
        
        <button type="submit">Soumettre</button>
      </form>
    </div>
  </template>
  
  <script>

import PocketBase from 'pocketbase';
  export default {
    data() {
      return {
        name: '',
        email: ''
        // Autres champs de formulaire si nécessaire
      };
    },
    methods: {
      submitForm() {
        const formData = {
          name: this.name,
          email: this.email
          // Autres champs de formulaire si nécessaire
        };
        
        // Appeler la fonction d'envoi de données à Pocketbase (utilisez le code approprié de la documentation Pocketbase)
        this.sendFormDataToPocketbase(formData);
      },

    }
  };
  </script>
  
  <style scoped>
  .attendance-form {
    margin-top: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 10px;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  