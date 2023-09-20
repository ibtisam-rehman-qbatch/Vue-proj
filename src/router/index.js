import { createRouter, createWebHistory } from "vue-router";
import ProductListing from "../pages/ProductListing.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import ProductDetails from "../pages/ProductDetails.vue";

import { useAuthStore } from "../store";
import { useToast } from "vue-toastification";
const toast = useToast();

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/products",
    name: "Products",
    component: ProductListing,
    meta: { requiresAuth: true },
  },
  {
    path: "/products/:id",
    name: "Product-details",
    component: ProductDetails,
    meta: { requiresAuth: true },
    props: true,
  },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && useAuthStore.accessToken) {
    next(from);
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!useAuthStore.accessToken) {
      toast.error("Login to continue");
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
