/* eslint-disable */
const URL = 'https://fakestoreapi.com/products';
const LOAD_PRODUCT = 'LOAD_PRODUCT';

// Actions creators
export const loadProduct = (payload) => ({
  type: LOAD_PRODUCT,
  payload,
});

const productApi = async () => {
  const products = await fetch(URL);
  const data = await products.json();
  console.log(data);
  return data;
};
console.log(productApi());

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productApi;
