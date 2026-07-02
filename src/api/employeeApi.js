import axios from "axios";

const employeeApi = axios.create({
  // baseURL: "https://employee-managment-api.onrender.com/api",
  baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

employeeApi.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);


export default employeeApi;