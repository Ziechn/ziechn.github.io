import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ResumeView from '../views/ResumeView.vue';

const routes = [
  {
    path: '/',
    name: 'projects',
    component: ProjectView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;