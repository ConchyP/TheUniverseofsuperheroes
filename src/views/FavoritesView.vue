<script setup>

import Favorites from '@/components/Favorites.vue';
</script>

<template>
  <main>
    <h5>Please go to Home page to add your favourites</h5>
    
    <Favorites />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
