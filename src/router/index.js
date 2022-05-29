import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Show from '../views/Show/Show.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
