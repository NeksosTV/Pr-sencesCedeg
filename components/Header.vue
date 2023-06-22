<script setup>
import Logo from '../public/img/logo.png'; // Remplacez le chemin par le chemin de votre logo


</script>

<template>
  <header class="bg-slate-400 text-slate-900">
    <div class="wrapper p-6 text-center">
      <div class="logo-container">
        <img class="logo" :src="Logo" alt="Logo Cedeg">
      </div>
      <h1 class="text-4xl font-bold py-4">Cedeg</h1>
      <!-- <h2 class="text-2xl py-4">
        Site de présence de la cedeg
      </h2> -->
      <NavigationList :isLoggedIn="isLoggedIn" @logout="logout" />

      <!-- <NuxtLink to="/login"><button class="login-link mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full">Login</button></NuxtLink> -->

    </div>
  </header>
</template>

<style scoped>
.logo-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
}

.logo {
  height: 80px; /* Ajustez la hauteur du logo  (taille) */
}
</style>
