<!-- <script setup>
import { ref, computed } from 'vue';
import Card from './Card.vue';

const itemsPerPage = 20;
const currentPage = ref(1);
const cards = ref([
  
]);

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cards.value.slice(start, end);
});

</script>

<template>

<nav aria-label="Page navigation example">
  <ul id= "ulid" class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
  <Pagination
  :total-items="cards.length"
      :items-per-page="itemsPerPage"
      :current-page.sync="currentPage"
    />
</nav>
  
  </template>


<style scoped lang="scss">
//  .ulid {
    
//  }

</style> -->


<script setup>
import { ref, computed } from 'vue';

const itemsPerPage = 20;
const currentPage = ref(1);
const cards = ref([
  // ... tus datos de tarjetas aquí ...
]);

const totalCards = computed(() => cards.value.length);
const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cards.value.slice(start, end);
});

// Función para actualizar la página actual
const updatePage = (newPage) => {
  currentPage.value = newPage;
};

// Calcula el número total de páginas
const totalPages = computed(() => Math.ceil(totalCards.value / itemsPerPage));
</script>

<template>
    <nav aria-label="Page navigation example">
  <ul id= "ulid" class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
  </nav>
    
    <!-- Asegúrate de que el componente Card esté definido y utilizado correctamente aquí -->
    <Card v-for="card in paginatedCards" :key="card.id" :data="card" />
  </template>