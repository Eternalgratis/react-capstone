/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productApi';
import productDetailsReducer from './productDetails'

const store = configureStore({

  reducer: {
    products: productReducer,
    productDetail: productDetailsReducer,
  },
});

export default store;
