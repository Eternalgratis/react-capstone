import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductList from '../ProductList';
import store from '../../redux/configureStore';

describe('to test the productList component', () => {
  test('matches productList DOM snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
