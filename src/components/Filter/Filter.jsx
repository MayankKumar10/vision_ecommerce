import React from "react";
import {useProducts} from "../../context";
import {UseFilter} from "../../context/FilterProvider";
import {actionTypes} from "../../reducer/actionTypes";
import '../ProductListing/ProductListing.css';


export function Filter() {
  const {
    PRICE,
    PHONES,
    LAPTOP,
    GAMING_LAPTOPS,
    CPU,
    RATING,
    DISCOUNT,
    LOW_TO_HIGH,
    HIGH_TO_LOW,
    CLEAR,
  } = actionTypes;

  const {productState, productDispatch} = useProducts();
  const {sortBy, categories, price, rating, discount} =
    productState;
  const {phones, gaming_laptops, laptop, cpu} = categories;

  // const {state, dispatch} = UseFilter();
  // const {sortBy, category, price, rating} = state;
  // const {Laptop, Gaming_Laptops, CPU, Phones} = category;

  return (
    <>
      <nav className="filter-container padding-normal box-shadow col-3">
        <form>
          <section className="filter-section flex-row-spc-btw">
            <h4 className="padding-normal">Filter</h4>
            <button
              className="padding-normal button-transparent"
              onClick={() => productDispatch({type: CLEAR})}
            >
              <input
                className="button-transparent text-large"
                type="reset"
                value="Clear"
              />
            </button>
          </section>

          <section className="filter-categories flex-column-start">
            <h4>Price</h4>
            <span className="flex padding-normal-left0">
              <>
                <h5>₹2000</h5>
                <input
                  type="range"
                  className="rangeInput cursor"
                  name=""
                  id=""
                  step="10000"
                  min="10000"
                  max="100000"
                  value={price}
                  onChange={(e) =>
                    productDispatch({
                      type: PRICE,
                      price_value: e.target.value,
                    })
                  }
                />
                <h5>₹{price}</h5>
              </>
            </span>
          </section>

          <section className="filter-categories flex-column-start">
            <h4>Category</h4>

            <div className="flex padding-normal-left0"
            onChange={()=>
              productDispatch({
                type: LAPTOP,
              })
            }
            >
              <input
                className="input-radio cursor"
                type="checkbox"
                name="Laptop"
                checked={laptop}
              />
                
              <span className="padding-small-left1">
                Laptop
              </span>
            </div>

            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="checkbox"
                name="Gaming_Laptops"
                checked={gaming_laptops}
                onChange={() =>
                  productDispatch({
                    type: GAMING_LAPTOPS,
                  })
                }
              />
              <span className="padding-small-left1">
                Gaming Laptops
              </span>
            </span>

            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="checkbox"
                name="CPU"
                checked={cpu}
                onChange={() =>
                  productDispatch({type: CPU})
                }
              />
              <span className="padding-small-left1">
                CPU
              </span>
            </span>

            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="checkbox"
                name="Phones"
                checked={phones}
                onChange={() =>
                  productDispatch({
                    type: PHONES,
                  })
                }
              />
              <span className="padding-small-left1">
                Phones
              </span>
            </span>
          </section>

          <section className="filter-categories flex-column-start">
            <h4>Rating</h4>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="rating"
                checked={rating === 4}
                value="4"
                onChange={(e) =>
                  productDispatch({
                    type: RATING,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                4 Stars & Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="rating"
                checked={rating === 3}
                value="3"
                onChange={(e) =>
                  productDispatch({
                    type: RATING,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                3 Stars & Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="rating"
                checked={rating === 2}
                value="2"
                onChange={(e) =>
                  productDispatch({
                    type: RATING,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                2 Stars & Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="rating"
                value="1"
                checked={rating === 1}
                onChange={(e) =>
                  productDispatch({
                    type: RATING,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                1 Stars & Above
              </p>
            </span>
          </section>

          <section className="filter-categories flex-column-start">
            <h4>Discount</h4>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="discount"
                checked={discount === 50}
                value="50"
                onChange={(e) =>
                  productDispatch({
                    type: DISCOUNT,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                50% and Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="discount"
                checked={discount === 40}
                value="40"
                onChange={(e) =>
                  productDispatch({
                    type: DISCOUNT,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                40% and Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="discount"
                checked={discount === 30}
                value="30"
                onChange={(e) =>
                  productDispatch({
                    type: DISCOUNT,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                30% and Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="discount"
                checked={discount === 20}
                value="20"
                onChange={(e) =>
                  productDispatch({
                    type: DISCOUNT,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                20% and Above
              </p>
            </span>
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="discount"
                value="10"
                checked={discount === 10}
                onChange={(e) =>
                  productDispatch({
                    type: DISCOUNT,
                    value: e.target.value,
                  })
                }
              />
              <p className="padding-small-left1">
                10% and Above
              </p>
            </span>
          </section>

          <section className="filter-categories flex-column-start">
            <h4>Sort by</h4>
            
            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="radio_sort"
                value="LOW_TO_HIGH"
                checked={sortBy === LOW_TO_HIGH}
                onChange={() =>productDispatch({type: LOW_TO_HIGH})}
              />
              <p className="padding-small-left1">
                Price-Low to High
              </p>
            </span>

            <span className="flex padding-normal-left0">
              <input
                className="input-radio cursor"
                type="radio"
                name="radio_sort"
                value="HIGH_TO_LOW"
                checked={sortBy === HIGH_TO_LOW}
                onChange={() => productDispatch({type: HIGH_TO_LOW})}
              />
              <p className="padding-small-left1">
                Price-High to Low
              </p>
            </span>

          </section>
        </form>
      </nav>
    </>
  );
}

export default Filter;
