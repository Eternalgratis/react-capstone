/* eslint-disable */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './productApi';

const rootReducer = combineReducers({
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
