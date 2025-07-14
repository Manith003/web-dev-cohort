import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproduct : (state,action) => {
        state.Products = action.payload;
    }
  },
});


export default ProductSlice.reducer;
export const { loadproduct } = ProductSlice.actions;
