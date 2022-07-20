import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import {UseFilter} from "../../context/FilterProvider";
import "../../styles/root.css";
import './ProductListing.css';
import {NormalCard} from "../Cards/NormalCard";
import Filter from "../Filter/Filter";
import {Loader} from "../Loader/Loader";
import {useProducts} from "../../context";
import {
  getDiscountedProducts,
  getFilteredProducts,
  getPricedProducts,
  getRatedProducts,
  getSearchedProducts,
  getSortedProducts,
} from "../../helperFunctions";

export function ProductListing() {
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

  if (searchText) {
    products = getSearchedProducts(data, searchText);
  }

  const pricedProducts = getPricedProducts(products, price);
  const discountedProducts = getDiscountedProducts(
    pricedProducts,
    discount
  );
  const categoryProducts = getFilteredProducts(
    discountedProducts,
    categories
  );
  const ratedProducts = getRatedProducts(
    categoryProducts,
    rating
  );
  const finalFilteredProducts = getSortedProducts(
    ratedProducts,
    sortBy
  );
  const totalPages = Math.ceil(
    finalFilteredProducts.length / 6
  );
  const [currPage, setCurrPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([1, 2]);
  const pageLimit = 2;

  const {state} = UseFilter();
  
  const setValue = useCallback(() => {
    setCurrPage(1);
    setPagesArray(
      Array(totalPages)
        .fill()
        .map((_, idx) => idx + 1)
    );
  }, [totalPages]);

  useEffect(() => {
    totalPages < 2 ? setValue() : setPagesArray([1, 2]);
  }, [setValue]);

  const pageProducts = finalFilteredProducts.slice(
    6 * (currPage - 1),
    currPage * 6
  );

  const getPagesArray = (start, operation) => {
    let limit = pageLimit;
    if (start + pageLimit - 1 > totalPages)
      limit = totalPages - start + 1;

    setPagesArray(
      Array(limit)
        .fill()
        .map((_, idx) => start + idx)
    );
    operation === "next"
      ? setCurrPage(start)
      : setCurrPage(currPage - 1);
  };
  // const {category, price, sortBy, rating} = state;

  // const priceFilter = Price(products, price);

  // const ratingFilter = Rating(priceFilter, rating);

  // const categoryFilter = Category(
  //   ratingFilter,
  //   category.Laptop,
  //   category.Gaming_Laptops,
  //   category.CPU,
  //   category.Phones
  // );
  // const sortFilter = Sort(categoryFilter, sortBy);

  

  return !productsLoading ? (
    <div class="product-list-container user-main-container flex-space-evenly-start container-bg">
      <Filter />
       {pageProducts.length ? (
      
        <div className="flex-column-center">
        <main class="product-container mid-container flex-column-center container-bg col-9">
          {pageProducts.map((product) => (
            <NormalCard key={product.id} product={product} />
          ))}
        
        </main>
        <div className='pagination-container'>
        <button
              id="myBtn"
              className={`header-btn transparent-bg button-normal ButtonDomContainer buttonHoverShadow ${
                currPage === 1 ?
                'btn-disable':''}`}

            onClick={()=> currPage ===
            pagesArray[0]
            ? getPagesArray(
              pagesArray[pagesArray[0] - pageLimit]
            ) : setCurrPage(currPage-1)
            }
            >
                <span className="button-inner-txt padding-normal">
                  prev
                </span>           
            </button>
              
            {pagesArray.map((pageNum)=>(
              <span
              role='button'
              className={`${
                currPage=== pageNum
              ? 'header-btn padding-normal transparent-bg button-normal ButtonDomContainer buttonHoverShadow' :''}
              pointer`}
              onClick={()=>setCurrPage(pageNum)}
              >
                {pageNum}
              </span>
            ))}

            <button
              id="myBtn"
              className={`header-btn transparent-bg button-normal ButtonDomContainer buttonHoverShadow ${
                currPage === totalPages ?
                'btn-disable':''}`}

            onClick={()=>currPage ===
            pagesArray[pagesArray.length-1]
            ? getPagesArray(
              pagesArray[pagesArray.length-1]+1,
              'next'
            ) : setCurrPage(currPage+1)
            }>
                <span className="button-inner-txt padding-normal">
                  next
                </span>
            </button>

        </div>
        </div>
      ) : (
        <Loader type="spinningBubbles" color="#2f2f2f" />
      )}
    </div>
  ) : (
    <Loader type="spinningBubbles" color="#fff" />
  );
}

export default ProductListing;
