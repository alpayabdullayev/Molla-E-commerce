// FiltersSideBarCategory.js
import React from "react";
import { Slider } from "antd";
import { Checkbox } from "antd";
import FiltersCategory from "../FiltersCategory/index";
import useLocalStorage from "../../hooks/useLocalStorage";
import FilterSize from "../FilterSize";
import FilterColor from "../FilterColor";
import FiltersBrand from "../FiltersBrand";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.scss";

function FiltersSideBarCategory({
  category,
  setCategory,
  handlePriceChange,
  size,
  setSize,
  color,
  setColor,
  brand,
  setBrand,
}) {
  const handleCategoryClick = (e) => {
    const clickedCategory = e.target.value;
    const isSelected = category.includes(clickedCategory);

    if (isSelected) {
      setCategory(category.filter((category) => category !== clickedCategory));
    } else {
      setCategory([...category, clickedCategory]);
    }
  };
  const handleSizeChange = (e) => {
    const clickedSize = e.target.value;
    const isSelectedSize = size.includes(clickedSize);

    if (isSelectedSize) {
      setSize(size.filter((size) => size !== clickedSize));
    } else {
      setSize([...size, clickedSize]);
    }
  };
  const handleColorChange = (e) => {
    const clickedColor = e.target.value;
    const isSelectedColor = color.includes(clickedColor);

    if (isSelectedColor) {
      setColor(color.filter((color) => color !== clickedColor));
    } else {
      setColor([...color, clickedColor]);
    }
  };

  const handleBrandClick = (e) => {
    const clickedBrand = e.target.value;
    const isSelectedBrand = brand.includes(clickedBrand);

    if (isSelectedBrand) {
      setBrand(brand.filter((brand) => brand !== clickedBrand));
      console.log(brand);
    } else {
      setBrand([...brand, clickedBrand]);
    }
  };

  return (
    <div className="col-lg-3">
      <h5>Filters</h5>
      <div className="sideBarFilters">
        <div className="category">
          <div className="content">
            <div className="contentBody">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FiltersCategory
                      handleCategoryClick={handleCategoryClick}
                      category={category}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="size">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FilterSize handleSizeChange={handleSizeChange} size={size} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="size">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FilterColor
                  color={color}
                  handleColorChange={handleColorChange}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="size">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FiltersBrand
                  handleBrandClick={handleBrandClick}
                  brand={brand}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="priceRange">
          <p className="priceP">Price Range: <span>$0 - $750</span></p>
          <Slider
            range
            draggableTrack
            defaultValue={[30, 80]}
            min={0}
            max={200}
            step={1}
            onAfterChange={handlePriceChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersSideBarCategory;
