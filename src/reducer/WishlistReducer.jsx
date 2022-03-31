const WishlistInitialState = {
	total: 0,
	WishlistProducts: [],
};

const WishlistReducer = (
	state,
	{ type, payload }
) => {
	switch (type) {
		case "ADD_TO_WISHLIST":
			console.log(
				"ADD_TO_WISHLIST",
				payload.WishlistProducts
			);
			return {
				...state,
				WishlistProducts:
					payload.WishlistProducts,
			};
		case "REMOVE_FROM_WISHLIST":
			console.log(
				"REMOVE_FROM_WISHLIST",
				payload.WishlistProducts
			);
			return {
				...state,
				WishlistProducts:
					payload.WishlistProducts,
			};
		default:
			return { ...state };
	}
};

export {
	WishlistInitialState,
	WishlistReducer,
};
