/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productApi';

const store = configureStore({

  reducer: {
    products: productReducer,
  },
});

export default store;
