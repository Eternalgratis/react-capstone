/* eslint-disable */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productApi';
import { getProductDetails } from '../redux/productDetails';

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then((result => {
        dispatch(getProductDetails({products: result, id: Number(id)}))
      }))
  }, []);
  return (
    <div id={product.id}>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
};

export default ProductDetails;