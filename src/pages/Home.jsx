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
    from : 0,
    to: Infinity
  })
  
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
   const filterCallBack= prod=>+prod.price>=inputPrice.from &&  prod.price<= inputPrice.to
  return (  
    <div>
      <input onChange={handleChange} type="text" />
      <FilterPrice  setInputPrice={setInputPrice}/>
      <FilterCategory />
      <ToOrderProducts />

      <div className="products-container">
        {productsFilter?.filter(filterCallBack).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
