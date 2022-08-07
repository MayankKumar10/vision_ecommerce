import React, { useEffect, useState } from "react";
import "../../styles/root.css";
import {
  MdCategory,
  MdFavorite,
  MdShoppingCart,
  MdPerson,
} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import {vision_logo} from "../../assets/images";
import { useUserData } from "../../context/UserDataProvider";
import { useAuth, useProducts } from "../../context";
import { useDebounce } from "../../helperFunctions/filterFunctions";
import { actionTypes } from "../../reducer/actionTypes";

export function Header() {
  const {productDispatch} = useProducts();
  const {SEARCH,RESET} = actionTypes;
  const navigate = useNavigate();
  const [searchInputState, setSearchInputState] = useState();
  const debounceSearchInput = useDebounce(searchInputState, 500);
  const {userDataState, userDataDispatch} = useUserData();
  const {cartProducts ,wishlistProducts} = userDataState;
  const {
		auth,
		setAuth
	} = useAuth();
  useEffect(()=>{
    productDispatch({
      type: SEARCH,
      payload: {searchInput: searchInputState}
    })
  }, [debounceSearchInput]);

 
  const logoutHandler = () =>{
		localStorage.clear();
		setAuth({
			token:'',
			isAuth: false,
			firstName: '',
			lastName: '',
			userEmail: '',
		});
		userDataDispatch({type: RESET})
		navigate('/');
	}

  return (
    <>
      <div className="ComponentMainBoxOne img-responsive ">
        <header className="headerContainerMain header-center Header-TextSize box-shadow ">
          <div className="headerContainerOne flex-evenly padding-small-left1">
            <Link to="/">
              <img
                className="logoImage"
                src={vision_logo}
                alt="vision_logo"
                width="100"
                height="100"
              />
            </Link>
            <h4>Vision Kart</h4>
          </div>

          <div className="headerContainerTwo flex padding-top-normal1">
            <form
              className="search-container-main"
              action="#"
            >
              <input
                className="boxShadow search-container"
                type="search"
                name=""
                placeholder="search"
                id=""
                value={searchInputState}
                onChange={(e)=>{
                  navigate('/products');
                  setSearchInputState(e.target.value)
                }}
              />
              <button className="material-icons button-transparent primary-btn"
              onClick={(e)=>{
                e.preventDefault();
                setSearchInputState('');
                productDispatch({
                  type: SEARCH,
                  payload:{ searchInput: ''}
                })
              }}
              >
                search
              </button>
            </form>

            <div className="iconsContainer flex-evenly">
              
              <Link
                className="headerAnchorTag flex-col-end  icons-btn-hover buttonHoverShadow"
                to="/products"
              >
                
                <span className='flex-column-center mar-t1'>
                <MdCategory size="25" />
                <span className="icon-inner-txt">
                  Products 
                </span>
                </span>
                
              </Link>

              <Link
                className="headerAnchorTag flex-col-end icons-btn-hover buttonHoverShadow wishlist_cart"
                to="/WishList"
              >
                <span className='icon-border'>{wishlistProducts?.length===0? '' : wishlistProducts?.length}</span>
                <span className='flex-column-center'>
                <MdFavorite size="25" />
                <span className="icon-inner-txt">
                  Wishlist 
                </span>
                </span>
              </Link>

              <Link
                className="headerAnchorTag flex-col-end icons-btn-hover buttonHoverShadow"
                to="/Cart"
              >
                <span className='icon-border'>{cartProducts?.length===0 ? '' : cartProducts?.length}</span>
                <span className='flex-column-center padding-t0-sm'>
                <MdShoppingCart size="25" />
                <span className="icon-inner-txt">
                  Cart 
                </span>
                </span>
              </Link>

              <Link
                className="headerAnchorTag flex-col-end icons-btn-hover buttonHoverShadow"
                to="/user-page"
              >

                
                <span className='flex-column-center padding-t0-sm mar-t1'>
                <MdPerson size="25" />
                <span className="icon-inner-txt">
                  Account 
                </span>
                </span>
              </Link>
            </div>
              
                { auth.isAuth ? 
                (
                <button
                  id="myBtn"
                  className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
                >
                <span className="button-inner-txt" 
                onClick={logoutHandler} >
                  Logout
                </span>
                </button>
                )
                :
              (
                <button
                id="myBtn"
                className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
              >
              <a
                className="headerAnchorTag flex-column-center"
                href="./Login"
              >
                <span className="button-inner-txt">
                  Login
                </span>
              </a>
              </button>
              )
              }
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
