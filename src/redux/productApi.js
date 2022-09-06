const URL = 'https://fakestoreapi.com/products';
const LOAD_PRODUCT = 'LOAD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const productApi = () => async (dispatch) => {
  await fetch(URL)
  .then((res) => console.log(res.json()))
  .then((data) => { dispatch(loadProduct(data)) });

};


// Actions creators
export const loadProduct = (payload) => ({
  type: LOAD_PRODUCT,
  payload,
});

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload,
});

export default productApi;
