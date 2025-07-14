import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadcart : (state,action) => {
        state.carts = action.payload;
    }
  },
});


export default CartSlice.reducer;
export const { loadcart } = CartSlice.actions;
