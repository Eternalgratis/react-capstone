import React from 'react';
import micIcon from './images/mic.webp';
import settingIcon from './images/settingIcon.png';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <h1>E-commerce website</h1>
    </nav>
    <div className="images">
      <img src={micIcon} alt="microphone" className="micImage" />
      <img src={settingIcon} alt="setting" className="settingIcon" />
    </div>
  </header>
);

export default Navbar;
