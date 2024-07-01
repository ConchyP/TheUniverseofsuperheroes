<script setup>

import HomeView from "./views/HomeView.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import Pagination from "./components/Pagination.vue";
import { RouterLink, RouterView } from "vue-router";

</script>

<template>

    <Header />
    <Footer />
  <!--  Se llama a paginacion?  -->
  <RouterView />

</template>

<style>

</style>
