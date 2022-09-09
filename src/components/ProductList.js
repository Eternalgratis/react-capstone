import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../redux/productApi';
import FinalProducts from './finalProduct';
import './HomePage.css';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const filteredProducts = products.filter((product) => product.title.toLowerCase()
    .includes(searchTerm.toLowerCase()));
  useEffect(() => {
    dispatch(fetchProducts());
  }, [searchTerm]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div className="list-container">
      <div className="input-container">
        <input
          type="text"
          name="search"
          placeholder="Search Item"
          className="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="allList-container">

        {filteredProducts.map((product) => (
          <FinalProducts
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
