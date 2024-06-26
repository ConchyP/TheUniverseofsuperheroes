<script setup>


</script>

<template>
  <div>
    <h1>Favoritos</h1>
    <!-- Aquí va el contenido de tus favoritos -->
  </div>
</template>

<style scoped>
/* Estilos para tu vista de favoritos */
</style>

<script setup>
import { ref } from 'vue';
import { useFavoritesStore } from "../stores/favorites.js";  //
import Card from './Card.vue'; 

const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.favorites;

const removeHeroe = (id) => {
  favoritesStore.removeFavorite(id);
};

</script>

<template>
     <div>
      <div v-for="heroe in favorites" :key="heroe.id">
    <Card :heroe="heroe" />
    <button @click="removeHeroe(heroe.id)">Remove from Favorites</button>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>