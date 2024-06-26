
<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";

const props = defineProps({
    heroe: Object
})

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>

  <div v-show="isVisible" @click="scrollToTop" class="scroll-up-button">
    ⬆️
  </div>

</template>

<style scoped>
.scroll-up-button {
  position: fixed;
  bottom: 60px;
  right: 60px;
  color: #fff;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: xx-large;
  z-index: 1000;
}
</style>