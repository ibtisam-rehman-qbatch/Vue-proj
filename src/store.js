import { defineStore } from "pinia";
import { piniaInstance } from "./global/pinia";
import axiosInstance from "./utils/axiosUtils";

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    accessToken: localStorage.getItem("token"),
    allProducts: [],
    user: {},
    loading: false,
  }),
  getters: {
    getAccessToken() {
      return this.accessToken;
    },
  },
  actions: {
    async login(email, password, router) {
      try {
        const data = {
          email: email,
          password: password,
        };

        this.loading = true;
        const response = await axiosInstance.post("/user/login", data);
        if (isResponseSuccessful(response)) {
          this.accessToken = response.data.token;
          localStorage.setItem("token", this.accessToken);
          router.push({ name: "Products" });
        } else {
          window.alert("Invalid Credentials");
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        alert("Invalid Credentials");
        console.log(error);
      }
    },

    async fetchProducts(queryParams) {
      try {
        this.loading = true;
        const response = await axiosInstance.get(`/products?${queryParams}`);
        if (isResponseSuccessful(response)) {
          this.allProducts = response.data.allProducts;
        }
        this.loading = false;
      } catch {
        this.loading = false;
      }
    },
    logout(router) {
      this.accessToken = null;
      localStorage.clear();
      router.push({ name: "Login" });
    },
    // setAccessToken(token) {
    //   this.accessToken = token;
    // },
    // clearAccessToken() {
    //   this.accessToken = null;
    // },
  },
})(piniaInstance);
