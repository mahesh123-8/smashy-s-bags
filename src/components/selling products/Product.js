import React, { useState } from "react";
import Data from "../Productdata/data";
import "./Product.css";

const Product = () => {
  const [productItem, setProductItem] = useState(Data);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleFilter = () => {
    const filteredItems = Data.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setProductItem(filteredItems);
  };

  return (
    <section className="grid gap-2 pt-9 grid-cols-1fr md:grid-cols-4">
      <h1 className="ml-6 text-lg font-extrabold text-center text-black lg:text-4xl md:col-span-full">
      Latest Products
      </h1>

      <div className="col-span-1 p-4 border-solid rounded-lg shadow-md shadow-black ">
        <label>
          ₹
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
          {priceRange[0]}
        </label>
        <span>-</span>
        <label>
          ₹
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
          {priceRange[1]}
        </label>
        <button className="w-[100px] bg-black lg:ml-14" onClick={handleFilter}>
          Filter
        </button>
       
      </div>

      <div className="col-span-3 md:col-span-3">
        <div className="grid grid-cols-1 gap-4 rounded-lg shadow-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cart shadow-black">
          {productItem.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-details">
                <p className="product-title">{product.title}</p>
                <p className="product-price">₹ {product.price}</p>
                <p className="product-discountPercentage">
                  Discount: {product.discountPercentage}%
                </p>
              </div>
              <button className="px-4 py-2 mt-2 text-white bg-black">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;