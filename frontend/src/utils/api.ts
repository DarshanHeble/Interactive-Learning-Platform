import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token to headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
