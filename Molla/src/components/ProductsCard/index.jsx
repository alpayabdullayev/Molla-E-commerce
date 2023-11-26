import React from "react";
import "./index.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useState } from "react";

function ProductsCard({
  isLoading,
  pageData,
  category,
  priceRange,
  handleClick,
  PageNumbers,
  size,
  selectedButton,
  color,
  brand,
  basket,
  setBasket,
  handleBasket,
  toggleHeart,
  heartFilledItems
}) {

  
  return (
    <>


      <div className="col-lg-9">
        <div className="cards ">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <div className="row cardsRow">
              {pageData
                .filter((item) => {
                  if (category.length === 0) {
                    return true;
                  }
                  return category.includes(item.categoryId);
                })
                .filter((item) => {
                  if (size.length === 0) {
                    return true;
                  }
                  return size.includes(item.sizeID);
                })
                .filter((item) => {
                  if (color.length === 0) {
                    return true;
                  }
                  return color.includes(item.color);
                })
                .filter((item) => {
                  if (brand.length === 0) {
                    return true;
                  }
                  return brand.includes(item.brand);
                })
                .filter((item) => {
                  const itemPrice = parseInt(item.price, 10);
                  return (
                    itemPrice >= priceRange[0] && itemPrice <= priceRange[1]
                  );
                })
                .map((item) => (
                  <div
                    className={`cardDF ${selectedButton} ${
                      item.display ? "block" : ""
                    }`}
                    key={item.id}
                  >
                    <div className="cardProductt">
                      <div className="cardContent">
                        <div className="cardImg">
                          <img src={item.image} alt="" />
                          <div className="addTocart">
                            <button onClick={() => handleBasket(item)}>
                              AddToCart
                            </button>
                          </div>
                          <div className="addToWishlist">
                            <button onClick={() => toggleHeart(item)}>
                            {heartFilledItems.includes(item.id) ? <IoIosHeart /> : <FaRegHeart />}                 
                            </button>
                          </div>
                        </div>
                        <div className="cardBody">
                          <p>{item.category}</p>
                          <p>{item.description}</p>
                          <p>${item.price}.00</p>

                          <h4>Brand: {item.brand}</h4>
                          <h5>Color: {item.color} Size: {item.size}</h5>
                          <h6>rating: {item.rating}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="paginationButtons">
          {PageNumbers.map((page) => (
            <button key={page} onClick={() => handleClick(page)}>
              {page}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
