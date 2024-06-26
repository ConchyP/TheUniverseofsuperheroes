import { reactive } from 'vue';
import { defineStore } from 'pinia'


export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
      favorites: []
    }),
    actions: {
      addFavorite(superhero) {
        if (!this.favorites.some(favorite => favorite.id === superhero.id)) {
          this.favorites.push(superhero);
        }
      },
      removeFavorite(superheroId) {
        this.favorites = this.favorites.filter(s => s.id !== superheroId);
      }
    }
  });


// export const stores = reactive({
//   favorites: []
// });

// export function useStore() {
//   const addToFavorites = (heroe) => {
//     if (!stores.favorites.some(favorite => favorite.id === heroe.id)) {
//       stores.favorites.push(heroe);
//       console.log(`Agregado a favoritos: ${heroe.name}`);
//     }
//   };

//   return { store, addToFavorites };
// }