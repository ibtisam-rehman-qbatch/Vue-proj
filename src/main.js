import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { piniaInstance } from "./global/pinia";
import VueLoaders from "vue-loaders";

const app = createApp(App);
app.use(router).use(piniaInstance).use(VueLoaders);
app.mount("#app");
