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
        // Logique pour soumettre le formulaire et envoyer les données à Pocketbase
        
        // Exemple de code pour envoyer les données à Pocketbase
        const formData = {
          name: this.name,
          email: this.email
          // Autres champs de formulaire si nécessaire
        };
        
        // Appeler la fonction d'envoi de données à Pocketbase (utilisez le code approprié de la documentation Pocketbase)
        this.sendFormDataToPocketbase(formData);
      },
      sendFormDataToPocketbase(formData) {
        // Code pour envoyer les données à Pocketbase
        
        // Exemple de code pour envoyer les données à Pocketbase en utilisant PocketBase SDK
   
        
        const pb = new PocketBase('http://127.0.0.1:8090');
        
        // Authentifier en tant qu'administrateur (utilisez le code approprié de la documentation Pocketbase)
        const authData =  pb.admins.authWithPassword('admin@example.com', 'adminpassword');
        
        // Envoyer les données à Pocketbase (utilisez le code approprié de la documentation Pocketbase)
        const response =  pb.data.create('attendance', formData);
        
        // Traiter la réponse de Pocketbase si nécessaire
        
        // Réinitialiser les champs du formulaire
        this.name = '';
        this.email = '';
        // Réinitialiser les autres champs du formulaire si nécessaire
      }
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
  