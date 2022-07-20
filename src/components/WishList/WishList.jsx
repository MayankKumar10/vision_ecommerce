import React from "react";
import {UseWishlist} from "../../context/WishlistProvider";
import "../../styles/root.css";
import {UserNav} from "../index";
import {emptyWishlist} from "../../assets/images";
import { useUserData } from "../../context/UserDataProvider";
import { WishlistCard } from "./WishlistCard";

export function WishList() {
  const {userDataState} = useUserData();
  const {wishlistProducts} = userDataState;

  return (
    <>
      <div className="user-main-container flex-space-evenly-start">
        <section className="user-avatar col-3">
          <div className="user-container-avatar padding-normal box-shadow flex ">
            <span className="avatar-img-container">
              <img
                className="avatar-img"
                src="../images/steve.jpg"
                alt=""
                srcset=""
              />
            </span>

            <span className="padding-small-left1">
              <p>Hello,</p>
              <p>Mayank Kumar</p>
            </span>
          </div>

          <UserNav className="user-nav-main-container padding-normal box-shadow " />
        </section>
        <main className="product-container margin-normal-left border-radius-normal box-shadow col-8">
          <p className="wishlist-text padding-normal">
            My Wishlist ({ wishlistProducts.length })
          </p>

          {wishlistProducts.length < 1 ? (
            <>
              <p>Add Some Items To Wishlist</p>
              <img
                src={emptyWishlist}
                alt="empty-wishlist"
              />
            </>
          ) : (
            wishlistProducts.map((product) => (<WishlistCard key={product.id} product={product} />))
          )}
        </main>
      </div>
    </>
  );
}

export default WishList;
