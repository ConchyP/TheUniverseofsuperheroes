import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import HumansView from '../views/HumansView.vue';
import RegisterView from '../views/RegisterView.vue';
import { useAuthStore } from '../stores/auth.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/FavoritesView.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      authStore.checkAuth(); // Asegura que la autenticación se verifique
      if (!authStore.isAuthenticated) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/humans',
    name: 'humans',
    component: HumansView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
