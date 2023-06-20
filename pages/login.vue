<template>
    <div class="login-form">
      <h1>Connexion</h1>
  
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Nom d'utilisateur ou email :</label>
          <input type="text" id="username" v-model="username" required>
        </div>
  
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <button type="submit">{{ isLoggedIn ? 'Se déconnecter' : 'Se connecter' }}</button>
      </form>
  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  
      <a href="/inscription" v-if="!isLoggedIn" class="create-account-text">Pas de compte ? Créez-vous en un !</a>
    </div>
  </template>
  
  <script>
  import PocketBase from 'pocketbase';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        isLoggedIn: false
      };
    },
    methods: {
      async login() {
        const pb = new PocketBase('http://127.0.0.1:8090');
  
        try {
          const authData = await pb.collection('users').authWithPassword(this.username, this.password);
  
          console.log(authData);
          console.log(pb.authStore.isValid);
          console.log(pb.authStore.token);
          console.log(pb.authStore.model.id);
  
          this.isLoggedIn = true;
  
          this.username = '';
          this.password = '';
  
          this.$router.push('/');
        } catch (error) {
          console.error('Erreur lors de la connexion:', error);
          this.errorMessage = "Une erreur s'est produite lors de la connexion.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-form {
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
  
  .create-account-text {
    margin-top: 10px;
    color: #000000;
  }
  </style>
  