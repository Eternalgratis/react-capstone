import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FinalProducts = (props) => {
  const {
    id, title, price, image,
  } = props;
  return (
    <Link to={`/product/${id}`}>
      <div id={id} className="main-container">
        <div className="prod-cont">
          <img src={image} width="200px" alt="items description" height="200px" />
          <p>{price}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

FinalProducts.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default FinalProducts;
