import { createRouter, createWebHistory } from "vue-router";
import ProductListing from "../pages/ProductListing.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import { useAuthStore } from "../store";

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
      alert("Login to continue");
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
