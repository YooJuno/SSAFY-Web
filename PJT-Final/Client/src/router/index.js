import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CCTV from '../views/CCTV.vue';
import Status from '../views/Status.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/CCTV', component: CCTV },
  { path: '/Status', component: Status }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
