import React from "react";
import "../../styles/root.css";
import { Link } from "react-router-dom";

export function HomePage() {
	return (
		<>
			<main className="col-12">
				<div className="big-container">
					<img
						className="imageContainer"
						src="../images/img2.webp"
						width="900"
						height="700"
						alt=""
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

				<section>
					<div className="sm-card-main-container flex-space-evenly col-11">
						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition">
							<img
								className="sm-card-icons"
								src="../images/quality.png"
								alt=""
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Best Quality
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertWarning imgTransition">
							<img
								className="sm-card-icons"
								src="../images/fast-delivery.png"
								alt=""
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Fast Delivery
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertInfo imgTransition">
							<img
								className="sm-card-icons"
								src="../images/support.png"
								alt=""
							/>
							<h3 className="sm-card-text padding-small-left1">
								Provide Customer Support
							</h3>
						</div>

						<div className="sm-card-container sm-card-shadow padding-normal flex-row-center AlertSuccess imgTransition">
							<img
								className="sm-card-icons"
								src="../images/warranty.png"
								alt=""
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
						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition">
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src="../images/pc-svg-1.svg"
									alt=""
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Product description One
									</h5>
									<span className="rating-container"></span>
									<h6>product type</h6>
								</span>

								<span className="card-container-price-icons card-footer">
									<span className="card-price">
										<span>$200</span>
										<del>$300</del>
									</span>
									<span className="optionContainer">
										<button className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal">
											Add
											<i className="material-icons">
												add_shopping_cart
											</i>
										</button>
									</span>
								</span>
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertWarning imgTransition">
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src="../images/pc-svg-1.svg"
									alt=""
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Product description One
									</h5>
									<span className="rating-container"></span>
									<h6>product type</h6>
								</span>

								<span className="card-container-price-icons card-footer">
									<span className="card-price">
										<span>$200</span>
										<del>$300</del>
									</span>
									<span className="optionContainer">
										<button className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal">
											Add
											<i className="material-icons">
												add_shopping_cart
											</i>
										</button>
									</span>
								</span>
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertError imgTransition">
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src="../images/pc-svg-1.svg"
									alt=""
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Product description One
									</h5>
									<span className="rating-container"></span>
									<h6>product type</h6>
								</span>

								<span className="card-container-price-icons card-footer">
									<span className="card-price">
										<span>$200</span>
										<del>$300</del>
									</span>
									<span className="optionContainer">
										<button className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal">
											Add
											<i className="material-icons">
												add_shopping_cart
											</i>
										</button>
									</span>
								</span>
							</span>
						</div>

						<div className="mid-card-container sm-card-shadow padding-normal flex-row-center AlertSuccess imgTransition">
							<section className="flex-row-start">
								<img
									className="margin-0 cart-img"
									src="../images/pc-svg-1.svg"
									alt=""
								/>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Product description One
									</h5>
									<span className="rating-container"></span>
									<h6>product type</h6>
								</span>

								<span className="card-container-price-icons card-footer">
									<span className="card-price">
										<span>$200</span>
										<del>$300</del>
									</span>
									<span className="optionContainer">
										<button className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal">
											Add
											<i className="material-icons">
												add_shopping_cart
											</i>
										</button>
									</span>
								</span>
							</span>
						</div>
					</div>
				</section>

				{/* <!-------------------------------BestSelling Products End-------------------------------> */}

				<div className="mid-container AlertError col-12">
					{/* <!-------------------------Card Container start--------------------------> */}
					<div className="card-container buttonHoverShadow">
						<span
							className="card-container card-box cardBadge box-shadow"
							data-label="Trending"
						>
							<section className="img-card-offer padding-normal">
								<img
									className="imgcard"
									src="../images/pc-svg-1.svg"
									alt=""
								/>
								<button className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center icon-wishlist">
									<i className="material-icons">
										favorite
									</i>
								</button>
							</section>

							<span className="card-text-container card-brand-text">
								<span className="card-description">
									<h5>
										Product description One
									</h5>
									<p>
										Lorem ipsum dolor sit
										amet consectetur
										adipisicing elit.
									</p>
									<span className="rating-container"></span>
									<h6>product type</h6>
								</span>

								<span className="card-container-price-icons card-footer">
									<span className="card-price">
										<span>$200</span>
										<del>$300</del>
									</span>
									<span className="optionContainer">
										<button className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal">
											Add
											<i className="material-icons">
												add_shopping_cart
											</i>
										</button>
									</span>
								</span>
							</span>
						</span>
					</div>
					{/* <!-------------------------Card Container end--------------------------> */}
				</div>
			</main>
		</>
	);
}

export default HomePage;
