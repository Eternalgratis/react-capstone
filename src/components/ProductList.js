/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchProducts, getProductDetail} from '../redux/productApi';
import FinalProducts from './finalProduct';

const ProductList = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getProductDetail(1))
  }, []);
  
  return (
    <div>
      <h2>Intended product List Page</h2>
          {products.map((product) => (
            <FinalProducts 
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            />
        ))}
    </div>
  );
};

export default ProductList;
