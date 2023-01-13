import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/home/CardProduct";
import FilterCategory from "../components/home/FilterCategory";
import FilterPrice from "../components/home/FilterPrice";
import ToOrderProducts from "../components/home/ToOrderProducts";
import "./styles/home.css";
 

const Home = () => {
  const [productsFilter, setProductsFilter] = useState();

  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      setProductsFilter(products);
    }
  }, [products]);
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((prod) =>
      prod.title.toLowerCase().includes(inputValue)
    );
    setProductsFilter(filter);
  };
  const filterCallBack = (prod) =>
    +prod.price >= inputPrice.from && prod.price <= inputPrice.to;

  const [showSearch, setShowSearch] = useState(false);
  const [showFilterPrice, setShowFilterPrice] = useState(false);
  const [showFilterCategory, setShowFilterCategory] = useState(false);
  const [showOrderProducts, setShowOrderProducts] = useState(false);
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <i
              onClick={() => setShowSearch(!showSearch)}
              className=" fa-sharp fa-solid fa-magnifying-glass  filter__price"  
            ></i>
             
            {showSearch && (
              <input 
                className="input__search"
                placeholder="Search product.."
                onChange={handleChange}
                type="text"
              />
            )}
          </li>
          <li>
            <i
              onClick={() => setShowFilterPrice(!showFilterPrice)}
              className="fa-sharp fa-solid fa-filter-circle-xmark filter__price"
            ></i>
            {showFilterPrice && <FilterPrice setInputPrice={setInputPrice} />}
          </li>
          <li>
            <i
              onClick={() => setShowFilterCategory(!showFilterCategory)}
              className=" fa-solid fa-list  filter__category"
            ></i>
            {showFilterCategory && <FilterCategory />}
          </li>
          <li>
            <i
              onClick={() => setShowOrderProducts(!showOrderProducts)}
              className="fa-solid fa-sort  order__products"
            ></i>
            {showOrderProducts && <ToOrderProducts />}
          </li>
        </ul>
      </nav>

      <div>
        <div className="products-container">
       
          {productsFilter?.filter(filterCallBack).map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
