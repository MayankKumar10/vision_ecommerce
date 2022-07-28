import React, {
	useState,
	useEffect,
} from "react";
import {
	MdFavorite,
	MdAddShoppingCart,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addToCartAPI, addToWishlistAPI, removeProductWishlistAPI } from "../../API";
import { useAuth } from "../../context";
import { useUserData } from "../../context/UserDataProvider";
import { actionTypes } from "../../reducer/actionTypes";
import "../../styles/root.css";
import { WishlistButton } from "../WishList/WishlistButton.styled";


	// export const addRemoveFunction = async({props}) =>{

	// 	const {
	// 		setState,
	// 		API,
	// 		product,
	// 		token,
	// 		status,
	// 		dispatch,
	// 		type,
	// 		payload,
	// 		successTxt,
	// 		errorTxt,
	// 	} = props

	// 	try{
	// 		var res = await API(product, token);
	// 		console.log(res);
	// 		if(res.status === status){
	// 		//	toast.success(`${successTxt}`)
	// 		setState(true);
		
	// 		dispatch({
	// 			type:type,
	// 			payload: {payloadOne: res.data.payloadOne}
	// 		})
	// 		console.log('res.status',res.status);
	// 		console.log('dispatch:', dispatch);
	// 		}
			
	// 	}catch(err){
	// 		console.log('Error AddRemoveFunction', err);
	// 		console.log('payloadOne',payload.payloadOne);
	// 		console.log('dispatch:', dispatch);
	// 		console.log('API', API);
	// 	}
	// }



function NormalCard({product}) {
	const {
		id,
		brand,
		name,
		price,
		discountedPrice,
		img,
		category,
		rating,
		quantity,
	} = product;


	const [isInCart, setIsInCart] =
		useState(false);

	const [isInWishlist, setIsInWishlist] =
		useState(false);

	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false)
	const [addToCartState, setAddToCartState] = useState(false);
	const {auth} = useAuth();
	const {userDataState, userDataDispatch} = useUserData();
	const {cartProducts, wishlistProducts} = userDataState;
	const { SET_CART, SET_WISHLIST } =
	actionTypes;

	const navigate = useNavigate();

 

// const addToCartInitialState = {
// 	setState: setAddToCartState,
// 	API: addToCartAPI,
// 	props: product,
// 	token: auth.token,
// 	status: 201,
// 	dispatch: userDataDispatch,
// 	type: SET_CART,
// 	payload:{payloadOne:'cart'},
// 	successTxt:'',
// 	errorTxt:'',
// }


// const addItemToCart = () => addRemoveFunction(addToCartInitialState)

// console.log('addToCartInitialState',addToCartInitialState);


const addToCartCall = async () => {

	setAddToCartState(true);
	try{
		const res = await addToCartAPI(product, auth.token);
		console.log('res add to cart:', res)
	
		if(res.status === 201){
			setAddToCartState(false);
			userDataDispatch({
				type: SET_CART,
				payload: {cart: res.data.cart},
			});
			console.log('cartProducts:', cartProducts)
			console.log('product:', product)
		}

	}catch(err){
		console.log('Add to cart Error', err);
	}
};

const addToWishlistCall = async()=>{
		try{
			const res = await addToWishlistAPI(product, auth.token);
			console.log('res wishlist:', res )
			if(res.status === 201){
				//toast.success('');
				setIsInWishlist(true)
				userDataDispatch({
					type: SET_WISHLIST,
					payload: {wishlist: res.data.wishlist}
				})
				console.log('res wishlistData:', res.data.wishlist );
				console.log('wishlist length:', wishlistProducts.length);
			}
		}catch(err){
			//toast.error('couldn't add to wishlist');
		}
	}

const removeWishlist = async () =>{
	try{
		const res = await removeProductWishlistAPI(product._id, auth.token);
		if(res.status === 200){
			setIsInWishlist(false)
			userDataDispatch({
				type: SET_WISHLIST,
				payload: {wishlist: res.data.wishlist}
			})
			console.log('res remove wishlistData:', res.data.wishlist);
			console.log('wishlist length:', wishlistProducts.length);
		}
	}catch(err){
		//toast.error('couldn't remove from wishlist');
		console.log('err', err);
	}
}

useEffect(() => {
	cartProducts.find((item)=> item._id === product._id) && setIsInCart(true);
	wishlistProducts.find((item)=> item._id === product._id) && setIsInWishlist(true);
},[cartProducts, wishlistProducts]);

	
	return (
		<>
			<div
				className="card-container buttonHoverShadow"
				key={id}
			>
				<section className="flex-row-start">
					<img
						className="imgcard"
						src={img}
						alt="{img}"
					/>
					<WishlistButton
						className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
						onClick={auth.isAuth
							? isInWishlist
								? removeWishlist
								: addToWishlistCall 
						: navigate('/login')
							}	
							isInWishlist={isInWishlist}
					>
					
						<MdFavorite size="25" />
					</WishlistButton>
				</section>
				<span className="card-text-container card-brand-text">
					<span className="card-description">
						<h5>{name}</h5>
						<span className="rating-container"></span>
						<h6>{category}</h6>
					</span>

					<span className="card-container-price-icons card-footer">
						<span className="card-price">
							<span>₹{discountedPrice}</span>
							<del>₹{price}</del>
						</span>
						<span className="optionContainer">
							<button
								className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal"
								onClick={addToCartCall}
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
			</div>
		</>
	);
}

export { NormalCard };
