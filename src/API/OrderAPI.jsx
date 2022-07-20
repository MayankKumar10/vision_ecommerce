import axios from "axios";

const addOrderAPI = async (order, token) => {
  return await axios.post(
    "api/user/orders",
    {...order},
    {
      headers: {authorization: token},
    }
  );
};

const getOrdersAPI = async (token) => {
  return await axios.get("api/user/orders", {
    headers: {authorization: token},
  });
};

export {addOrderAPI, getOrdersAPI};
