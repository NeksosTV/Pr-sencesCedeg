<template>
  <div class="navigation bg-slate-400">
    <router-link to="/">Accueil</router-link>
    <button v-if="$route.path !== '/login'" @click="loginOrLogout">
      {{ isLoggedIn ? 'Déconnexion' : 'Connexion' }}
    </button>
  </div>
</template>

<script>
import PocketBase from 'pocketbase';

export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted() {
    // Vérifier l'état de connexion de l'utilisateur au moment du chargement du composant
    this.checkLoginStatus();
  },
  methods: {
    async checkLoginStatus() {
      const pb = new PocketBase('http://127.0.0.1:8090');
   
    },
    async loginOrLogout() {
      if (this.isLoggedIn) {
        // Effectuer les étapes de déconnexion de l'utilisateur
        const pb = new PocketBase('http://127.0.0.1:8090');
        // await pb.authStore.logout();

        // Réinitialiser la valeur de isLoggedIn à false
        this.isLoggedIn = false;

        // Rediriger vers la page d'accueil ou une autre page appropriée après la déconnexion
        this.$router.push('/');
      } else {
        // Rediriger vers la page de connexion
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* background-color: #f0f0f0; */
}

.navigation a {
  margin-right: 10px;
}

.navigation button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.navigation button:hover {
  background-color: #45a049;
}
</style>
