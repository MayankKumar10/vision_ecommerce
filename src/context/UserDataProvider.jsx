import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getCartAPI,
  getOrdersAPI,
  getWishlistAPI,
  removeProductWishlistAPI,
} from "../API";
import {actionTypes} from "../reducer/actionTypes";
import {userDataReducer} from "../reducer/userDataReducer";
import {useAuth} from "./AuthProvider";

const userDataContext = createContext();
const useUserData = () => useContext(userDataContext);

const UserDataProvider = ({children}) => {
  const {SET_CART, SET_WISHLIST, SET_ORDERS} =
    actionTypes;

  const {auth} = useAuth();

  const initialState = {
    cartProducts: [],
    wishlistProducts: [],
    ordersDetails: {
      cartItemsTotal: "",
      cartItemsTotalDiscount: "",
      orderId: "",
    },
    orders: [],
  };

  const [userDataState, userDataDispatch] = useReducer(
    userDataReducer,
    initialState
  );


  const [loading, setLoading] = useState(false);
	
  useEffect(() => {
    if (auth.isAuth) {
      (async () => {
        setLoading(true);
        try {
          const res = await getCartAPI(auth.token);
          if (res.status === 200) {
            userDataDispatch({
              type: SET_CART,
              payload: {cart: res.data.cart},
            });
            setLoading(false);
          }
        } catch (err) {
          console.log("Cart Error:", err);
        }
      })();

      (async () => {
        setLoading(true);
        try {
          const res = await getWishlistAPI(auth.token);
          if (res.status === 200) {
            userDataDispatch({
              type: SET_WISHLIST,
              payload: {wishlist: res.data.wishlist},
            });
            setLoading(false);
          }
        } catch (err) {
          console.log("Wishlist Error", err);
        }
      })();

      (async () => {
        setLoading(true);
        try {
          const res = await getOrdersAPI(auth.token);
          if (res.status === 200) {
            userDataDispatch({
              type: SET_ORDERS,
              payload: {orders: res.data.orders},
            });
            setLoading(false);
          }
        } catch (err) {
          console.log("OrderService", err);
        }
      })();
    }
  }, [auth.isAuth]);

  return (
    <userDataContext.Provider
      value={{userDataState, userDataDispatch,  loading}}
    >
      {children}
    </userDataContext.Provider>
  );
};

export {useUserData, UserDataProvider};
