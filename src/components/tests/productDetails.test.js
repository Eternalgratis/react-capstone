import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import ProductDetails from '../ProductDetails';

describe('to test the productDetails components', () => {
  test('matches the productDetails DOM snapshot', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
