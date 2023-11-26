import React from 'react'
import { Checkbox } from 'antd';
import "./index.scss"

function FilterColor({ color, handleColorChange }) {
  return (
    <>
        <div className="filter-items-color">
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="brown"
                    checked={color.includes("brown")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="yellow"
                    checked={color.includes("yellow")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="black"
                    checked={color.includes("black")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="red"
                    checked={color.includes("red")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="white"
                    checked={color.includes("white")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="blue"
                    checked={color.includes("blue")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="green"
                    checked={color.includes("green")}
                  >
                  </Checkbox>
                </div>
              </div>
              <div className="filter-item-color">
                <div className="control">
                  <Checkbox
                    onChange={(e) => handleColorChange(e)}
                    value="pink"
                    checked={color.includes("pink")}
                  >
                  </Checkbox>
                </div>
                </div>
    </div>
    </>
  )
}

export default FilterColor