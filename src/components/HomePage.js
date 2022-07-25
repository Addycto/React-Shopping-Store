import { useEffect, useState } from "react";
import axios from "axios";

import ProductsList from "./ProductsList";

function HomePage(props) {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    let url = "";
    if (event.target.value === "All") {
      url = "https://fakestoreapi.com/products";
    } else {
      url = `https://fakestoreapi.com/products/category/${event.target.value}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error while category search: ", error);
      });
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log("Error while getting categories: ", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log("Error while setting initial products: ", error);
      });
  }, []);

  return (
    <>
      <input
        className="form-control bg-light w-75 mx-auto mt-4"
        type="text"
        placeholder="Search all products"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <ul
        className="list-group list-group-flush w-75 mx-auto"
        style={{ maxHeight: "100px", overflow: "auto" }}
      >
        {allProducts
          .filter((product) => {
            if (searchText === "") {
              return false;
            } else if (
              product.title.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product, index) => {
            return (
              <li
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                key={index}
              >
                {product.title}
              </li>
            );
          })}
      </ul>
      <select
        className="form-select w-75 mx-auto mt-4"
        defaultValue="All"
        value={selectedCategory}
        onChange={(event) => handleCategoryChange(event)}
      >
        <option value="All">All Categories</option>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
      </select>
      <div className="container-fluid">
        <ProductsList
          products={products}
          handleAddToCartButton={(product) =>
            props.handleAddToCartButton(product)
          }
        />
      </div>
    </>
  );
}

export default HomePage;
