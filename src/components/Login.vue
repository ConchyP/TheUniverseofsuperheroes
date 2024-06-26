<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  try {
    await authStore.login(username.value, password.value);
   router.push('/favorites')
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <main>
    <div class="login">
      <form @submit.prevent="handleSubmit">
        <div>
          <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div>
          <input v-model="password" type="password" id="password" placeholder="password" />
        </div>
        <button type="submit" class="login-btn">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </main>
</template>




<style scoped lang="scss">
.form-container { 
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: F07E7E;
  font-family: Arial, sans-serif;
}

/* Estilo del formulario */
form {
  background: #E94242;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

/* Estilo de las etiquetas */
form label {
  display: block;
  margin-bottom: 0.5rem;
  
  font-weight: bold;
}

/* Estilo de los inputs */
form input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ;
  border-radius: 4px;
}

/* Estilo del botón */
form button {
  width: 100%;
  padding: 0.5rem;
  background-color: #beee11;
  color: #020f01;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1120ee
  }
}
</style>
