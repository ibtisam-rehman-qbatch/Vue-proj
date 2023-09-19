import axios from "axios";
import { useAuthStore } from "../store";
import { useToast } from "vue-toastification";
const toast = useToast();

const axiosInstance = axios.create({
  baseURL: "http://192.168.2.46:3000",
});
// http://192.168.2.46:3000/
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error(error.response.data.message);

    return Promise.reject(error);
  }
);

export default axiosInstance;
