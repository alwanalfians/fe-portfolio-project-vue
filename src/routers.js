import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./components/MainLayout.vue";
import Dashboard from "./pages/Dashboard.vue";
import Educations from "./pages/Educations.vue";
import Experiences from "./pages/Experiences.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "data/educations",
        component: Educations,
      },
      {
        path: "data/experiences",
        component: Experiences,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") next({ path: "/dashboard" });
  else next();
});

export default router;
