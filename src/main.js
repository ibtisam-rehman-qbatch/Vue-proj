import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./pages/Dashboard.vue";
import ProductListing from "./pages/ProductListing.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/products", component: ProductListing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
