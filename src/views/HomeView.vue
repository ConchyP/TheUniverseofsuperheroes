<script setup>
import { userHeroesStore } from '@/stores/superheroes';
import Card from '../components/Card.vue';
import { onBeforeMount } from 'vue';

const heroesStore = userHeroesStore()

heroesStore.get()

</script>

<template>
  <main>

    <div v-if="heroesStore.isLoading">
    <Card v-for="heroe in heroesStore.superHeroes" :heroe="heroe"/>
    </div>
    <div v-else> Loading </div>
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
