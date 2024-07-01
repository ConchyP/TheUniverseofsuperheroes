<template>
  <footer class="footer" :class="{ 'show': showFooter }">
    <span>Supercoders F5 &copy;</span>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showFooter = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Mostrar el footer cuando se haya hecho scroll hasta el final de la página
  if (scrollPosition + windowHeight >= documentHeight) {
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #f07e7e;
  color: white;
  padding: 15px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000; /* Asegura que el footer esté sobre otros elementos */
  transition: transform 0.3s ease; /* Transición suave */
  transform: translateY(100%); /* Inicialmente oculto */
}

.footer.show {
  transform: translateY(0);
}

.footer span {
  font-size: 16px;
  font-weight: bold;
  padding-left: 10px;
}
</style>

