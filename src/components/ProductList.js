/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import productApi from '../redux/productApi';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(productApi);
    }
  }, []);
  
  return (
    <div>
      <h2>Intended product List Page</h2>
          {/* {products.map((product) => (
            <finalProducts 
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rate={product.rating.rate}
            count={product.rating.count}
            />
        ))} */}
    </div>
  );
};

export default ProductList;
