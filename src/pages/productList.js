// pages/productList.js
import { useDispatch } from "react-redux";
import { useEffect } from "react"; // Importing useEffect to dispatch to Redux on client-side
import { setProducts } from "@/redux/cartSlice"; // Action to set products in Redux
import ProductList from "@/components/productList/ProductList";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/footer/Footer";

//Server Side Function Is Fetching The Products.
export async function getServerSideProps() {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
  );

  const data = await res.json();

  //Return products as props to be used by data
  return { props: { products: data.products } };
}

export default function ProductListPage({ products }) {
  const dispatch = useDispatch();

  // //Dispatch the fetched products to Redux
  // useEffect(() => {
  //   if (products && products.length > 0) {
  //     dispatch(setProducts(products)); // Store the fetched products in Redux
  //   }
  // }, [products, dispatch]);

  return (
    <div>
      <ProductList /> {/* Product List Will Now Get The Products From Redux */}
    </div>
  );
}
