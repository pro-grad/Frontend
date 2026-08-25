import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';
import OnboardingPage from '../pages/OnboardingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import AssistantPage from '../pages/AssistantPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/onboarding',
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: OnboardingPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/assistant',
    name: 'assistant',
    component: AssistantPage,
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
