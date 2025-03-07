"use client";
import { addToCart, removeFromCart } from "@/redux/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // Access Redux store
import SearchBar from "../searchBar/SearchBar";
import Navigation from "../Home/Navigation";
import Footer from "../Home/Footer/Footer";

export default function ProductList({ products }) {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const cart = useSelector((state) => state.cart.items);

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = cart[product._id] || 0;
      const productTotal = product.price * quantity;
      return total + productTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      <Navigation>
        <SearchBar
          setFilteredProducts={setFilteredProducts}
          products={products}
        ></SearchBar>
      </Navigation>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white rounded-2xl shadow-lg">
        {products
          .slice()
          .reverse()
          .map((product) => {
            const quantity = cart[product._id];

            return (
              <div
                key={product._id}
                className="flex flex-col justify-between bg-white rounded-2xl shadow-lg"
              >
                {" "}
                {/* Add key for each product */}
                <div className="w-48 h-40 overflow-hidden rounded-md">
                  <img
                    src={product.thumbnail || "https://via.placeholder.com/150"} // Fallback image
                    alt={product.name || "Product Image"}
                    className="w-full h-full p-1 flex items-center justify-center rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-gray-800 text-center pt-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4 p-2">
                    <p className="font-semibold text-gray-700">
                      Product Price: ${product.price}
                    </p>
                    <div className="flex gap-4">
                      <button
                        className="p-2 w-20 text-white bg-indigo-700 rounded-lg"
                        onClick={() => dispatch(addToCart(product._id))}
                      >
                        Add
                      </button>
                      <button
                        className="p-2 text-white bg-orange-500 hover:bg-red-800 rounded-lg"
                        onClick={() => dispatch(removeFromCart(product._id))}
                      >
                        Remove
                      </button>

                      <div className="flex flex-col items-center">
                        <p className="text-gray-400">
                          Quantity:{cart[product._id]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center mt-4">
        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <Footer></Footer>
    </div>
  );
}
