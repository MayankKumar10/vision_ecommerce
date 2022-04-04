import React, { useEffect } from "react";
import { CartProducts } from "../../context/CartProvider";

export function Cart() {
	const { products, removeFromCart, total } =
		CartProducts();

	useEffect(() => {});

	let totalDisplayscont = total - 165;
	return (
		<>
			<div className="user-main-container flex-space-evenly-start">
				<main className="product-container border-radius-normal box-shadow col-7">
					<p className="wishlist-text padding-normal">
						My Cart({products.length})
					</p>
					{products.map((product) => {
						return (
							<div
								className="wishlist-card-container"
								key={product.id}
							>
								<div className="card-container-horizontal flex">
									<section className="cart-product flex-column-center">
										<section className="flex-row-start">
											<img
												className="imgcard cart-img"
												src={product.img}
												alt=""
											/>
											<button className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center icon-wishlist">
												<i className="material-icons ">
													favorite
												</i>
											</button>
										</section>

										<section className="flex-row-center">
											<div className="AvatarDomMainContainer">
												<button className="form-signup-icons">
													<i className="material-icons cart-material-icons AvatarImage box-shadow AvatarIcons flex-row-center">
														remove
													</i>
												</button>
											</div>
											<span className="cart-input-container">
												<input
													type="number"
													className="cart-items-input input-range-container"
													value={
														product.quantity
													}
												/>
											</span>
											<div className="AvatarDomMainContainer">
												<button className="form-signup-icons">
													<i className="material-icons cart-material-icons AvatarImage box-shadow AvatarIcons flex-row-center">
														add
													</i>
												</button>
											</div>
										</section>
									</section>
									<span className="card-text-container cart-brand-text">
										<span className="card-description">
											<h5>{product.name}</h5>
											<p>
												Lorem ipsum dolor sit
												amet consectetur
												adipisicing elit.
											</p>
											<span className="rating-container"></span>
											<h6>
												{product.category}
											</h6>
										</span>

										<span className="card-container-price-icons card-footer">
											<span className="card-price">
												<span>
													$
													{
														product.discountedPrice
													}
												</span>
												<del>
													${product.price}
												</del>
											</span>
										</span>
									</span>

									<span></span>
									<button
										className="delete-icon 
    buttonHoverShadow card-wishlist-icons"
										onClick={(e) =>
											removeFromCart(product)
										}
									>
										<i className="material-icons cart-material-icons">
											delete
										</i>
									</button>
								</div>
								<hr />
							</div>
						);
					})}
				</main>

				<nav className=" margin-normal-left border-radius-normal box-shadow col-4">
					<p className="wishlist-text padding-normal">
						Price Details
					</p>

					<section className="flex-column-start">
						<section className="flex-space-between cart-checkout">
							<h4>Price ({total.length})</h4>
							<span>${total}</span>
						</section>

						<section className="flex-space-between cart-checkout">
							<h4>Discount</h4>
							<span>-$200</span>
						</section>

						<section className="flex-space-between cart-checkout">
							<h4>Coupons for you</h4>
							<span>-$15</span>
						</section>

						<section className="flex-space-between cart-checkout">
							<h4>Delivery Charges</h4>
							<span>$50</span>
						</section>
					</section>

					<section className="flex-space-between cart-checkout">
						<h3>Total Amount</h3>
						<span>${totalDisplayscont}</span>
					</section>

					<section className="flex-row-center padding-normal">
						<button className="buy-btn  ButtonDomContainer button-Shadow">
							Place Order
						</button>
					</section>
				</nav>
			</div>
		</>
	);
}

export default Cart;
