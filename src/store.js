import { defineStore } from "pinia";
import { piniaInstance } from "./global/pinia";
import axiosInstance from "./utils/axiosUtils";
import { useToast } from "vue-toastification";
import { ref } from "vue";
const toast = useToast();

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

export const useAuthStore = defineStore("Products", () => {
  const accessToken = ref(localStorage.getItem("accessToken"));
  const allProducts = ref([]);
  const totalPages = ref(0);
  const user = ref({});
  const loading = ref(false);

  const getAccessToken = () => {
    return accessToken.value;
  };

  const login = async (email, password, router) => {
    try {
      const data = {
        email: email,
        password: password,
      };

      loading.value = true;
      const response = await axiosInstance.post("/user/login", data);

      if (isResponseSuccessful(response)) {
        accessToken.value = response.data.token;
        localStorage.setItem("accessToken", accessToken.value);
        router.push({ name: "Products" });
        toast.success("Login Successfully!");
      } else {
        toast.error("Invalid Credentials");
      }
      loading.value = false;
    } catch (error) {
      loading.value = false;

      console.log(error);
    }
  };

  const fetchProducts = async (queryParams) => {
    try {
      loading.value = true;
      const response = await axiosInstance.get(`/products?${queryParams}`);
      if (isResponseSuccessful(response)) {
        totalPages.value = response.data.totalCount;
        allProducts.value = response.data.allProducts;
      } else {
        toast.error("Can't fetch products");
      }
      loading.value = false;
    } catch (error) {
      console.log("Error during fecting products: ", error);
      loading.value = false;
    }
  };

  const logout = (router) => {
    accessToken.value = null;
    localStorage.clear();
    router.push({ name: "Login" });
  };

  return {
    accessToken,
    allProducts,
    totalPages,
    user,
    loading,
    login,
    fetchProducts,
    logout,
  };
})(piniaInstance);
