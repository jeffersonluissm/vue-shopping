import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produto/:id",
      name: "product-details",
      component: () => import("../views/ProductView.vue"),
    },

    {
      path: "/carrinho",
      name: "carrinho",
      component: () => import("../views/CartView.vue"),
    },
  ],
});

export default router;
