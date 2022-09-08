/* eslint-disable */
import { Link } from 'react-router-dom';


const FinalProducts = (props) => {
  const {
    id, title, price, image,
  } = props;
  return (
    <Link to={`/product/${id}`}>
        <div id={id} className='main-container'>
        <div className="prod-cont">
            <h1>{title}</h1>
            <p>{price}</p>
            <img src={image} width="200px" height="200px"/>
        </div>
        </div>
    </Link>
  );
};

export default FinalProducts;
