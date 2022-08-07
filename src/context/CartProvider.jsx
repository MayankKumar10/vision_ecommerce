import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  CartInitialState,
  CartReducer,
} from "../reducer/CartReducer";
import { toast } from "react-toastify";

const CartContext = createContext(CartInitialState);

function CartProvider({children}) {
  const [state, dispatch] = useReducer(
    CartReducer,
    CartInitialState
  );

  const addToCart = (product) => {
    const updateCart = state.products.concat(product);
    updatePrice(updateCart);
    toast.success(`Item has added to cart`)
    dispatch({
      type: "ADD_TO_CART",
      payload: updateCart,
    });
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) =>
        currentProduct.name !== product.name
    );
    toast.success(`Item has removed from cart`)
    updatePrice(updateCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: updateCart,
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      if (product.quantity > 1) {
        total += product.quantity * product.discountedPrice;
      } else {
        total += product.discountedPrice;
      }
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return (
    <>
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    </>
  );
}

const CartProducts = () => useContext(CartContext);

export {CartProducts, CartProvider};
