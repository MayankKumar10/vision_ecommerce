import React from "react";
import "../../styles/root.css";
import {
  MdCategory,
  MdFavorite,
  MdShoppingCart,
  MdPerson,
} from "react-icons/md";
import {Link} from "react-router-dom";
import reactDom from "react-dom";
import {vision_logo} from "../../assets/images";

export function Header() {
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
              />
              <button className="material-icons button-transparent primary-btn">
                search
              </button>
            </form>

            <div className="iconsContainer flex-evenly">
              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/products"
              >
                <MdCategory size="25" />
                <span className="icon-inner-txt">
                  Products
                </span>
              </Link>

              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/WishList"
              >
                <MdFavorite size="25">
                  <span
                    styles={{
                      color: "red",
                      fontSize: "20px",
                    }}
                  >
                    11
                  </span>
                </MdFavorite>
                <span className="icon-inner-txt">
                  Wishlist
                </span>
              </Link>

              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/Cart"
              >
                <MdShoppingCart size="25" />
                <span className="icon-inner-txt">Cart</span>
              </Link>

              <Link
                className="headerAnchorTag flex-column-center icons-btn-hover buttonHoverShadow"
                to="/user-page"
              >
                <MdPerson size="25" />
                <span className="icon-inner-txt">
                  Account
                </span>
              </Link>
            </div>

            <button
              id="myBtn"
              className="header-btn transparent-bg button-normal ButtonDomContainer icons-btn-hover buttonHoverShadow"
            >
              <a
                className="headerAnchorTag flex-column-center"
                href="login"
                target="iframe-main-container"
              >
                <span className="button-inner-txt">
                  Login
                </span>
              </a>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
