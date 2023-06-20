<template>
    <main class="contenair__main">
      <p class="mb-28">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam impedit quis repellat sapiente dolorem,
        quos explicabo facere enim reprehenderit saepe alias molestias quasi? Nesciunt, commodi accusantium fuga omnis
        iusto aspernatur. Debitis dolor vel maiores. Veritatis non est ipsa laboriosam ex temporibus commodi nostrum
        iure, quae optio, ad quam enim maxime mollitia? Dolor distinctio possimus impedit, debitis laudantium nihil
        consectetur. Odio! Maxime, aut tempora quas enim modi id adipisci iste veniam nemo ratione, ex quasi nobis
        unde soluta quibusdam iusto impedit reiciendis aliquam omnis provident qui cupiditate voluptatibus nisi!
        Quidem, illo! Velit quos magnam ex. Fuga ipsa reiciendis blanditiis illum magnam officia nostrum temporibus
        labore inventore, et laboriosam cupiditate, asperiores itaque nulla libero, laudantium quia perspiciatis.
        Natus explicabo deserunt enim. Doloremque rem corrupti totam est suscipit odio ab? Perferendis, voluptatem
        eius, quia expedita omnis in possimus est saepe, perspiciatis deleniti ut porro provident explicabo. Officiis
        inventore reiciendis perferendis in minima? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quisquam impedit quis repellat sapiente dolorem, quos explicabo facere enim reprehenderit saepe alias molestias
        quasi? Nesciunt, commodi accusantium fuga omnis iusto aspernatur. Debitis dolor vel maiores. Veritatis non est
        ipsa laboriosam ex temporibus commodi nostrum iure, quae optio, ad quam enim maxime mollitia? Dolor distinctio
        possimus impedit, debitis laudantium nihil consectetur. Odio! Maxime, aut tempora quas enim modi id adipisci
        iste veniam nemo ratione, ex quasi nobis unde soluta quibusdam iusto impedit reiciendis aliquam omnis provident
        qui cupiditate voluptatibus nisi! Quidem, illo! Velit quos magnam ex. Fuga ipsa reiciendis blanditiis illum
        magnam officia nostrum temporibus labore inventore, et laboriosam cupiditate, asperiores itaque nulla libero,
        laudantium quia perspiciatis. Natus explicabo deserunt enim. Doloremque rem corrupti totam est suscipit odio ab?
        Perferendis, voluptatem eius, quia expedita omnis in possimus est saepe, perspiciatis deleniti ut porro provident
        explicabo. Officiis inventore reiciendis perferendis in minima?
        et laboriosam cupiditate, asperiores itaque nulla libero,
        laudantium quia perspiciatis. Natus explicabo deserunt enim. Doloremque rem corrupti totam est suscipit odio ab?
        Perferendis, voluptatem eius, quia expedita omnis in possimus est saepe, perspiciatis deleniti ut porro provident
        explicabo. Officiis inventore reiciendis perferendis in minima?
        et laboriosam cupiditate, asperiores itaque nulla libero,
        laudantium quia perspiciatis. Natus explicabo deserunt enim. Doloremque rem corrupti totam est suscipit odio ab?
      </p>
      <button class="center-button" @click="takeAttendance">Prendre les présences</button>
    </main>
  </template>
  
  <script>
  export default {
    methods: {
      takeAttendance() {
        // Logique pour prendre les présences
      }
    }
  };
  </script>
  
  <style scoped>
  .contenair__main {
    background-image: url(../public/img/banner.png);
    /* background-repeat: no-repeat; */
    background-size: cover;
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
  