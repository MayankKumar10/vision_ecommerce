import React, {useEffect, useReducer} from "react";
import {createContext, useContext} from "react";
import {getCategoryAPI, getProductListAPI} from "../API";
import {actionTypes} from "../reducer/actionTypes";
import {ProductReducer} from "../reducer/ProductReducer";

const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({children}) => {
  const initialState = {
    data: [],
    categoriesData: [],
    sortBy: "",
    categories: {},
    price: 100000,
    discount: "",
    rating: 1,
    productsLoading: false,
    searchText: "",
  };

  const {LOADING_DATA, LOAD_DATA} = actionTypes;

  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      let res = await getProductListAPI();

      productDispatch({
        type: LOADING_DATA,
        payload: {status: true},
      });
      console.log(res);
      if (res.status === 200) {
        let products = res.data.products;
        products = products.map((item) => ({
          ...item,
          discountedPrice:
            item.price - item.price * (item.discount / 100),
        }));
        productDispatch({
          type: LOAD_DATA,
          payload: {products, status: false},
        });
      }
    })();
    (async () => {
      try {
        let res = await getCategoryAPI();
        productDispatch({
          type: LOADING_DATA,
          payload: {status: true},
        });
        if (res.status === 200) {
          let categoriesData = res.data.categories;
          let categories = categoriesData.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.categoryName]: false,
            }),
            {}
          );
          productDispatch({
            type: LOAD_DATA,
            payload: {
              categories,
              status: false,
              categoriesData,
            },
          });
        }
      } catch (err) {
        console.log("Category Error:", err);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{productState, productDispatch}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export {useProducts, ProductProvider};
