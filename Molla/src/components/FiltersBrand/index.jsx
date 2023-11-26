import React from 'react'
import { Checkbox } from 'antd';

function FiltersBrand({brand,handleBrandClick}) {
  return (
    <>
        <div className="filter-items">
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="Next"
                    checked={brand.includes("Next")}
                  >
                    Next
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="Stone Island"
                    checked={brand.includes("Stone Island")}
                  >
                    Stone Island
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="Geox"
                    checked={brand.includes("Geox")}
                  >
                    Geox
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="New Balance"
                    checked={brand.includes("New Balance")}
                  >
                    New Balance
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="UGG"
                    checked={brand.includes("UGG")}
                  >
                    UGG
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="FF"
                    checked={brand.includes("FF")}
                  >
                   F&F
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleBrandClick(e)}
                    value="Nike"
                    checked={brand.includes("Nike")}
                  >
                   Nike
                  </Checkbox>
                </div>
                </div>
    </div>
    </>
  )
}

export default FiltersBrand