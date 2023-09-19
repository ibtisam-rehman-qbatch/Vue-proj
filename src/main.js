import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { piniaInstance } from "./global/pinia";
import VueLoaders from "vue-loaders";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router).use(piniaInstance).use(VueLoaders).use(Toast);
app.mount("#app");
