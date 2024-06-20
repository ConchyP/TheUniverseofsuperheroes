import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userRegistration', () => {
  const savedCoders = JSON.parse(localStorage.getItem('coders')) ;

  const coders = ref(savedCoders);

  const addUser = (newUser) => {
    coders.value.push(newUser);
    localStorage.setItem('coders', JSON.stringify(coders.value));
  };
 
 

  return { coders, addUser, };
});

//define store  es una función de Pinia que se utiliza para crear un store
// JSON.parse se utiliza para recuperar y convertir los datos almacenados en localStorage de vuelta a un formato utilizable (un array de objetos).