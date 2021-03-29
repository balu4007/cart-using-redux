const axios = require("axios").default;

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
