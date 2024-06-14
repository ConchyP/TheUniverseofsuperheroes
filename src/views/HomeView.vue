<script setup>
import { userHeroesStore } from '@/stores/superheroes';

const heroesStore = userHeroesStore()

heroesStore.get()

</script>

<template>
  <main>
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
