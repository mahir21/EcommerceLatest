//
import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  setProducts,
} from "@/redux/cartSlice";

const ProductCard = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src={product.thumbnail || "https://via.placeholder.com/150"} // Fallback image
        alt={product.name || "Product Image"}
        className="w-full h-64 hover:scale-110 object-cover object-center"
      />
      <div className="p-2">
        <h3 className="flex font-bold justify-center text-lg text-gray-800">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4 p-2">
          <p className="font-semibold text-gray-700">
            Product Price: ${product.price}
          </p>
          <div>
            <button
              className="p-1 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg mx-1"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
            <button
              className="p-1 text-white bg-green-500 hover:bg-red-800 rounded-lg mx-1"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove From Cart
            </button>
            <p className="text-green-500">Quantity:{quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
