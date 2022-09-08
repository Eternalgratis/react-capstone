/* eslint-disable */
 import React from 'react';
 import { NavLink } from 'react-router-dom';
 import micIcon from './images/mic.webp';
 import settingIcon from './images/settingIcon.png';
 import './Navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav>
    <div className='images'>
      <img src={micIcon} alt='microphone' className='micImage' />
      <img src={settingIcon} alt='setting' className='settingIcon' />
    </div>
  </header>
);

export default Navbar;