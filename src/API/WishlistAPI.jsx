import axios from "axios";

const addToWishlistAPI = async (product, token) => {
  return await axios.post(
    "/api/user/wishlist",
    {product},
    {headers: {authorization: token}}
  );
};

const getWishlistAPI = async (token) => {
  return await axios.get("/api/user/wishlist", {
    headers: {authorization: token},
  });
};

const removeProductWishlistAPI = async (
  productId,
  token
) => {
  return await axios.delete(
    `/api/user/wishlist/${productId}`,
    {
      headers: {authorization: token},
    }
  );
};

export {
  addToWishlistAPI,
  getWishlistAPI,
  removeProductWishlistAPI,
};
