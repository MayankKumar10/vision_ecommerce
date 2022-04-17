import React from "react";
import { UseFilter } from "../../context/FilterProvider";

export function Filter() {
	const { state, dispatch } = UseFilter();
	const { sortBy, category, price, rating } =
		state;
	const {
		Laptop,
		Gaming_Laptops,
		CPU,
		Phones,
	} = category;

	return (
		<>
			<nav className="filter-container box-shadow col-3">
				<form>
					<section className="filter-section flex-row-spc-btw">
						<h4 className="padding-normal">
							Filter
						</h4>
						<button
							className="padding-normal button-transparent"
							onClick={() =>
								dispatch({ type: "CLEAR" })
							}
						>
							<input
								className="button-transparent text-large"
								type="reset"
								value="Clear"
							/>
						</button>
					</section>

					<section className="filter-categories flex-column-start">
						<h4>Price</h4>
						<span className="flex padding-normal-left0">
							<>
								<h5>$0</h5>
								<input
									type="range"
									className="rangeInput"
									name=""
									id=""
									step="10000"
									min="10000"
									max="100000"
									value={price}
									onChange={(e) =>
										dispatch({
											type: "PRICE",
											payload:
												e.target.value,
										})
									}
								/>
								<h5>${price}</h5>
							</>
						</span>
					</section>

					<section className="filter-categories flex-column-start">
						<h4>Category</h4>

						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="checkbox"
								name="Laptop"
								value="Laptop"
								checked={Laptop}
								onChange={(e) =>
									dispatch({
										type: "LAPTOP",
									})
								}
							/>
							<span className="padding-small-left1">
								Laptop
							</span>
						</span>

						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="checkbox"
								name="Gaming_Laptops"
								value="Gaming_Laptops"
								checked={Gaming_Laptops}
								onChange={(e) =>
									dispatch({
										type: "GAMING_LAPTOPS",
									})
								}
							/>
							<span className="padding-small-left1">
								Gaming Laptops
							</span>
						</span>

						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="checkbox"
								name="CPU"
								value="CPU"
								checked={CPU}
								onChange={(e) =>
									dispatch({ type: "CPU" })
								}
							/>
							<span className="padding-small-left1">
								CPU
							</span>
						</span>

						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="checkbox"
								name="Phones"
								value="Phones"
								checked={Phones}
								onChange={(e) =>
									dispatch({
										type: "PHONES",
									})
								}
							/>
							<span className="padding-small-left1">
								Phones
							</span>
						</span>
					</section>

					<section className="filter-categories flex-column-start">
						<h4>Rating</h4>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="rating"
								checked={rating === 4}
								value="4"
								onChange={(e) =>
									dispatch({
										type: "RATING",
										payload: e.target.value,
									})
								}
							/>
							<p className="padding-small-left1">
								4 Stars & Above
							</p>
						</span>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="rating"
								checked={rating === 3}
								value="3"
								onChange={(e) =>
									dispatch({
										type: "RATING",
										payload: e.target.value,
									})
								}
							/>
							<p className="padding-small-left1">
								3 Stars & Above
							</p>
						</span>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="rating"
								checked={rating === 2}
								value="2"
								onChange={(e) =>
									dispatch({
										type: "RATING",
										payload: e.target.value,
									})
								}
							/>
							<p className="padding-small-left1">
								2 Stars & Above
							</p>
						</span>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="rating"
								value="1"
								checked={rating === 1}
								onChange={(e) =>
									dispatch({
										type: "RATING",
										payload: e.target.value,
									})
								}
							/>
							<p className="padding-small-left1">
								1 Stars & Above
							</p>
						</span>
					</section>

					<section className="filter-categories flex-column-start">
						<h4>Sort by</h4>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="sortBy"
								value="lowToHigh"
								checked={
									sortBy === "LOW_TO_HIGH"
								}
								onChange={(e) =>
									dispatch({
										type: "LOW_TO_HIGH",
									})
								}
							/>
							<p className="padding-small-left1">
								Price-Low to High
							</p>
						</span>
						<span className="flex padding-normal-left0">
							<input
								className="input-radio"
								type="radio"
								name="sortBy"
								value="lowToHigh"
								checked={
									sortBy === "HIGH_TO_LOW"
								}
								onChange={(e) =>
									dispatch({
										type: "HIGH_TO_LOW",
									})
								}
							/>
							<p className="padding-small-left1">
								Price-High to Low
							</p>
						</span>
					</section>
				</form>
			</nav>
		</>
	);
}

export default Filter;
