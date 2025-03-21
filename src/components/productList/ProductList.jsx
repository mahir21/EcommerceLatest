// "use client";
// import { addToCart, removeFromCart } from "@/redux/cartSlice";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"; // Access Redux store
// import SearchBar from "../searchBar/SearchBar";
// import Navigation from "../Home/Navigation";
// import Footer from "../Home/Footer/Footer";

// export default function ProductList({ products }) {
//   const dispatch = useDispatch();
//   const [filter, setFilter] = useState(products);

//   const cart = useSelector((state) => state.cart.items);

//   const calculateTotalPrice = () => {
//     return products.reduce((total, product) => {
//       const quantity = cart[product._id] || 0;
//       const productTotal = product.price * quantity;
//       return total + productTotal;
//     }, 0);
//   };

//   const totalPrice = calculateTotalPrice();

//   return (
//     <div>
//       <Navigation>
//         <SearchBar setFilter={setFilter} products={products} />
//       </Navigation>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white rounded-2xl shadow-lg">
//         {filter
//           .slice()
//           .reverse()
//           .map((product) => {
//             const quantity = cart[product._id];

//             return (
//               <div
//                 key={product._id}
//                 className="flex flex-col justify-between bg-white rounded-2xl shadow-lg"
//               >
//                 {" "}
//                 {/* Add key for each product */}
//                 <div className="w-48 h-40 overflow-hidden rounded-md">
//                   <img
//                     src={product.thumbnail || "https://via.placeholder.com/150"} // Fallback image
//                     alt={product.name || "Product Image"}
//                     className="w-full h-full p-1 flex items-center justify-center rounded-lg"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-2">
//                   <h3 className="text-lg font-semibold text-gray-800 text-center pt-2">
//                     {product.name}
//                   </h3>
//                   <div className="flex items-center justify-between mt-4 p-2">
//                     <p className="font-semibold text-gray-700">
//                       Product Price: ${product.price}
//                     </p>
//                     <div className="flex gap-4">
//                       <button
//                         className="p-2 w-20 text-white bg-indigo-700 rounded-lg"
//                         onClick={() => dispatch(addToCart(product._id))}
//                       >
//                         Add
//                       </button>
//                       <button
//                         className="p-2 text-white bg-orange-500 hover:bg-red-800 rounded-lg"
//                         onClick={() => dispatch(removeFromCart(product._id))}
//                       >
//                         Remove
//                       </button>

//                       <div className="flex flex-col items-center">
//                         <p className="text-gray-400">
//                           Quantity:{cart[product._id]}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//       <div className="flex justify-center mt-4">
//         <h2>Total Price: ${totalPrice}</h2>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
// "use client";
// import { addToCart, removeFromCart } from "@/redux/cartSlice";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"; // Access Redux store
// import SearchBar from "../searchBar/SearchBar";
// import Navigation from "../Home/Navigation";
// import Footer from "../Home/Footer/Footer";

// export default function ProductList({ products }) {
//   const dispatch = useDispatch();
//   const [filter, setFilter] = useState(products);

//   const cart = useSelector((state) => state.cart.items);

//   const calculateTotalPrice = () => {
//     return products.reduce((total, product) => {
//       const quantity = cart[product._id] || 0;
//       const productTotal = product.price * quantity;
//       return total + productTotal;
//     }, 0);
//   };

//   const totalPrice = calculateTotalPrice();

//   return (
//     <div>
//       <Navigation>
//         <SearchBar setFilter={setFilter} products={products} />
//       </Navigation>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-white rounded-2xl shadow-lg">
//         {/* Render products based on the filter */}
//         {filter && filter.length > 0 ? (
//           filter
//             .slice()
//             .reverse()
//             .map((product) => {
//               const quantity = cart[product._id];

//               return (
//                 <div
//                   key={product._id}
//                   className="flex flex-col justify-between bg-white rounded-2xl shadow-lg"
//                 >
//                   {/* Product image */}
//                   <div className="w-48 h-40 overflow-hidden rounded-md">
//                     <img
//                       src={
//                         product.thumbnail || "https://via.placeholder.com/150"
//                       } // Fallback image
//                       alt={product.name || "Product Image"}
//                       className="w-full h-full p-1 flex items-center justify-center rounded-lg"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="p-2">
//                     {/* Product name */}
//                     <h3 className="text-lg font-semibold text-gray-800 text-center pt-2">
//                       {product.name}
//                     </h3>

//                     <div className="flex items-center justify-between mt-4 p-2">
//                       {/* Product price */}
//                       <p className="font-semibold text-gray-700">
//                         Product Price: ${product.price}
//                       </p>
//                       <div className="flex gap-4">
//                         {/* Add to Cart button */}
//                         <button
//                           className="p-2 w-20 text-white bg-indigo-700 rounded-lg"
//                           onClick={() => dispatch(addToCart(product._id))}
//                         >
//                           Add
//                         </button>
//                         {/* Remove from Cart button */}
//                         <button
//                           className="p-2 text-white bg-orange-500 hover:bg-red-800 rounded-lg"
//                           onClick={() => dispatch(removeFromCart(product._id))}
//                         >
//                           Remove
//                         </button>

//                         <div className="flex flex-col items-center">
//                           <p className="text-gray-400">
//                             Quantity: {cart[product._id]}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//         ) : (
//           <p className="text-center col-span-3">No products found.</p>
//         )}
//       </div>
//       <div className="flex justify-center mt-4">
//         <h2>Total Price: ${totalPrice}</h2>
//       </div>
//       <Footer />
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/cartSlice"; // Assuming you have a cartSlice for Redux
import { useRouter } from "next/router";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Home/Navigation";

const ProductList = () => {
  const [getProducts, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // Access the cart from Redux

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
      );
      const data = await response.json();

      if (data.products) {
        setProducts(data.products);
        setFilterProducts(data.products); // Initially show all products
      }
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
    setLoading(false);
  };

  const handleSearch = async (e) => {
    const searchText = e.target.value.trim();

    if (!searchText) {
      // If search is empty, show original product list
      setFilterProducts(getProducts);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://staging-be-ecom.techserve4u.com/api/product/getSearchProducts?search=${searchText}`
      );
      const data = await response.json();

      if (data.products) {
        setFilterProducts(data.products);
      } else {
        setFilterProducts([]);
      }
    } catch (error) {
      console.error("Search Error:", error);
      setFilterProducts([]);
    }
    setLoading(false);
  };

  const calculateTotalPrice = () => {
    return getProducts.reduce((total, product) => {
      const quantity = cart[product._id] || 0;
      const productTotal = product.price * quantity;
      return total + productTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Products..."
          onChange={handleSearch}
          className="w-80 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        {loading && <p className="text-gray-400 ml-4">Loading...</p>}
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Product Listing</h1>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : filterProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg p-4">
            {filterProducts.map((product) => {
              const quantity = cart[product._id] || 0;

              return (
                <div
                  key={product._id}
                  className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-4"
                >
                  <div className="w-48 h-40 overflow-hidden rounded-md mx-auto">
                    <img
                      src={
                        product.thumbnail || "https://via.placeholder.com/150"
                      }
                      alt={product.name || "Product Image"}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="font-semibold text-gray-700 mt-2">
                      Price: ${product.price}
                    </p>
                    <div className="flex justify-between mt-4 p-2">
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
                        <p className="text-gray-400">Quantity: {quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">No Products Found</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <h2 className="font-semibold">Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default ProductList;
