import axios from "axios";

const authApi = axios.create({
  baseURL: "https://employee-managment-api.onrender.com/api/auth",
});

export default authApi;