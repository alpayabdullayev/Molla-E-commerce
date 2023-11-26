import React from "react";
import { Checkbox } from "antd";

function FilterSize({ size, handleSizeChange }) {

  return (
    <>
      <div className="filter-items">
      <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="1"
              checked={size.includes("1")}
            >
              XS
            </Checkbox>
          </div>
        </div>
        <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="2"
              checked={size.includes("2")}
            >
              S
            </Checkbox>
          </div>
        </div>
        <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="3"
              checked={size.includes("3")}
            >
              M
            </Checkbox>
          </div>
        </div>
        <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="4"
              checked={size.includes("4")}
            >
              L
            </Checkbox>
          </div>
        </div>
        <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="5"
              checked={size.includes("5")}
            >
              XL
            </Checkbox>
          </div>
        </div>
        <div className="filter-item">
          <div className="control">
            <Checkbox
              onChange={(e) => handleSizeChange(e)}
              value="6"
              checked={size.includes("6")}
            >
              XXL
            </Checkbox>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSize;
