import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">MyLogo</Link>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="auth-btn">Login</button>
        </Link>
        <button className="auth-btn">SignUp</button>
      </div>
    </header>
  );
};

export default Header;
