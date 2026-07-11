import axios from "axios";

const api = axios.create({
  baseURL: "https://easytransform-backend.onrender.com/api",
});

export default api;