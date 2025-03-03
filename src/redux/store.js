// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./productSlice"; // Use the productSlice instead

// const store = configureStore({
//   reducer: {
//     product: productReducer, //Use the product Reducer
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, //This links the cart state to our cartReducer Functionality.
  },
});

export default store;
