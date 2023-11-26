import React, { useEffect, useState } from "react";
import "./index.scss";
import UsePagination from "../../hooks/usePagination";
import useLocalStorage from "../../hooks/useLocalStorage";
import FiltersSideBarCategory from "../FiltersSideBar";
import ProductsCard from "../ProductsCard";
import FiltersSortButtons from "../FiltersSortButtons";
import FiltersColGrid from "../FiltersColGrid";
import SideBarBasket from "../SideBarBasket";
import SideBarWishlist from "../SideBarWishlist";
import { MdLocalGroceryStore } from "react-icons/md";
import { BsBox2HeartFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import UseDarkMode from "../../hooks/UseDarkMode";


function FilterPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [category, setCategory] = useLocalStorage("category");
  const [size, setSize] = useLocalStorage("size");
  const { handleClick, PageNumbers, pageData } = UsePagination(1, 6, products);
  const [priceRange, setPriceRange] = useState([30, 130]);
  const [selectedButton, setSelectedButton] = useState("col3");

  const [color, setColor] = useLocalStorage("color");
  const [brand, setBrand] = useLocalStorage("brand");
  const [basket, setBasket] = useLocalStorage("basket");
  const [active, setActive] = useState(false);
  const [activeWishlist, setactiveWishlist] = useState(false)
  const [heartFilledItems, setHeartFilledItems] = useLocalStorage("heart")
  const [wishlist, setWishlist] = useLocalStorage("wishlist")
  const [theme,handleDarkMode] = UseDarkMode()

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  async function getProducts() {
    const data = await fetch("http://localhost:3000/products");
    const res = await data.json();
    setisLoading(false);
    setProducts(res);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleBasket = (item) => {
    const elementIndex = basket.findIndex((x) => x.id === item.id);
    if (elementIndex !== -1) {
      const newBasket = [...basket];
      newBasket[elementIndex].count++;
      setBasket(newBasket);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };
  function handleCountVal(isAdd,item) {
    const elementIndex = basket.findIndex(x=>x.id ===item.id)
    const newBasket = [...basket]
    if (isAdd) {
        newBasket[elementIndex].count++
        setBasket(newBasket)
    }
    else{
        if (newBasket[elementIndex].count === 1) {
            return
        }
        newBasket[elementIndex].count--
        setBasket(newBasket)
    }
}

function handleRemove(id) {
  setBasket(basket.filter(item=>item.id !== id))
}

  const basketiAc = () => {
    setActive(!active);
    setactiveWishlist(false);
  };
  const wishlistiOpen = ()=>{
    setactiveWishlist(!activeWishlist);
    setActive(false);
  }

  function toggleHeart(item) {
    const isItemInWishlist = wishlist.find(x => x.id === item.id);

    if (isItemInWishlist) {
      const newWishlist = wishlist.filter((x) => x.id !== item.id);
      setWishlist(newWishlist);
    } else {
      setWishlist([...wishlist, { ...item }]);
    }

    const isItemInHeartList = heartFilledItems.includes(item.id);
    if (isItemInHeartList) {
      setHeartFilledItems(heartFilledItems.filter((id) => id !== item.id));
    } else {
      setHeartFilledItems([...heartFilledItems, item.id]);
    }
  }

  return (
    <>
      <SideBarBasket active={active} basket={basket} handleCountVal={handleCountVal} setBasket={setBasket} handleRemove={handleRemove} heartFilledItems={heartFilledItems} toggleHeart={toggleHeart} />
      <SideBarWishlist activeWishlist={activeWishlist} wishlist={wishlist} toggleHeart={toggleHeart} setactiveWishlist={setactiveWishlist}  heartFilledItems={heartFilledItems} handleBasket={handleBasket} />

      <section id="filterPage">
        <div className="container">
          <div className="filterPage">
            <div className="buttonsFilterPage">
              <div className="shopAndWishlist">
                <button onClick={() => basketiAc()}><MdLocalGroceryStore /></button>
                <button onClick={()=>wishlistiOpen()}><BsBox2HeartFill /></button>
                <button onClick={handleDarkMode}>{theme ? <CiLight /> :<MdDarkMode /> }</button>
              </div>
              <div className="colGrid">
              <FiltersSortButtons
                products={products}
                setProducts={setProducts}
              />
              <FiltersColGrid setSelectedButton={setSelectedButton} />
              </div>
            </div>

            <div className="row" id="rowReverse">
              <FiltersSideBarCategory
                category={category}
                setCategory={setCategory}
                handlePriceChange={handlePriceChange}
                size={size}
                setSize={setSize}
                color={color}
                setColor={setColor}
                brand={brand}
                setBrand={setBrand}
              />
              <ProductsCard
                isLoading={isLoading}
                size={size}
                pageData={pageData}
                category={category}
                color={color}
                priceRange={priceRange}
                handleClick={handleClick}
                PageNumbers={PageNumbers}
                selectedButton={selectedButton}
                brand={brand}
                basket={basket}
                setBasket={setBasket}
                handleBasket={handleBasket}
                toggleHeart={toggleHeart}
                heartFilledItems={heartFilledItems}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterPage;
