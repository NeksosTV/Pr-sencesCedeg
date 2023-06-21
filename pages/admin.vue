 <script>
  import PocketBase from 'pocketbase';
  
  export default {
    data() {
      return {
        presences: []
      };
    },
    async mounted() {
      await this.fetchPresences();
    },
    methods: {
      async fetchPresences() {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const collection = await pb.collection('presences');
  
        try {
          const records = await collection.getFullList();
          this.presences = records.data;
          console.log(records);
        } catch (error) {
          console.error('Erreur lors de la récupération des présences:', error);
        }
      },
      editPresence(presenceId) {
        // Logique pour modifier la présence avec l'ID donné
      },
      deletePresence(presenceId) {
        // Logique pour supprimer la présence avec l'ID donné
      }
    }
  };
  </script>
  <template>
    <div>
      <h1>Page d'administration</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date</th>
        <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="presence in presences" :key="presence.collectionId">
            <td>{{ presence.collectionId }}</td>
            <td>{{ presence.Nom }}</td>
            <td>{{ presence.prenom }}</td>
            <td>{{ presence.Date }}</td>
            <td>{{ presence.created }}</td>

            <td>
              <button @click="editPresence(presence.collectionId)">Modifier</button>
              <button @click="deletePresence(presence.collectionId)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>











