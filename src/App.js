import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductList from './components/Products';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <HomePage />
      <ProductList />
      {/* <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/makePayment" element={#} />
      </Routes> */}
    </BrowserRouter>
  </div>
);

export default App;
