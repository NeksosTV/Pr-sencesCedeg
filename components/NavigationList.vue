<template>
  <div class="navigation bg-slate-400">
    <router-link to="/">Accueil</router-link>
    <!-- <router-link to="/profil">Prendre les présences</router-link> -->
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
      const isAuthenticated = await pb.authStore.isAuthenticated();

      this.isLoggedIn = isAuthenticated;
    },
    async loginOrLogout() {
      if (this.isLoggedIn) {
        // Effectuer les étapes de déconnexion de l'utilisateur
        const pb = new PocketBase('http://127.0.0.1:8090');
        await pb.authStore.logout();

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








<!-- <script lang="ts" setup>
const data = defineProps({
  isFooter: Boolean,
});

const navClass = ref("flex justify-around flex-wrap gap-2");
const ulClass = ref("flex justify-around flex-wrap gap-2");
const isFooter = data.isFooter ? data.isFooter : false;
if (isFooter) {
  navClass.value = "p-4 text-xl col-span-4";
  ulClass.value = "flex flex-col";
}
</script>

<template>
  <nav v-bind:class="navClass">
    <NuxtLink v-if="isFooter" to="/"
      ><h1 class="text-4xl font-bold py-4">PowerUp</h1></NuxtLink
    >
    <ul v-bind:class="ulClass">
      <li>
        <NuxtLink to="/" class="hover:text-amber-900">Acceuil</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:text-amber-900" to="/about">A propos</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.login-link {
  position: absolute;
  top: 0;
  left: 0;
}
</style> -->