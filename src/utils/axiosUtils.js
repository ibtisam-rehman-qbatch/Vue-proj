import axios from "axios";
import { useAuthStore } from "../store";

const axiosInstance = axios.create({
  baseURL: "http://192.168.2.46:3000",
});
// http://192.168.2.46:3000/
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
