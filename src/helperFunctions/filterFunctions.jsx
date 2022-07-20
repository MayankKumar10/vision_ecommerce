import { useEffect, useState } from "react";
import {actionTypes} from "../reducer/actionTypes";
import { constant } from "./constant";

const getFilteredProducts = (
  sortedProducts,
  categories
) => {
  const filteredList = [];
  let catLength = [...Object.keys(categories)]
  let count = 0;
  for (let category in categories) {
    if (categories[category]) {
      let newList = sortedProducts.filter(
        (item) => category === item.category.toLowerCase()
      );
     
      filteredList.push(...newList);
    } else {
      count++;
    }
  }

  return count === catLength.length ? sortedProducts : filteredList;
};

const getDiscountedProducts = (
  pricedProducts,
  discount
) => {
  if (discount) {
    return pricedProducts.filter(
      (item) => item.discount >= discount
    );
  }
  return pricedProducts;
};

const getPricedProducts = (products, price) => {
  return products.filter((item) => item.price <= price);
};

const getRatedProducts = (categoryProducts, rating = 1) => {
  return categoryProducts.filter(
    (item) => item.rating >= rating
  );
};

const getSortedProducts = (ratedProducts, sortBy) => {
  const {LOW_TO_HIGH, HIGH_TO_LOW} = constant;
  
  if (sortBy === LOW_TO_HIGH)
    return [...ratedProducts].sort(
      (item1, item2) =>
        item1.discountedPrice - item2.discountedPrice,
        console.log('ratedProducts',ratedProducts)
    );
  if (sortBy === HIGH_TO_LOW)
    return [...ratedProducts].sort(
      (item1, item2) =>
        item2.discountedPrice - item1.discountedPrice
        ,console.log('ratedProducts',ratedProducts)
    );

  return ratedProducts;
};

const getSearchedProducts = (products, userInput) => {
  const re = new RegExp(`^${userInput}`, "i");
  const reName = new RegExp(`${userInput}`, "i");

  let newProducts = [];

  newProducts.push(
    ...products.filter((product) =>
      re.test(product.category)
    )
  );
  newProducts.push(
    ...products.filter(
      (product) =>
        reName.test(product.name) &&
        !newProducts.includes(product)
    )
  );

  return newProducts;
};

 const billGenerator = (productArray) => {
	const discountPriceSum = productArray.reduce(
		(acc, curr) => (acc += ((curr.price * curr.discount) / 100) * curr.qty),
		0
	);
	const priceSum = productArray.reduce(
		(acc, curr) => (acc += curr.price * curr.qty),
		0
	);

	return [priceSum, discountPriceSum];
};

 const useDebounce = (searchVal, delay) => {
	const [debouncedSearchVal, setDebouncedSearchVal] = useState(searchVal);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchVal(searchVal);
		}, delay);

		return () => {
			// return runs whenever dependencies change
			// if a user enter another letter before the delay
			// then then timer will be cleared , debouncedSearch value will not change
			clearTimeout(handler);
		};
	}, [searchVal, delay]);

	return debouncedSearchVal;
};

export {
  getFilteredProducts,
  getDiscountedProducts,
  getPricedProducts,
  getRatedProducts,
  getSortedProducts,
  getSearchedProducts,
  billGenerator,
  useDebounce
};
