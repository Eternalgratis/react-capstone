import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetail, fetchProducts } from '../redux/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getProductDetail(1));
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
