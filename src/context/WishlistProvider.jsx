import React, {
	createContext,
	useReducer,
	useContext,
} from "react";
import {
	WishlistInitialState,
	WishlistReducer,
} from "../reducer/WishlistReducer";

const WishlistContext = createContext(
	WishlistInitialState
);

function WishlistProvider({ children }) {
	const [state, dispatch] = useReducer(
		WishlistReducer,
		WishlistInitialState
	);

	const addToWishlist = (product) => {
		const updateWishlist =
			state.WishlistProducts.concat(product);
		dispatch({
			type: "ADD_TO_WISHLIST",
			payload: {
				WishlistProducts: updateWishlist,
			},
		});
	};

	const removeFromWishlist = (product) => {
		const updateWishlist =
			state.WishlistProducts.filter(
				(currentProducts) =>
					currentProducts.name !==
					product.name
			);
		dispatch({
			type: "REMOVE_FROM_WISHLIST",
			payload: {
				WishlistProducts: updateWishlist,
			},
		});
	};

	const value = {
		total: state.total,
		WishlistProducts: state.WishlistProducts,
		addToWishlist,
		removeFromWishlist,
	};

	return (
		<>
			<WishlistContext.Provider
				value={value}
			>
				{children}
			</WishlistContext.Provider>
		</>
	);
}

const UseWishlist = () =>
	useContext(WishlistContext);

export { UseWishlist, WishlistProvider };
