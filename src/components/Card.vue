<script setup>
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  heroe: Object
})
</script>

<template>
  <div class="">
  <div class="card" style="width: 18rem">
    <img :src="heroe.images.lg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ heroe.name }}</h5>
      <p class="card-text">Intelligence:
        {{ heroe.powerstats.intelligence }}
      </p>
      <p class="card-text">Strength:
        {{ heroe.powerstats.strength }}
      </p>
      <p class="card-text">Speed:
        {{ heroe.powerstats.speed }}
      </p>
      <p class="card-text">Power:
        {{ heroe.powerstats.power }}
      </p>
      <p class="card-text">Durability:
        {{ heroe.powerstats.durability }}
      </p>
      <p class="card-text">Combat:
        {{ heroe.powerstats.combat }}
      </p>

      <a href="#" class="btn btn-primary">Favorites</a>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">


// .container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1rem;


//     .card {
//   width: 100%;
 
// } 
// }
  
  
  


</style>
