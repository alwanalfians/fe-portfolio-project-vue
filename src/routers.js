import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./components/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "dashboard",
        component: () => import("./pages/Dashboard.vue"),
      },
      {
        path: "data/educations",
        component: () => import("./pages/Educations.vue"),
      },
      {
        path: "data/experiences",
        component: () => import("./pages/Experiences.vue"),
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
