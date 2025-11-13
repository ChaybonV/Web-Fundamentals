<!-- Settings van de pagina -->
<script setup>
    // Imports
    import { ref, onMounted } from 'vue';

    // Life cycles
    onMounted(()=>{
        getArtists();
    })

    // Data ref()
    let artists = ref([])
    let newArtistName = ref("");

    // Methods
    const getArtists =()=>{
        fetch("http://localhost:3000/artists")
        .then((res)=>res.json())
        .then((data)=>{
            artists.value = data
        })
    }
    const removeArtist = (id) =>{
        fetch("http://localhost:3000/artists/"+id,{
            method: "DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            getArtists();
        })
    }

    const addArtist = () =>{
        fetch("http://localhost:3000/artists/"+id,{
            method: "POST"
        })
        .then((res)=>res.json())
        .then((data)=>{
            getArtists();
        })
    }
</script>

<!-- Template -->
<template>
  <div>
    <h1>Artists</h1>

    <ul v-if="artists.length > 0">
      <li v-for="artist in artists" :key="artist.artist_id">
        {{ artist.name }}
        <button @click="removeArtist(artist.artist_id)">
            Delete
        </button>
      </li>
    </ul>

    <p v-if="artists.length == 0">
      Geen artiesten beschikbaar
    </p>
  </div>
</template>
