import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import AboutUs from './components/AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleReturnClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="landing-hero">
          <div className="landing-hero-content animate-fade-in">
            <div className="landing-logo">🌿</div>
            <h1 className="landing-title">Paradise Nursery</h1>
            <div className="landing-divider"></div>
            <p className="landing-subtitle">
              Where Greenery Meets Serenity. Discover our premium hand-cultivated houseplant collections to elevate your environment.
            </p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
        <AboutUs />
      </div>

      {/* Product List View */}
      {showProductList && (
        <div className={`product-list-view ${showProductList ? 'visible' : ''}`}>
          <ProductList toLanding={handleReturnClick} />
        </div>
      )}
    </div>
  );
}

export default App;
