import axios from "axios";

const employeeApi = axios.create({
  // baseURL: "https://employee-managment-api.onrender.com/api",
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default employeeApi;