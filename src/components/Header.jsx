import React, { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggling the state
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to='/'><img src={logo} alt="Company Logo" /></Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {/* <li><Link to="/company">Company</Link></li> */}
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
