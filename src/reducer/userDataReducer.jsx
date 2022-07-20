import {actionTypes} from "./actionTypes";

export const userDataReducer = (state, {type, payload}) => {
  
  const {
    SET_WISHLIST,
    SET_CART,
    SET_ORDER,
    SET_ORDERS,
    RESET,
  } = actionTypes;

  switch (type) {
    case SET_CART:
      return {
        ...state,
        cartProducts: [...payload.cart],
      };
    case SET_WISHLIST:
      return {
        ...state,
        wishlistProducts: [...payload.wishlist],
      };
    case SET_ORDER:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          ...payload.orderDetails,
        },
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: [...payload.orders],
      };

    case RESET:
      return {...state};

    default:
      return {state};
  }
};
