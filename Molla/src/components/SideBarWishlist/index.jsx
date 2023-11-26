import React from 'react'
import "./index.scss"
import { v4 as uuidv4 } from 'uuid';

import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function SideBarWishlist({ activeWishlist,wishlist,toggleHeart,setactiveWishlist,handleBasket,heartFilledItems }) {
  return (
    <>
        <div className={`wishlist ${activeWishlist ? "active" : ""}`}>
            <div className="wishlist-container">
                <div className="wishlist-title">
                    <h1>wishlist</h1>
                    {
                        wishlist.map((item)=>(
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
                                <p>{item.price}</p>
                                <h5>category id: {item.categoryId}</h5>
                                <h4>rating: {item.rating}</h4>
                                <h4>brand {item.brand}</h4>
                              </div>
                            </div>
                          </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBarWishlist