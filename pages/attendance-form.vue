<template>
    <div>
      <h1>Formulaire de Prise de Présences</h1>
      <form @submit.prevent="submitAttendance">
        <div class="form-group">
          <label for="date">Date :</label>
          <input type="datetime-local" id="date" v-model="attendance.date" required>
        </div>
        <div class="form-group">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" v-model="attendance.nom" required>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom :</label>
          <input type="text" id="prenom" v-model="attendance.prenom" required>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import PocketBase from 'pocketbase';
  
  export default {
    data() {
      return {
        attendance: {
          date: '',
          nom: '',
          prenom: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async submitAttendance() {
        try {
          const pb = new PocketBase('http://127.0.0.1:8090');
          const collection = await pb.collection('presences');
  
          // Formater la date au format ISO 8601
          const formattedDate = new Date(this.attendance.date).toISOString();
  
          // Créer un nouvel enregistrement avec les valeurs du formulaire
          const newPresence = {
            Date: formattedDate,
            Nom: this.attendance.nom,
            prenom: this.attendance.prenom
          };
  
          // Ajouter l'enregistrement à la collection
          const record = await collection.create(newPresence);
  
          this.successMessage = 'La présence a été enregistrée avec succès dans la base de données PocketBase.';
          console.log('Nouvel enregistrement:', record);
  
          this.attendance.date = '';
          this.attendance.nom = '';
          this.attendance.prenom = '';
        } catch (error) {
          this.errorMessage = 'Erreur lors de l\'enregistrement de la présence dans PocketBase.';
          console.error('Erreur lors de l\'enregistrement de la présence dans PocketBase:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  .attendance-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="datetime-local"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .success-message,
  .error-message {
    margin-top: 10px;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
  }
  
  .success-message {
    background-color: #4caf50;
  }
  
  .error-message {
    background-color: #f44336;
  }
  </style>
  