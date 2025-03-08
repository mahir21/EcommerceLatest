// // // import Image from "next/image";
// // // import { Geist, Geist_Mono } from "next/font/google";

// // // const geistSans = Geist({
// // //   variable: "--font-geist-sans",
// // //   subsets: ["latin"],
// // // });

// // // const geistMono = Geist_Mono({
// // //   variable: "--font-geist-mono",
// // //   subsets: ["latin"],
// // // });

// // // export default function Home() {
// // //   return (
// // //     <div>
// // //       <h1>Hello User </h1>
// // //     </div>
// // //   );
// // // }

// // import axios from "axios";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addToCart, removeFromCart } from "../redux/cartSlice";

// // export default function Home({ products }) {
// //   const dispatch = useDispatch();
// //   const cart = useSelector((state) => state.cart.items);

// //   return (
// //     <div>
// //       <h1>E-commerce Products</h1>
// //       <div style={{ display: "flex", flexWrap: "wrap" }}>
// //         {products.map((product) => (
// //           <div
// //             key={product._id}
// //             style={{
// //               border: "1px solid gray",
// //               padding: "10px",
// //               margin: "10px",
// //             }}
// //           >
// //             <h3>{product.name}</h3>
// //             <p>Price: ${product.price}</p>
// //             <button onClick={() => dispatch(addToCart(product._id))}>
// //               Add to Cart
// //             </button>
// //             <button onClick={() => dispatch(removeFromCart(product._id))}>
// //               Remove
// //             </button>
// //             <p>Added: {cart[product._id] || 0} times</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // Fetch product list on every request (SSR)
// // export async function getServerSideProps() {
// //   const res = await axios.get(
// //     "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
// //   );
// //   return { props: { products: res.data } };
// // }

// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/cartSlice";
// import ProductList from "@/components/productList/ProductList";

// export default function Home({ products }) {
//   return (
//     <div>
//       <h1>Ecommerce Project</h1>
//       <ProductList products={products}></ProductList>
//     </div>
//   );
// }

// // Fetch product list using Server-Side Rendering (SSR)
// export async function getServerSideProps() {
//   try {
//     const res = await axios.get(
//       "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
//     );
//     return { props: { products: res.data.products || [] } };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return { props: { products: [] } };
//   }
// }
import HomePage from "@/components/Home/HomePage";
import React from "react";

const index = () => {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
};

export default index;
