import axios from "axios";

const getCategoryAPI = async () => {
  return await axios.get("/api/categories");
};

const getProductListAPI = async () => {
  return await axios.get("/api/products");
};

const addToCartAPI = async (product, token) => {
  return await axios.post(
    "/api/user/cart/",
    {...product},
    {headers: {authorization: token}}
  );
};

const cartCounterAPI = async (productId, token, type) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    {action: {type}},
    {headers: {authorization: token}}
  );
};

const clearCartAPI = async (token) => {
  return await axios.post(
    "/api/user/cart/clearCart",
    {},
    {headers: {authorization: token}}
  );
};

const getCartAPI = async (token) => {
  return await axios.get("/api/user/cart", {
    headers: {authorization: token},
  });
};

const removeProductCartAPI = async (productId, token) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: {authorization: token},
  });
};

export {
  getProductListAPI,
  getCategoryAPI,
  addToCartAPI,
  cartCounterAPI,
  clearCartAPI,
  getCartAPI,
  removeProductCartAPI,
};
