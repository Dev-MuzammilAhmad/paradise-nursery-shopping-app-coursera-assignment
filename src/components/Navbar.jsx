import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Leaf } from 'lucide-react';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Leaf className="brand-logo-icon" />
          <div className="brand-text-container">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Plants for your space</span>
          </div>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/plants" className="navbar-link">Plants</Link>
          <Link to="/cart" className="navbar-link cart-link">
            <div className="cart-icon-wrapper">
              <ShoppingCart className="navbar-cart-icon" />
              {totalQuantity > 0 && (
                <span className="navbar-cart-badge animate-pop-in">{totalQuantity}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
