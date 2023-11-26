import React from "react";

function FiltersSortButtons({products,setProducts}) {
    const handleSortChange = (e) => {
        const sortType = e.target.value;
      
        if (sortType === 'rating') {
          ratingSort();
        } else if (sortType === 'az') {
          ratingSortAz();
        }
      };
      
      const ratingSort = () => {
        const sortedData = [...products].sort((a, b) => (b.rating > a.rating ? 1 : a.rating > b.rating ? -1 : 0));
        setProducts(sortedData);
      };
      
      const ratingSortAz = () => {
        const sortedData = [...products].sort((a, b) => (a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0));
        setProducts(sortedData);
      };
    
  return (
    <>
      <select onChange={(e) => handleSortChange(e)} value="">
        <option value="">sort</option>
        <option value="rating">The most Rating</option>
        <option value="az">the az</option>
      </select>
    </>
  );
}

export default FiltersSortButtons;
