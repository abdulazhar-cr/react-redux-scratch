import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [{ name: "xyz", amount: 10 }],
  },
  reducers: {
    add: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = productSlice.actions;

export default productSlice.reducer;
