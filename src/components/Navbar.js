// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Adjust the import path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-links">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div className="flex space-x-4 ml-4">
          <Link to="/seller" className="text-white">Seller</Link>
          <Link to="/buyer" className="text-white">Buyer</Link>
          <Link to="/about" className="text-white">About Us</Link>
        </div>
      </div>
      <div className="right-links">
        <Link to="/login" className="text-white">Log In</Link>
        <Link to="/signup" className="text-white">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
