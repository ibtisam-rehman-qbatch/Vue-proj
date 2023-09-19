import { defineStore } from "pinia";
import { piniaInstance } from "./global/pinia";
import axiosInstance from "./utils/axiosUtils";
import { useToast } from "vue-toastification";
const toast = useToast();

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    accessToken: localStorage.getItem("accessToken"),
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
          localStorage.setItem("accessToken", this.accessToken);
          router.push({ name: "Products" });
          toast.success("Login Successfully!");
        } else {
          toast.error("Invalid Credentials");
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;

        console.log(error);
      }
    },

    async fetchProducts(queryParams) {
      try {
        this.loading = true;
        const response = await axiosInstance.get(`/products?${queryParams}`);
        if (isResponseSuccessful(response)) {
          this.allProducts = response.data.allProducts;
        } else {
          toast.error("Can't fetch products");
        }
        this.loading = false;
      } catch (error) {
        console.log("Error during fecting products: ", error);
        this.loading = false;
      }
    },
    logout(router) {
      this.accessToken = null;
      localStorage.clear();
      router.push({ name: "Login" });
    },
  },
})(piniaInstance);
