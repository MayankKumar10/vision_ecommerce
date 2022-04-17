import React from "react";

const CartInitialState = {
  total: 0,
  products: [],
};

const CartReducer = (state, {type, payload}) => {
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);

      return {
        ...state,
        products: payload,
      };

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload,
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total,
      };
    default:
      return {...state};
  }
};

export {CartReducer, CartInitialState};
