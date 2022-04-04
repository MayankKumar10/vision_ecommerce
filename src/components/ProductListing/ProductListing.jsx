import React from "react";
import { UseFilter } from "../../context/FilterProvider";
import "../../styles/root.css";
import {
	Rating,
	Sort,
	Price,
	Category,
} from "../../utils/filter";
import { NormalCard } from "../Cards/NormalCard";
import Filter from "../Filter/Filter";
import { AllProducts } from "../../context/ContextProducts";
import { Loader } from "../Loader/Loader";

export function ProductListing() {
	const { productState } = AllProducts();
	const { data: products, loading } =
		productState;

	const { state } = UseFilter();
	const { category, price, sortBy, rating } =
		state;

	const priceFilter = Price(products, price);

	const ratingFilter = Rating(
		priceFilter,
		rating
	);

	const categoryFilter = Category(
		ratingFilter,
		category.Laptop,
		category.Gaming_Laptops,
		category.CPU,
		category.Phones
	);
	const sortFilter = Sort(
		categoryFilter,
		sortBy
	);

	return (
		<>
			<div class="product-list-container user-main-container flex-space-evenly-start container-bg">
				<Filter />
				<main class="product-container mid-container container-bg col-9">
					{loading ? (
						<Loader
							type="spinningBubbles"
							color="#fff"
						/>
					) : (
						sortFilter.length > 0 &&
						sortFilter.map((item) => (
							<NormalCard
								key={item.id}
								props={item}
							/>
						))
					)}
				</main>
			</div>
		</>
	);
}

export default ProductListing;
