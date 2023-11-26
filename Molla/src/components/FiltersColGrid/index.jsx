import React from "react";
import "./index.scss"

function FiltersColGrid({ setSelectedButton }) {
  return (
    <>
    <div>
      <div className="colgridButtons">
      <button onClick={() => setSelectedButton("col-lg-12 collg12")}>
        <svg width="16" height="10">
          <rect x="0" y="0" width="4" height="4"></rect>
          <rect x="6" y="0" width="10" height="4"></rect>
          <rect x="0" y="6" width="4" height="4"></rect>
          <rect x="6" y="6" width="10" height="4"></rect>
        </svg>
      </button>
      <button onClick={() => setSelectedButton("col-lg-6")}>
        <svg width="10" height="10">
          <rect x="0" y="0" width="4" height="4"></rect>
          <rect x="6" y="0" width="4" height="4"></rect>
          <rect x="0" y="6" width="4" height="4"></rect>
          <rect x="6" y="6" width="4" height="4"></rect>
        </svg>
      </button>
      <button onClick={() => setSelectedButton("")}>
        <svg width="16" height="10">
          <rect x="0" y="0" width="4" height="4"></rect>
          <rect x="6" y="0" width="4" height="4"></rect>
          <rect x="12" y="0" width="4" height="4"></rect>
          <rect x="0" y="6" width="4" height="4"></rect>
          <rect x="6" y="6" width="4" height="4"></rect>
          <rect x="12" y="6" width="4" height="4"></rect>
        </svg>
      </button>
      <button onClick={() => setSelectedButton("col-lg-3 collg3")}>
        <svg width="22" height="10">
          <rect x="0" y="0" width="4" height="4"></rect>
          <rect x="6" y="0" width="4" height="4"></rect>
          <rect x="12" y="0" width="4" height="4"></rect>
          <rect x="18" y="0" width="4" height="4"></rect>
          <rect x="0" y="6" width="4" height="4"></rect>
          <rect x="6" y="6" width="4" height="4"></rect>
          <rect x="12" y="6" width="4" height="4"></rect>
          <rect x="18" y="6" width="4" height="4"></rect>
        </svg>
      </button>
      </div>
    </div>
     
    </>
  );
}

export default FiltersColGrid;
