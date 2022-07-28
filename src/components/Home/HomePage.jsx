import React from "react";
import "../../styles/root.css";
import { Link } from "react-router-dom";
import {
	vision_img,
	quality,
	fast_delivery,
	support,
	warranty,
	cpu,
} from "../../assets/images";
import { AllProducts } from "../../context/ContextProducts";
import { Loader } from "../Loader/Loader";

import { TrendingCard } from "../";
import { UseFilter } from "../../context/FilterProvider";
import { ReducerProducts } from "../../reducer/ReducerProducts";
import { BestSellingCard } from "../Cards/BestSellingCard";
import { getRatedProducts } from "../../helperFunctions";
import { useProducts } from "../../context";
import {useUserData} from '../../context/UserDataProvider'

export function HomePage() {
	const {productState} = useProducts();
  const {
    data,
    sortBy,
    price,
    categories,
    rating,
    discount,
    productsLoading,
    searchText,
  } = productState;
  let products = [...data];

	const {loading} = useUserData();

	const TrendingCartProducts = getRatedProducts(
		products,
		5
	);

	return (
		<>
			<main className="col-12">
				<div className="big-container">
					<img
						className="imageContainer"
						src={vision_img}
						width="900"
						height="700"
						alt="homePage_img"
					/>

					<div className="video-inner-container">
						<section className="leftIcon"></section>
						<section className="main-text-container">
							<div className="text-section-one">
								<h1>Vision Products</h1>
								<p className="text-large discriptionOne">
									Bring Vision into your
									Lifestyle
								</p>
							</div>

							<div className="text-section-two">
								<h4>Flat 30% off</h4>
								<button className="header-btn transparent-bg button-normal ButtonDomContainer buttonHoverShadow">
									<Link
										className="headerAnchorTag flex-column-center"
										to="/products"
									>
										<span className="button-inner-txt">
											Products
										</span>
									</Link>
								</button>
							</div>
						</section>
						<section className="rightIcon"></section>
					</div>
				</div>

				{/*----------------Service Card Section----------------*/}
				<section>
					<div className="sm-card-main-container flex-space-evenly col-11">
						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition">
							<img
								className="sm-card-icons"
								src={quality}
								alt="quality"
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Best Quality
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertWarning imgTransition">
							<img
								className="sm-card-icons"
								src={fast_delivery}
								alt="fast_delivery"
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Fast Delivery
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertInfo imgTransition">
							<img
								className="sm-card-icons"
								src={support}
								alt="support"
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Customer Support
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertSuccess imgTransition">
							<img
								className="sm-card-icons"
								src={warranty}
								alt="warranty"
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Warranty
							</h3>
						</div>
					</div>
				</section>
				
			</main>
		</>
	);
}

export default HomePage;
