<script setup>
 import { ref } from 'vue';
 import { useUserStore } from '@/stores/userRegistration.js';

const username = ref('');
const password = ref('');
const userStore = useUserStore();
const coders = userStore.coders;

const register = () => {
  const newUser = {
    username: username.value,
    password: password.value,
  };
  userStore.addUser(newUser);
  username.value = '';
  password.value = '';
}; 
</script>

<template>

  <div>
    <div class="form-container">
      <form @submit.prevent="register">
        <p>Please register here</p>
        <label for="username">username</label>
        <input type="text" name="username" id="username" v-model="username">

        <label for="password">password</label>
        <input type="password" name="password" id="password" v-model="password">

        <button type="submit" class="btn btn-primary">Submit</button>
        
      </form>
        
    </div> 
  </div>
</template>

<style lang="scss" scoped>


/* Contenedor principal para centrar el formulario */
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







