import React from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import ProductList from "@/components/productList/ProductList";

export default function productList({ products }) {
  return (
    <div>
      <ProductList products={products}></ProductList>
    </div>
  );
}

// Fetch product list using Server-Side Rendering (SSR)
export async function getServerSideProps() {
  try {
    const res = await axios.get(
      "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
    );
    return { props: { products: res.data.products || [] } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}
