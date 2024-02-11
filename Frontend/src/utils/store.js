import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load cart data from local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    // Handle errors if necessary
  }
};

const preloadedState = loadCartFromLocalStorage();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: preloadedState,
    },
  },
});

// Add a subscriber to save cart changes to local storage
store.subscribe(() => {
  const cart = store.getState().cart.items;
  saveCartToLocalStorage(cart);
});

export default store;
