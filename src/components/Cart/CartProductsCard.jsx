import React, { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md';
import { cartCounterAPI, removeProductCartAPI } from '../../API';
import { useAuth } from '../../context';
import { CartProducts } from '../../context/CartProvider';
import { useUserData } from '../../context/UserDataProvider';
import { actionTypes } from '../../reducer/actionTypes';
import { WishlistButton } from '../WishList/WishlistButton.styled';

export const CartProductsCard = ({product}) => {
  const {userDataState:{wishlistProducts}, userDataDispatch} = useUserData();
  const {auth} = useAuth();
  const {SET_CART, SET_WISHLIST} = actionTypes;
  const [updatingCart, setUpdatingCart] = useState(false);
  const [isInWishlist, setIsInWishlist] =
  useState(false);



const removeProduct = async() => {
  try{
    const res = await removeProductCartAPI(product._id, auth.token)
    if(res.status === 200){
      userDataDispatch({
        type: SET_CART,
        payload: {cart: res.data.cart}
      })
    }
  }catch(err){
    //toast.error('err');
    console.log('Error From Cart:', err)
  }  

  };

  const handleChange = async(CMD) => {
    let res = null;
    try{
      if(product.qty === 1 && CMD === 'decrement'){
        res = await removeProductCartAPI(product._id, auth.token);
        console.log('product qty:',product.qty)
        console.log('res remove:', res.data)
      } else{
        res = await cartCounterAPI(product._id, auth.token, CMD);
        console.log('res add:',res)
        console.log('product:', product.qty)
      }

      if(res.status === 200){
        //toast.success('success Text');
        console.log('Successfully updated cart');
        console.log('product name:',product.qty)
        

        userDataDispatch({
          type: SET_CART,
          payload: {cart: res.data.cart}
        })
      }
    }
    catch(err){
      // toast.error('couldn't remove from wishlist')
      console.log('Error increment');
    }
  }

  useEffect(() => {
    wishlistProducts.find((item)=> item._id === product._id) && setIsInWishlist(true);
  },[wishlistProducts]);

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
            <WishlistButton
						className="material-icons-text card-wishlist-icons buttonHoverShadow AvatarImage AvatarIcons flex-row-center"
						// onClick={auth.isAuth
						// 	? isInWishlist
						// 		? removeWishlist
						// 		: addToWishlistCall 
						// : navigate('/login')
						// 	}	
							isInWishlist={isInWishlist}
					>
					
						<MdFavorite size="25" />
					</WishlistButton>
          </section>

          <section className="flex-row-center">
            <div className="AvatarDomMainContainer">
              <button
                className="form-signup-icons"
                onClick={() =>
                  handleChange("decrement")}
              >
                <i className="material-icons cart-material-icons AvatarImage box-shadow AvatarIcons flex-row-center">
                  remove
                </i>
              </button>
            </div>
            <span className="cart-input-container">
              <input
                type="number"
                className="cart-items-input input-range-container"
                value={product.qty}
              />
            </span>
            <div className="AvatarDomMainContainer">
              <button
                className="form-signup-icons"
                onClick={() =>handleChange("increment")}
                >
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
           
            <span className="rating-container"></span>
            <h6>{product.category}</h6>
          </span>

          <span className="card-container-price-icons card-footer">
            <span className="card-price">
              <span>
                ₹{product.discountedPrice}
              </span>
              <del> ₹{product.price}</del>
            </span>
          </span>
        </span>

        <span></span>
        <button
          className="delete-icon 
buttonHoverShadow card-wishlist-icons"
          onClick={() => removeProduct(product)}
        >
          <i className="material-icons cart-material-icons">
            delete
          </i>
        </button>
      </div>
      <hr />
    </div>
  );
}
