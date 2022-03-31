import React, {
	useState,
	useEffect,
} from "react";
import {
	MdFavorite,
	MdAddShoppingCart,
} from "react-icons/md";
import { CartProducts } from "../../context/CartProvider";
import { UseWishlist } from "../../context/WishlistProvider";
import "../../styles/root.css";
import { WishlistButton } from "../WishList/WishlistButton.styled";

export const TrendingCard = ({ props }) => {
	const {
		id,
		brand,
		name,
		price,
		discountedPrice,
		img,
		category,
		rating,
	} = props;

	const {
		products,
		addToCart,
		removeFromCart,
	} = CartProducts();

	const {
		WishlistProducts,
		addToWishlist,
		removeFromWishlist,
	} = UseWishlist();

	const [isInCart, setIsInCart] =
		useState(false);

	const [isInWishlist, setIsInWishlist] =
		useState(false);

	useEffect(() => {
		const productIsInCart = products.find(
			(product) => product.name === name
		);

		const productIsInWishlist =
			WishlistProducts.find(
				(product) => product.name === name
			);

		if (productIsInWishlist) {
			setIsInWishlist(true);
		} else {
			setIsInWishlist(false);
		}

		if (productIsInCart) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [WishlistProducts, products, name]);

	const handleClick = () => {
		const product = {
			id,
			brand,
			name,
			price,
			discountedPrice,
			img,
			category,
			rating,
		};

		if (isInCart) {
			removeFromCart(product);
			console.log("remove", isInCart);
		} else {
			addToCart(product);
			console.log("add", isInCart);
		}
	};

	const handleWishlist = () => {
		const product = {
			id,
			brand,
			name,
			price,
			discountedPrice,
			img,
			category,
			rating,
		};

		if (isInWishlist) {
			removeFromWishlist(product);
			console.log(
				"remove wishlist",
				isInWishlist
			);
		} else {
			console.log(
				"Add wishlist",
				isInWishlist
			);
			addToWishlist(product);
		}
	};

	return (
		<>
			{/* <!-------------------------Card Container start--------------------------> */}
			<div
				className="card-container buttonHoverShadow"
				key={id}
			>
				<span
					className="card-container card-box cardBadge box-shadow"
					data-label="Trending"
				>
					<section className="img-card-offer padding-normal">
						<img
							className="imgcard"
							src={img}
							alt="{img}"
						/>

						<WishlistButton
							className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
							onClick={handleWishlist}
							isInWishlist={isInWishlist}
						>
							<MdFavorite size="25" />
						</WishlistButton>
					</section>

					<span className="card-text-container card-brand-text">
						<span className="card-description">
							<h5>
								Product description One
							</h5>
							<p>
								Lorem ipsum dolor sit amet
								consectetur adipisicing elit.
							</p>
							<span className="rating-container"></span>
							<h6>{category}</h6>
						</span>

						<span className="card-container-price-icons card-footer">
							<span className="card-price">
								<span>
									${discountedPrice}
								</span>
								<del>${price}</del>
							</span>
							<span className="optionContainer">
								<button
									className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal"
									onClick={handleClick}
									value={isInCart}
								>
									{isInCart
										? "GoToCart"
										: "Add"}
									<MdAddShoppingCart size="25" />
								</button>
							</span>
						</span>
					</span>
				</span>
			</div>
			{/* <!-------------------------Card Container end--------------------------> */}
		</>
	);
};
