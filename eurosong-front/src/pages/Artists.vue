<!-- Settings van de pagina -->

<script setup>
// Imports
import { ref, onMounted } from 'vue';

// Data
let artists = ref([]);
let newArtistName = ref("");

// Lifecycle
onMounted(() => {
    getArtists();
});

// Methods
const getArtists = async () => {
    const res = await fetch("http://localhost:3000/artists");
    artists.value = await res.json();
}

const addArtist = async () => {
    if (!newArtistName.value.trim()) return;

    const res = await fetch("http://localhost:3000/artists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: newArtistName.value })
    });

    const data = await res.json();

    if (res.ok) {
        newArtistName.value = "";
        getArtists();
    } else {
        alert(data.error || data.status);
    }
}

const removeArtist = async (id) => {
    const res = await fetch(`http://localhost:3000/artists/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
        return;
    }

    getArtists();
}
</script>

<template>
  <div>
    <h1>Artists</h1>

    <!-- Voeg een artiest toe -->
    <input v-model="newArtistName" placeholder="Nieuwe artiest naam" />
    <button @click="addArtist">Add Artist</button>

    <!-- Lijst van artiesten -->
    <ul v-if="artists.length > 0">
      <li v-for="artist in artists" :key="artist.artist_id">
        {{ artist.name }}
        <button @click="removeArtist(artist.artist_id)">Delete</button>
      </li>
    </ul>

    <p v-else>
      Geen artiesten beschikbaar
    </p>
  </div>
</template>
