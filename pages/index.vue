<template>
  <body class="">
    <main class="container__main">
      <video autoplay muted loop class="background-video">
        <source src="../public/videos/macro.mp4" type="video/mp4">
      </video>
      <p class="mb-20 text-center text-gray-50">
        Ce site permet de prendre les présences pour le centre de formation de la Cedeg
      </p>
      <button class="center-button" @click="generateAttendanceLink">Prendre les présences</button>
      <p v-if="attendanceLink" class="attendance-link text-gray-50">Lien de présence : <a class="custom-link" target="_blank" :href="attendanceLink">{{ attendanceLink }}</a></p>
      <p v-if="attendanceLink" class="copy-link text-gray-50">Copiez le lien et ouvrez-le dans un navigateur pour accéder au formulaire.</p>
    </main>
  </body>
</template>

<script>
export default {
  data() {
    return {
      attendanceLink: null
    };
  },
  methods: {
    generateAttendanceLink() {
      const link = this.generateUniqueLink();
      this.attendanceLink = link;
    },
    generateUniqueLink() {
      return `http://localhost:3000/attendance-form/`;  //lien custom qui améne au formulaire de présences
    }
  }
};
</script>

<style scoped>
.attendance-link a.custom-link {
  color: #000000; /* Couleur du lien générer */
}

.background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 68px;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}

.container__main {
  padding: 20px;
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

.attendance-link {
  text-align: center;
  margin-top: 10px;
}

.attendance-link a {
  color: #4caf50;
}

.copy-link {
  text-align: center;
}
</style>
