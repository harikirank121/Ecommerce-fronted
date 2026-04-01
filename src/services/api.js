import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-07ca.up.railway.app/api"
});

export default API;
