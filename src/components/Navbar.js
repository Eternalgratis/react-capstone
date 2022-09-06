import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h2>Logo</h2>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Product</NavLink>
    </nav>
  </header>
);

export default Navbar;
