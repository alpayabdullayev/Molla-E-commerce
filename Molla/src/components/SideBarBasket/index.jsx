import React from "react";
import "./index.scss";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import { v4 as uuidv4 } from 'uuid';


function SideBarBasket({ active,basket,handleCountVal,handleRemove,heartFilledItems,toggleHeart }) {
  return (
    <>
      <div className={`sidebar ${active ? "active" : ""}`}>
            <div className="basket-container">
                <div className="basketTitle">
                <h1>BASKET</h1>
                </div>
            {
            basket.map((item)=>(
                <div className="cardProductt">
                <div className="cardContent">
                  <div className="cardImg" key={uuidv4()}>
                    <img src={item.image} alt="" />

                    <div className="addToWishlist">
                      <button  onClick={() => toggleHeart(item)}>
                      {heartFilledItems.includes(item.id) ? <IoIosHeart /> : <FaRegHeart />}     
                      </button>
                    </div>
                  </div>
                  <div className="cardBody">
                    <p>{item.category}</p>
                    <p>{item.price}$</p>
                    <h4>brand {item.brand}</h4>
                    <h4>sayi:{item.count}</h4>
                    <button className="removeBasket" onClick={()=>handleRemove(item.id)}>Remove</button>
                    <button className="countVal" onClick={()=>handleCountVal(true,item)}>+</button>
                <button className="countVal" onClick={()=>handleCountVal(false,item)}>-</button>
                  </div>
                </div>
              </div>
            ))
        }
            </div>
      </div>
    </>
  );
}

export default SideBarBasket;
