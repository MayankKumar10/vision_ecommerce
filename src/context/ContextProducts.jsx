import React, {
	createContext,
	useContext,
} from "react";

import { ReducerProducts } from "../reducer/ReducerProducts";

export const reducerFunc = (
	state,
	{ type, Payload }
) => {
	switch (type) {
		case "LOADING":
			return { ...state, loading: true };
		case "SUCCESS":
			return {
				...state,
				loading: false,
				data: Payload,
			};
		case "ERROR":
			return {
				...state,
				loading: false,
				error: Payload,
			};
		default:
			return state;
	}
};

const ProductContext = createContext({
	productState: { ...reducerFunc },
	productDispatch: () => {},
});

function ContextProducts({ children }) {
	const getAPI = {
		Api: "/api/products",
		property: "products",
	};

	const {
		state: productState,
		dispatch: productDispatch,
	} = ReducerProducts(getAPI);

	const { products, loading } = productState;

	return (
		<>
			<ProductContext.Provider
				value={{
					productState,
					productDispatch,
				}}
			>
				{children}
			</ProductContext.Provider>
		</>
	);
}

const AllProducts = () =>
	useContext(ProductContext);

export { AllProducts, ContextProducts };
