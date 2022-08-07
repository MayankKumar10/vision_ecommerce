import React, { useEffect, useState } from 'react'
import { addToCartAPI, removeProductWishlistAPI } from '../../API';
import { useAuth } from '../../context';
import {  MdAddShoppingCart} from "react-icons/md";
import { useUserData } from '../../context/UserDataProvider';
import { actionTypes } from '../../reducer/actionTypes';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const WishlistCard = ({product}) => {
  const {userDataState, userDataDispatch} = useUserData();
  const {cartProducts,wishlistProducts} = userDataState;
  const navigate = useNavigate();
  const {auth} = useAuth();

  const { SET_CART, SET_WISHLIST } =
	actionTypes;
  
  const [isInCart, setIsInCart] =
		useState(false);

	const [isInWishlist, setIsInWishlist] =
		useState(false);

    
    const addToCartCall = async () => {
      try{
        const res = await addToCartAPI(product, auth.token);
        console.log('res add to cart:', res)
        
        console.log('isInCart',isInCart)

        if(res.status === 201){
          setIsInCart(true);
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
    

  const removeFromWishlist = async (product) =>{
    try{
      const res = await removeProductWishlistAPI(product._id, auth.token);

      if(res.status === 200){
        setIsInWishlist(false)
        userDataDispatch({
          type: SET_WISHLIST,
          payload: {wishlist: res.data.wishlist}
        })
        console.log('res remove wishlistData:', res.data.wishlist )
      }
    }catch(err){
      toast.error(`couldn't remove from wishlist`);
      console.log('err', err);
    }
  }


  useEffect(() => {
    cartProducts.find((item)=> item._id === product._id) && setIsInCart(true);
    wishlistProducts.find((item)=> item._id === product._id) && setIsInWishlist(true);
  },[cartProducts, wishlistProducts]);

  
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
          <span className="rating-container"></span>
          <h6>{product.category}</h6>
        </span>

        <span className="card-container-price-icons card-footer">
          <span className="card-price">
            <span>
              ₹{product.discountedPrice}
            </span>
            <del>₹{product.price}</del>
          </span>
          <span className="optionContainer">
          {isInCart ?
          <button
          className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal cursor"
          value={isInCart}
          onClick={()=>navigate('/cart')}
        >
         {"GoToCart"}    
          <MdAddShoppingCart size="25" />
        </button>
        :
          <button
            className="card-wishlist-icons buttonHoverShadow icons-btn-hover AvatarImage flex-row-center primary-btn padding-normal cursor"
            onClick={addToCartCall}
            value={isInCart}
          >
            {"Add"}
            <MdAddShoppingCart size="25" />
          </button>  
        }
          
          </span>
        </span>
      </span>

      <span></span>
      <button
        className="delete-icon 
        buttonHoverShadow card-wishlist-icons cursor"
        onClick={(e) =>
          removeFromWishlist(product)
        }
      >
        <i className="material-icons cart-material-icons">
          delete
        </i>
      </button>
    </div>
  );
}
