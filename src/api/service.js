// src/api/service.js

import axios from "axios";

// import { authAxios } from "../customAxios/authAxios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "https://ecommerce-project3.herokuapp.com",
  // withCredentials: true, // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getProducts = () => {
  return service
    .get("/products")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  console.log("this is file service", file);
  return service
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createProduct = (newproduct) => {
  console.log("new photo in service: ", newproduct);
  return service
    .post("/products", newproduct)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  service,
  getProducts,
  uploadImage,
  createProduct,
};
