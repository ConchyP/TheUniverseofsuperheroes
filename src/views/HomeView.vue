<script setup>
import { userHeroesStore } from '@/stores/superheroes';
import Card from '../components/Card.vue';
import { onBeforeMount } from 'vue';

const heroesStore = userHeroesStore()

heroesStore.get()

</script>

<template>
  <main>

    <div id="list" v-if="heroesStore.isLoading" class="d-flex flex-row flex-wrap">
      <div v-for="heroe in heroesStore.superHeroes" class="col-md-3 mb-4">
        <Card :heroe="heroe" />
      </div>
    </div>
    <div v-else> Loading></div>
  </main>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

body {
  
  .img {
    opacity: 0.4;
  }
  background-image: url("../assets/img/backgroundimg.jpg");
  background-size: 100%;
  background-repeat: repeat;
}
</style>
