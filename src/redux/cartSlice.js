import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // ✅ Only declared once
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      if (!productId) return;

      if (state.items[productId]) {
        state.items[productId] += 1;
      } else {
        state.items[productId] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      if (!productId || !state.items[productId]) return;

      if (state.items[productId] > 1) {
        state.items[productId] -= 1;
      } else {
        delete state.items[productId];
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
