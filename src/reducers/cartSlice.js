import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        // If the product already exists in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // If it's a new product, add it to the cart with a quantity of 1
        state.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Remove all instances of the product from the cart
      const productToRemove = action.payload;
      const indexToRemove = state.findIndex(
        (item) => item.id === productToRemove.id
      );

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    increaseQuantity: (state, action) => {
      // Increase the quantity of a product
      const productToIncrease = action.payload;
      const existingProduct = state.find(
        (item) => item.id === productToIncrease.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      // Decrease the quantity of a product
      const productToDecrease = action.payload;
      const existingProduct = state.find(
        (item) => item.id === productToDecrease.id
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          // Remove the product when the quantity becomes 0
          const indexToRemove = state.findIndex(
            (item) => item.id === existingProduct.id
          );
          if (indexToRemove !== -1) {
            state.splice(indexToRemove, 1);
          }
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
