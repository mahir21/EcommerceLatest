// "use client";
// import { addToCart, removeFromCart } from "@/redux/cartSlice";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"; // Access Redux store

// export default function ProductList({ products }) {
//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart.items);

//   return (

//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

//       products.map((product) => {

//         const quantity = cart[product.id];

//         return (

//       <img
//         src={product.thumbnail || "https://via.placeholder.com/150"} // Fallback image
//         alt={product.name || "Product Image"}
//         className="w-full h-64 hover:scale-110 object-cover object-center"
//       />
//       <div className="p-2">
//         <h3 className="flex font-bold justify-center text-lg text-gray-800">
//           {product.name}
//         </h3>
//         <div className="flex items-center justify-between mt-4 p-2">
//           <p className="font-semibold text-gray-700">
//             Product Price: ${product.price}
//           </p>
//           <div>
//             <button
//               className="p-1 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg mx-1"
//               onClick={() => dispatch(addToCart(product))}
//             >
//               Add To Cart
//             </button>
//             <button
//               className="p-1 text-white bg-red-600 hover:bg-red-800 rounded-lg mx-1"
//               onClick={() => dispatch(removeFromCart(product.id))}
//             >
//               Remove From Cart
//             </button>
//             <p className="text-green-500">Quantity:{quantity}</p>
//           </div>
//         </div>
//       </div>

//         )
//       }

//     </div>
//   );
// }

"use client";
import { addToCart, removeFromCart } from "@/redux/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // Access Redux store
import SearchBar from "../searchBar/SearchBar";

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
      <SearchBar
        setFilteredProducts={setFilteredProducts}
        products={products}
      ></SearchBar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg">
        {products.map((product) => {
          // Fixed: Wrapped the map function in curly braces
          const quantity = cart[product._id];

          return (
            <div key={product._id}>
              {" "}
              {/* Add key for each product */}
              <img
                src={product.thumbnail || "https://via.placeholder.com/150"} // Fallback image
                alt={product.name || "Product Image"}
                className="w-48 h-48 hover:scale-110 object-cover object-center rounded-lg"
                loading="lazy"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800 text-center pt-2">
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
                      className="p-2 text-white bg-red-600 hover:bg-red-800 rounded-lg"
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
    </div>
  );
}
