<template>
  <body class="container__main bg-slate-400 ">
    <main >
    <p class="mb-20 text-center">
      se site permet de prendre les présences pour le centre de formation de la Cedeg
    </p>
    <button class="center-button" @click="redirectToAttendanceForm">Prendre les présences</button>
  </main>
  </body>
  
</template>

<script >
export default {
  methods: {
    redirectToAttendanceForm() {
      // Rediriger vers la page du formulaire de prise de présences
      this.$router.push('/attendance-form');
    }
  }
};
</script>

<style scoped>

.container__main {
  /* background-image: url(../public/img/banner.png); */
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  /* background-color: #45a049; */
  
}

.center-button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.center-button:hover {
  background-color: #45a049;
}
</style>
