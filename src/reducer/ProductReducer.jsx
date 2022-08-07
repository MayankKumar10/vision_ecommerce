import {actionTypes} from "./actionTypes";

export const ProductReducer = (
  state,
  {type, payload, price_value, value}
) => {
  const {
    LOAD_DATA,
    LOW_TO_HIGH,
    HIGH_TO_lOW,
    PRICE,
    PHONES,
    LAPTOP,
    GAMING_LAPTOPS,
    CPU,
    RATING,
    DISCOUNT,
    CLEAR,
    LOADING_DATA,
    SEARCH,
  } = actionTypes;

  switch (type) {
    case LOAD_DATA:
      if (payload.products)
        return {
          ...state,
          data: [...payload.products],
          productsLoading: payload.status,
        };

      if (payload.categories)
        return {
          ...state,
          categoriesData: [...payload.categoriesData],
          categories: {...payload.categories},
          productsLoading: payload.status,
        };
    case LOW_TO_HIGH:
      return {...state, sortBy: type};
    case HIGH_TO_lOW:
      return {...state, sortBy: type};
    case PRICE:
      return {...state, price: price_value};
    case PHONES:
      return {
        ...state,
        categories: {
          ...state["categories"],
          phones: !state.categories.phones,
        },
      };
    case LAPTOP:
      return {
        ...state,
        categories: {
          ...state["categories"],
          laptop: !state.categories.laptop,
        },
      };
    case GAMING_LAPTOPS:
      return {
        ...state,
        categories: {
          ...state["categories"],
          gaming_laptops: !state.categories.gaming_laptops,
        },
      };
    case CPU:
      return {
        ...state,
        categories: {
          ...state["categories"],
          cpu: !state.categories.cpu,
        },
      };
    case RATING:
      return {
        ...state, rating: parseInt(value, 10),
      };
    case DISCOUNT:
      return {...state, discount: parseInt(value, 10)};
    case CLEAR:
      return {
        ...state,
        sortBy: "",
        categories: {
          phones: false,
          laptop: false,
          gaming_laptops: false,
          cpu: false,
        },
        price: 100000,
        discount: "",
        rating: 1,
      };
    case LOADING_DATA:
      return {...state, productsLoading: payload.status};
    case SEARCH:{
      return {...state, searchText: payload.searchInput};
    }
    default:
      return state;
  }
};
