/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {fetchProducts} from '../redux/productApi';
import FinalProducts from './finalProduct';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  useEffect(() => {
    dispatch(fetchProducts())
  }, [searchTerm]);

  const handleChange = (e) => {
    const {value} = e.target
    setSearchTerm(value)
  }
  
  return (
    <div>
      <input type="text" name="search" value={searchTerm} onChange={handleChange} />
      <h2>Intended product List Page</h2>
          {filteredProducts.map((product) => (
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
