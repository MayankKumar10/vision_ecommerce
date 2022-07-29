import React from "react";
import "../../styles/root.css";
import { Link, useNavigate } from "react-router-dom";
import {
	vision_img,
	quality,
	fast_delivery,
	support,
	warranty,
	cpu,
	lapi,
	Phone,
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
import {actionTypes} from '../../reducer/actionTypes'

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

	const { PHONES, LAPTOP,
		GAMING_LAPTOPS, CPU, CLEAR} = actionTypes;

	const {productDispatch} = useProducts();
	const navigate = useNavigate();

	const selectProductHandler = (val) =>{
		productDispatch({ type: CLEAR });
		productDispatch({ type: val });
		navigate('/products')
	}

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

					{/* <!-------------------------------BestSelling Products-------------------------------> */}

					<section className="padding-top-normal1">
					<h2>BestSelling Products</h2>
					<div className="mid-card-main-container flex-space-evenly AlertInfo col-12">
						
						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition"
						onClick={()=> selectProductHandler(LAPTOP)}
						>
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src={lapi}
									alt="cpu"
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
									Laptop
									</h5>
									
								</span>

								
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertWarning imgTransition"
						onClick={()=> selectProductHandler(GAMING_LAPTOPS)}
						>
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src={lapi}
									alt="cpu"
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Gaming Laptops
									</h5>
									
								</span>

								
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition"
						onClick={()=> selectProductHandler(CPU)}
						>
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src={cpu}
									alt="cpu"
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										CPU
									</h5>
									
								</span>

								
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertSuccess imgTransition"
						onClick={()=> selectProductHandler(PHONES)}
						>
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src={Phone}
									alt="cpu"
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Phones
									</h5>
									
								</span>

								
							</span>
						</div>
					</div>
				</section>

				{/* <!-------------------------------BestSelling Products End-------------------------------> */}
				
			</main>
		</>
	);
}

export default HomePage;
