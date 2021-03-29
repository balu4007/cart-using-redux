const { axiosInstance } = require("../../helper/axiosinstance");

export const getProducts = function () {
  return axiosInstance.get("/products");
};
