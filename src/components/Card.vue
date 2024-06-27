<script setup>
import { ref, onMounted, defineProps } from "vue";
import { defineStore } from "pinia";
import { useFavoritesStore } from "../stores/favorites.js";

const props = defineProps({
  heroe: Object,
});

const favoritesStore = useFavoritesStore();

const addToFavorites = () => {
  favoritesStore.addFavorite(props.heroe);
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="heroe.images.lg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ heroe.name }}</h4>
      <p class="card-text">
        Id:
        {{ heroe.id }}
      </p>
      <p class="card-text">
        Intelligence:
        {{ heroe.powerstats.intelligence }}
      </p>
      <p class="card-text">
        Strength:
        {{ heroe.powerstats.strength }}
      </p>
      <p class="card-text">
        Speed:
        {{ heroe.powerstats.speed }}
      </p>
      <p class="card-text">
        Power:
        {{ heroe.powerstats.power }}
      </p>
      <p class="card-text">
        Durability:
        {{ heroe.powerstats.durability }}
      </p>
      <p class="card-text">
        Combat:
        {{ heroe.powerstats.combat }}
      </p>

      <button id="button" class="btn btn-danger" @click="addToFavorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  border-radius: 16px;
  border: 2px solid rgb(1, 1, 1);
}

.card {
  background: none;
  text-align: center;
  font-weight: 800;

  h4 {
    color: rgb(27, 20, 232);
    text-align: center;
    font-weight: 900;
  }

  border: 3px solid rgb(1, 1, 1);
  padding: 20px;
  border-radius: 16px;
}

.card-body {
  border: 2px solid rgb(1, 1, 1);
  border-radius: 16px;
  background-color: rgba(232, 183, 20, 0.678);

  margin-top: 10px;
}
</style>
