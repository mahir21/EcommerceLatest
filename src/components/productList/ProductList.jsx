// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addToCart, removeFromCart } from "@/redux/cartSlice"; // Assuming you have a cartSlice for Redux
// // import { useRouter } from "next/router";
// // import Footer from "../Home/Footer/Footer";
// // import Navigation from "../Home/Navigation";

// // const ProductList = () => {
// //   const [getProducts, setProducts] = useState([]);
// //   const [filterProducts, setFilterProducts] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [added, setAdded] = useState([]);

// //   const dispatch = useDispatch();
// //   const cart = useSelector((state) => state.cart.items); // Access the cart from Redux

// //   useEffect(() => {
// //     fetchAllProducts();
// //   }, []);

// //   const fetchAllProducts = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
// //       );
// //       const data = await response.json();

// //       if (data.products) {
// //         setProducts(data.products);
// //         setFilterProducts(data.products); // Initially show all products
// //       }
// //     } catch (error) {
// //       console.error("Error fetching all products:", error);
// //     }
// //     setLoading(false);
// //   };

// //   const handleSearch = async (e) => {
// //     const searchText = e.target.value.trim();

// //     if (!searchText) {
// //       //If search is empty it will show list of empty products
// //       setFilterProducts(getProducts);
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         `https://staging-be-ecom.techserve4u.com/api/product/getSearchProducts?search=${searchText}`
// //       );
// //       const data = await response.json();

// //       if (data.products) {
// //         setFilterProducts(data.products);
// //       } else {
// //         setFilterProducts([]);
// //       }
// //     } catch (error) {
// //       console.error("Search Error:", error);
// //       setFilterProducts([]);
// //     }
// //     setLoading(false);
// //   };

// //   const calculateTotalPrice = () => {
// //     return getProducts.reduce((total, product) => {
// //       const quantity = cart[product._id] || 0;
// //       const productTotal = product.price * quantity;
// //       return total + productTotal;
// //     }, 0);
// //   };

// //   const totalPrice = calculateTotalPrice();

// //   return (
// //     <div className="bg-gray-100 min-h-screen p-0 m-0">
// //       <div class="bg-black w-full h-36"></div>
// //       <div className="flex justify-center mt-4">
// //         <input
// //           type="text"
// //           placeholder="Search Products..."
// //           onChange={handleSearch}
// //           className="w-80 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
// //         />
// //         {loading && <p className="text-gray-400 ml-4">Loading...</p>}
// //       </div>

// //       <div className="max-w-6xl mx-auto p-4">
// //         <h1 className="text-3xl font-bold text-center mb-6">Product Listing</h1>

// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : filterProducts.length > 0 ? (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg p-4">
// //             {filterProducts.map((product) => {
// //               const quantity = cart[product._id] || 0;

// //               return (
// //                 <div
// //                   key={product._id}
// //                   className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-4"
// //                 >
// //                   <div className="w-48 h-40 overflow-hidden rounded-md mx-auto">
// //                     <img
// //                       src={
// //                         product.thumbnail || "https://via.placeholder.com/150"
// //                       }
// //                       alt={product.name || "Product Image"}
// //                       className="w-full h-full object-cover rounded-lg"
// //                       loading="lazy"
// //                     />
// //                   </div>
// //                   <div className="p-2 text-center">
// //                     <h3 className="text-lg font-semibold text-gray-800">
// //                       {product.name}
// //                     </h3>
// //                     <p className="font-semibold text-gray-700 mt-2">
// //                       Price: ${product.price}
// //                     </p>

// //                     <div className="flex justify-center items-center mt-4 p-2">
// //                       <button
// //                         className="flex justify-center p-2 w-28 text-white bg-indigo-800 rounded-lg"
// //                         onClick={() => dispatch(addToCart(product._id))}
// //                       >
// //                         Add
// //                       </button>
// //                       {/* <button
// //                         className="p-2 text-white bg-orange-500 hover:bg-red-800 rounded-lg"
// //                         onClick={() => dispatch(removeFromCart(product._id))}
// //                       >
// //                         Remove
// //                       </button> */}
// //                       {/* <div className="flex flex-col items-center">
// //                         <p className="text-gray-400">Quantity: {quantity}</p>
// //                       </div> */}
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ) : (
// //           <p className="text-center text-gray-600">No Products Found</p>
// //         )}
// //       </div>

// //       <div className="flex justify-center mt-4">
// //         <h2 className="font-semibold">Total Price: ${totalPrice}</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "@/redux/cartSlice"; // Assuming you have a cartSlice for Redux
// import { useRouter } from "next/router";
// import Footer from "../Home/Footer/Footer";
// import Navigation from "../Home/Navigation";

// const ProductList = () => {
//   const [getProducts, setProducts] = useState([]);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [added, setAdded] = useState([]); // Track added products

//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.items); // Access the cart from Redux

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const fetchAllProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
//       );
//       const data = await response.json();

//       if (data.products) {
//         setProducts(data.products);
//         setFilterProducts(data.products); // Initially show all products
//       }
//     } catch (error) {
//       console.error("Error fetching all products:", error);
//     }
//     setLoading(false);
//   };

//   const handleSearch = async (e) => {
//     const searchText = e.target.value.trim();

//     if (!searchText) {
//       //If search is empty it will show list of empty products
//       setFilterProducts(getProducts);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://staging-be-ecom.techserve4u.com/api/product/getSearchProducts?search=${searchText}`
//       );
//       const data = await response.json();

//       if (data.products) {
//         setFilterProducts(data.products);
//       } else {
//         setFilterProducts([]);
//       }
//     } catch (error) {
//       console.error("Search Error:", error);
//       setFilterProducts([]);
//     }
//     setLoading(false);
//   };

//   const calculateTotalPrice = () => {
//     return getProducts.reduce((total, product) => {
//       const quantity = cart[product._id] || 0;
//       const productTotal = product.price * quantity;
//       return total + productTotal;
//     }, 0);
//   };

//   const totalPrice = calculateTotalPrice();

//   const handleAddToCart = (productId) => {
//     dispatch(addToCart(productId));
//     setAdded((prevAdded) => [...prevAdded, productId]); // Mark product as added
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-0 m-0">
//       <div className="bg-black w-full h-36"></div>
//       <div className="flex justify-center mt-4">
//         <input
//           type="text"
//           placeholder="Search Products..."
//           onChange={handleSearch}
//           className="w-80 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
//         />
//         {loading && <p className="text-gray-400 ml-4">Loading...</p>}
//       </div>

//       <div className="max-w-6xl mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-6">Product Listing</h1>

//         {loading ? (
//           <p className="text-center">Loading products...</p>
//         ) : filterProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-lg p-4">
//             {filterProducts.map((product) => {
//               const quantity = cart[product._id] || 0;
//               const isAdded = added.includes(product._id); // Check if product is added

//               return (
//                 <div
//                   key={product._id}
//                   className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-4"
//                 >
//                   <div className="w-48 h-40 overflow-hidden rounded-md mx-auto">
//                     <img
//                       src={
//                         product.thumbnail || "https://via.placeholder.com/150"
//                       }
//                       alt={product.name || "Product Image"}
//                       className="w-full h-full object-cover rounded-lg"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="p-2 text-center">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {product.name}
//                     </h3>
//                     <p className="font-semibold text-gray-700 mt-2">
//                       Price: ${product.price}
//                     </p>

//                     <div className="flex justify-center items-center mt-4 p-2">
//                       <button
//                         className={`flex justify-center p-2 w-28 text-white rounded-lg ${
//                           isAdded ? "bg-green-500" : "bg-indigo-800"
//                         }`}
//                         onClick={() => handleAddToCart(product._id)}
//                       >
//                         {isAdded ? "Added" : "Add"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No Products Found</p>
//         )}
//       </div>

//       <div className="flex justify-center mt-4">
//         <h2 className="font-semibold">Total Price: ${totalPrice}</h2>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
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
  const [added, setAdded] = useState([]);

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

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-400">
              &#9733;
            </span>
          ))}
        {halfStars > 0 && (
          <span className="text-yellow-400">&#189;</span> // Half star
        )}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">
              &#9734;
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-0 m-0">
      <div className="bg-black w-full h-36"></div>
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
                    {/* Display Price */}
                    <p className="font-semibold text-gray-700 mt-2">
                      Price: ${product.price}
                    </p>
                    {/* Display Discount */}
                    {product.discount && product.discount.value > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        Discount: {product.discount.value}{" "}
                        {product.discount.discountType === "percent"
                          ? "%"
                          : "$"}
                      </p>
                    )}

                    {/* Display Rating with Stars */}
                    {product.ratingCount > 0 && (
                      <div className="text-sm text-gray-600 mt-2">
                        Rating: {renderStars(product.average)} (
                        {product.ratingCount} reviews)
                      </div>
                    )}

                    <div className="flex justify-center items-center mt-4 p-2">
                      <button
                        className="flex justify-center p-2 w-28 text-white bg-indigo-800 rounded-lg"
                        onClick={() => dispatch(addToCart(product._id))}
                      >
                        Add
                      </button>
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
