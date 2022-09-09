import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productApi';
import { getProductDetails } from '../redux/productDetails';
import './productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then(((result) => {
        dispatch(getProductDetails({ products: result, id: Number(id) }));
      }));
  }, []);

  const unit = '$';
  return (
    <div id={product.id}>
      <Link to="/">
        <button type="button">Go back</button>
      </Link>
      <div className="details-container">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '600px', height: '800px' }}
        />
        <div className="sub-cont">
          <h1 className="head">{product.title}</h1>
          <p className="text-1">{product.description}</p>
          <p className="text">{`${unit} ${product.price}`}</p>
          <span className="cart"> Add to cart </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
