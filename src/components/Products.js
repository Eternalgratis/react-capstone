import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import productApi from '../redux/productApi';

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    if (!product.length) {
      dispatch(productApi());
    }
  }, []);

  return (
    <div />
  );
};

export default ProductList;
