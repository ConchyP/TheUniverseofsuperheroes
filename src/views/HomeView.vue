<script setup>
import { userHeroesStore } from '@/stores/superheroes';
import Card from '../components/Card.vue';

const heroesStore = userHeroesStore()

heroesStore.get()

</script>

<template>
  <main>

    <div>
    <Card />
    </div>

    <div v-if="heroesStore.isLoading">

      <div>{{ heroesStore.superHeroes[0].name }}</div>


      <ul>
        <li v-for="heroe in heroesStore.superHeroes">
          <img :src="heroe.images.xs" alt="">
          {{ heroe.name }};
          {{ heroe.id }}
          {{ heroe.powerstats }}
          {{ heroe.appearance }}
          
        </li>
        <li> </li>
      </ul>


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
