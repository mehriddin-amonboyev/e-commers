import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    product: cartReducer, // Slice-larni shu yerga qo'shamiz
  },
});

export default store;
