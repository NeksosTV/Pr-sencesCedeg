<template>
  <div class="inscription-form">
    <h1>Formulaire d'inscription</h1>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" v-model="username" required>
      </div>

      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
      </div>

      <div class="form-group">
        <label for="passwordConfirm">Confirmation du mot de passe :</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" required>
      </div>

      <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" required>
      </div>

      <button type="submit">S'inscrire</button>
    </form>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import PocketBase from 'pocketbase';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async submitForm() {
      const pb = new PocketBase('http://127.0.0.1:8090');

      const item = {
        username: this.username,
        email: this.email,
        emailVisibility: true,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
        name: this.name
      };

      try {
        const record = await pb.collection('users').create(item);
        console.log('Données enregistrées avec succès:', record);

        this.successMessage = "Inscription réussie !";

        // Réinitialiser les champs du formulaire
        this.username = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.name = '';
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement des données:', error);
        this.errorMessage = "Une erreur s'est produite lors de l'inscription.";
      }
    }
  }
};
</script>

<style scoped>
.inscription-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../public/img/banner.png');
  background-size: cover;
  padding: 20px;
}

h1 {
  color: #030303;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  color: #000000;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 300px;
  padding: 10px;
  border-radius: 4px;
  border: none;
}

button {
  width: 300px;
  background-color: #4caf50;
  color: rgb(3, 2, 2);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.success-message {
  color: green;
  margin-top: 10px;
}
</style>