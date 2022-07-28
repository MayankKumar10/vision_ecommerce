import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import {emptyCart} from "../../assets/images";
import {CartProducts} from "../../context/CartProvider";
import { useUserData } from "../../context/UserDataProvider";
import { billGenerator } from "../../helperFunctions";
import {BsTagFill, BsXCircleFill} from "react-icons/bs";
import { CartProductsCard } from "./CartProductsCard";

export function Cart() {
  const {userDataState} = useUserData();
  const {cartProducts} = userDataState;
  const [total, setTotal] = useState(0);
  const [priceSum, discountedPriceSum] = billGenerator(cartProducts);
	let totalBill = priceSum - discountedPriceSum;
	const [showModal, setShowModal] = useState(false);

	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: '#fff',
		border: '2px solid #000',
		boxShadow: 24,
		borderRadius:'2rem',
		p: 4,
	};

	const couponsData = [
		{
			id: 1,
			name: "1st buy Sale Offer",
			description: "Get Rs2000 off on minimum purchase of Rs.20000",
			minPurchase: 20000,
			amount:2000,
		},
		{
			id: 2,
			name: "Summer Sale OFFER",
			description: "Get 20% off on minimum purchase of Rs.10000",
			minPurchase: 10000,
			discount: 20,
		},
	];
	const [couponSelected, setCouponSelected] = useState([]);
	const [couponDiscount, setCouponsDiscount] = useState(0); //context

  useEffect(() => {
		let total = 0;
		couponSelected.forEach((coupon) => {
			if (coupon.amount) total += coupon.amount;
			else total += (totalBill * coupon.discount) / 100;
		});
		setCouponsDiscount(total);
	}, [couponSelected]);

	useEffect(
		() =>
			setCouponSelected(
				couponSelected.filter(
					(coupon) => coupon.minPurchase <= totalBill - couponDiscount
				)
			),
		[totalBill]
	);
	const deliveryFee = totalBill - couponDiscount > 10000 ? 0 : 200;

  return (
    <>
      {showModal && (
				<div>
					<div className="overlay"></div>
					<div className="modal-center modal holo-bg">
						<div className="padding-xxs flex-space-between">
							<span>Select coupon</span>
              <BsXCircleFill class='close-btn' onClick={()=> setShowModal(false)} size="15" />
						</div>

						<div className="modalContainer">
							<ul className="flex-column gap-s">
								{couponsData.map((coupon) => (
									<li
										className={`modal-item gap-s ${
											totalBill >= coupon.minPurchase ? "" : "btn-disabled"
										}`}
										key={coupon.id}
									>
										<label htmlFor={`${coupon.name}`} class="flex-row gap-s">
											<input
												type="checkbox"
												className="input-checkbox"
												checked={couponSelected.some(
													(currCoupon) => currCoupon.id === coupon.id
												)}
												onChange={(e) => {
													e.target.checked
														? setCouponSelected((prev) => [...prev, coupon])
														: setCouponSelected(
																couponSelected.filter((curr) => {
																	return curr.id !== coupon.id;
																})
														  );
												}}
											/>
										</label>
										<div className="flex-column">
											<span>{`${coupon.name}`}</span>
											<span>{`${coupon.description}`}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
  

      <div className="user-main-container flex-space-evenly-start">
        <main className="product-container border-radius-normal box-shadow col-7">
          <p className="wishlist-text padding-normal">
            My Cart(
            {cartProducts.length})
          </p>
          {cartProducts.length < 1 ? (
            <>
              <p>Add Some Items To Cart</p>
              <img src={emptyCart} alt="empty-wishlist" />
            </>
          ) : (
            cartProducts.map((product) => (
             <CartProductsCard key={product.id} product={product} />
            ))
          )}
        </main>

        <nav className=" margin-normal-left border-radius-normal box-shadow col-4">

        <div class="border-dark txt-bold padding-xs pointer padding-normal">
					<span
						onClick={() => setShowModal(true)}
						className="flex-align-center padding-normal header-btn transparent-bg button-normal buttonHoverShadow"
					>
						<BsTagFill size="25" />APPLY COUPONS
					</span>
				</div>
      

          <p className="wishlist-text padding-normal">
            Price Details
          </p>

          <section className="flex-column-start">
            <section className="flex-space-between cart-checkout">
              <h4>Price </h4>
              <span>
                ₹{priceSum}
              </span>
            </section>

            <section className="flex-space-between cart-checkout">
              <h4>Discount</h4>
              <span>-₹{discountedPriceSum}</span>
            </section>
            
            
            {couponDiscount ? (
						<section className="flex-space-between cart-checkout">
            <h4>Coupons discount</h4>
            <span>
              -₹{couponDiscount}
            </span>
          </section>
					) : null}

            <section className="flex-space-between cart-checkout">
              <h4>Delivery Charges</h4>
              <span>{deliveryFee >= 0  ? `₹${deliveryFee}` : 'Free'}</span>
            </section>
          </section>

          <section className="flex-space-between cart-checkout">
            <h3>Total Amount</h3>
            <span>₹ {Math.floor(totalBill - couponDiscount)}</span>
          </section>

          <section className="flex-space-between cart-checkout">
          {deliveryFee > 0 ? (
					<h5>
						Add items worth Rs.{1000 - totalBill - couponDiscount} to be
						eligible for free delivery
					</h5>
				) : null}
				  {couponDiscount + discountedPriceSum > 0 ? (
					<h5 className="cartSavedTxt">{`You saved Rs.${
						couponDiscount + discountedPriceSum
					}`}</h5>
				) : null}
          </section>
          

          <section className="flex-row-center padding-normal">
            <button className="buy-btn  ButtonDomContainer button-Shadow"
							onClick={handleOpen}>
              Place Order
            </button>
          </section>

					{open &&
					<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Your Order has been Placed
						</Typography>
						{cartProducts.map((product)=>
						<Box>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							{product.name}
						</Typography>
						 </Box>
						)}
						<h3>Total Amount</h3>
						 <span>₹ {Math.floor(totalBill - couponDiscount)}</span>
					</Box>
				</Modal>
					}
        </nav>
      </div>
    </>
  );
}

export default Cart;
