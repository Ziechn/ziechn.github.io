import { createRouter as _createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}