const FilterInitialState = {
	category: {
		Laptop: false,
		Gaming_Laptops: false,
		CPU: false,
		Phones: false,
	},
	rating: "",
	sortBy: "",
	price: 100000,
};

const FilterReducer = (
	state,
	{ type, payload }
) => {
	switch (type) {
		case "LOW_TO_HIGH":
			return { ...state, sortBy: type };

		case "HIGH_TO_LOW":
			return { ...state, sortBy: type };

		case "GAMING_LAPTOPS":
			return {
				...state,
				category: {
					...state["category"],
					Gaming_Laptops:
						!state.category.Gaming_Laptops,
				},
			};
		case "LAPTOP":
			return {
				...state,
				category: {
					...state["category"],
					Laptop: !state.category.Laptop,
				},
			};
		case "CPU":
			return {
				...state,
				category: {
					...state["category"],
					CPU: !state.category.CPU,
				},
			};
		case "PHONES":
			return {
				...state,
				category: {
					...state["category"],
					Phones: !state.category.Phones,
				},
			};
		case "PRICE":
			return {
				...state,
				price: payload,
			};
		case "RATING":
			return {
				...state,
				rating: Number(payload, 1),
			};
		case "CLEAR":
			return {
				...FilterInitialState,
			};
		default:
			return state;
	}
};

export { FilterInitialState, FilterReducer };
