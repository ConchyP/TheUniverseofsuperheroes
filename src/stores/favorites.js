// import { reactive } from 'vue';
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


