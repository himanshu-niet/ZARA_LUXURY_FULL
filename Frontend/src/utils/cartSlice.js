import { createSlice } from '@reduxjs/toolkit';
import { getOfferPrice } from './config';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let { _id, title, price,detail,images,discount,quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
       price=  getOfferPrice(price,discount)
       quantity=quantity||1;
       
        state.items.push({ _id, title, price,detail,images,discount, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const _id = action.payload;
      state.items = state.items.filter((item) => item._id !== _id);
    },
    increaseQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.items.find((item) => item._id === _id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const _id = action.payload;
      const item = state.items.find((item) => item._id === _id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    // New action to initialize the cart from local storage
    initializeCart: (state, action) => {
      state.items = action.payload;
    },
    calculateTotalAmount: (state) => {
        state.totalAmount = state.items.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      },
      
   
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  initializeCart,
  calculateTotalAmount
} = cartSlice.actions;

export default cartSlice.reducer;
