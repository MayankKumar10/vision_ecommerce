import React, {
	useState,
	useEffect,
} from "react";
import { UseWishlist } from "../../context/WishlistProvider";
import "../../styles/root.css";
import { UserNav } from "../index";
import {
	MdFavorite,
	MdAddShoppingCart,
} from "react-icons/md";
import { WishlistButton } from "./WishlistButton.styled";

export function WishList() {
	const {
		WishlistProducts,
		addToWishlist,
		removeFromWishlist,
	} = UseWishlist();

	return (
		<>
			<div className="user-main-container flex-space-evenly-start">
				<section className="user-avatar col-3">
					<div className="user-container-avatar padding-normal box-shadow flex ">
						<span className="avatar-img-container">
							<img
								className="avatar-img"
								src="../images/steve.jpg"
								alt=""
								srcset=""
							/>
						</span>

						<span className="padding-small-left1">
							<p>Hello,</p>
							<p>Mayank Kumar</p>
						</span>
					</div>

					<UserNav className="user-nav-main-container padding-normal box-shadow " />
				</section>
				<main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
					<p className="wishlist-text padding-normal">
						My Wishlist (
						{WishlistProducts.length})
					</p>

					{WishlistProducts.map(
						(product) => {
							return (
								<div
									className="wishlist-card-container"
									key={product.id}
								>
									<div className="card-container-horizontal flex-column-start">
										<section className="cart-product flex-column-center">
											<section className="flex-row-start">
												<img
													className="imgcard"
													src={product.img}
													alt="product-img"
												/>
											</section>
										</section>
									</div>

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
											<span className="optionContainer">
												<button
													className="card-wishlist-icons buttonHoverShadow icons-btn-hover
        AvatarImage flex-row-center primary-btn padding-normal"
												>
													Add
													<i className="material-icons ">
														add_shopping_cart
													</i>
												</button>
											</span>
										</span>
									</span>

									<span></span>
									<button
										className="delete-icon 
    buttonHoverShadow card-wishlist-icons"
										onClick={(e) =>
											removeFromWishlist(
												product
											)
										}
									>
										<i className="material-icons cart-material-icons">
											delete
										</i>
									</button>
								</div>
							);
						}
					)}
				</main>
			</div>
		</>
	);
}

export default WishList;
