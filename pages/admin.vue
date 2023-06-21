<template>
  <div>
    <h1 class="text-center">Page d'administration</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Date PocketBase</th>
          <th>Date formulaire</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="presence in presences" :key="presence.id">
          <td>{{ presence.collectionId }}</td>
          <td>{{ presence.Nom }}</td>
          <td>{{ presence.prenom }}</td>
          <td>{{ formatDisplayDate(presence.created) }}</td>
          <td>{{ formatDisplayDate(presence.Date) }}</td>
          <td>
            <!-- <button @click="editPresence(presence.collectionId)">Modifier</button> -->
            <button @click="deletePresence(presence.collectionId)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
        this.presences = records;
        console.log(records);
      } catch (error) {
        console.error('Erreur lors de la récupération des présences:', error);
      }
    },
    async editPresence(presenceId) {
     
      const presence = this.presences.find(p => p.collectionId === presenceId);

      // logique pour modifier la présence ici
      // Par exemple, afficher une boîte de dialogue de modification ou naviguer vers une page de modification
      console.log('Modifier la présence', presence);
    },

    formatDisplayDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      const date = new Date(dateString);
      return date.toLocaleString('fr-FR', options);
    },
    
    async deletePresence(presenceId) {
  const presenceIndex = this.presences.findIndex(p => p.collectionId === presenceId);

  if (presenceIndex !== -1) {
    const presence = this.presences[presenceIndex];

    
    this.presences.splice(presenceIndex, 1);

    try {
     
      const pb = new PocketBase('http://127.0.0.1:8090');
      const collection = await pb.collection('presences');
      await collection.delete(presence.id);
      console.log('La présence a été supprimée avec succès de la base de données PocketBase.');
    } catch (error) {
      console.error('Erreur lors de la suppression de la présence dans PocketBase:', error);
    }
  }
}

  }
};
</script>

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
