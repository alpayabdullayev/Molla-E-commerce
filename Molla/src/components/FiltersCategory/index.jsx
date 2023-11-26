import React from 'react'
import { Checkbox } from 'antd';

function FiltersCategory({ category, handleCategoryClick }) {
  return (
    <>
    
    <div className="filter-items">
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="1"
                    checked={category.includes("1")}
                  >
                    Dresses
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="2"
                    checked={category.includes("2")}
                  >
                    T-shirts
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="3"
                    checked={category.includes("3")}
                  >
                    Bags
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="4"
                    checked={category.includes("4")}
                  >
                    Jackets
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="5"
                    checked={category.includes("5")}
                  >
                    Shoes
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="6"
                    checked={category.includes("6")}
                  >
                    Jumpers
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="7"
                    checked={category.includes("7")}
                  >
                   Jeans
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleCategoryClick(e)}
                    value="8"
                    checked={category.includes("8")}
                  >
                    Sport
                  </Checkbox>
                </div>
                </div>
    </div>
    </>
  )
}

export default FiltersCategory