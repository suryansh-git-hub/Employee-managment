import axios from "axios";

const authApi = axios.create({
  baseURL: "https://employee-managment-api.onrender.com/api/auth",
  withCredentials: true,
});

export default authApi;