import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../store/slices/products.slice";
import "./styles/filterCategory.css";

const FilterCategory = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getProductsByCategory(id));
  };

  const handleAllProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <section className="section__main">
      <h3>Categories</h3>
      <ul>
        <li className="section__list-category" onClick={handleAllProducts}>
          All products
        </li>
        {categories?.map((category) => (
          <li
            className="section__list-category-items"
            onClick={() => handleClick(category.id)}
            key={category.id}
          >
          {category.name}
          </li>
        
        ))}
        
      </ul>
     
    </section>
  );
};

export default FilterCategory;
