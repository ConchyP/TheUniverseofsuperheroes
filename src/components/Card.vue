<script setup>
import { ref, onMounted, defineProps } from "vue";

const props = defineProps({
  heroe: Object
})
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="heroe.images.lg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ heroe.name }}</h5>
      <p class="card-text">
        {{ heroe.appearance.gender }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
