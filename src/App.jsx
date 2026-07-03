import React from 'react';
import './App.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import { ArrowRight } from 'lucide-react';

function App() {
  const location = useLocation();
  // Navigation bar is present on Product Listing and Cart pages
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app-container">
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-hero-content animate-fade-in">
          <div className="landing-logo">🌿</div>
          <h1 className="landing-title">Paradise Nursery</h1>
          <div className="landing-divider"></div>
          <p className="landing-subtitle">
            Where Greenery Meets Serenity. Discover our premium hand-cultivated houseplant collections to elevate your environment.
          </p>
          <Link to="/plants" className="get-started-btn">
            <span>Get Started</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* About Us section embedded on the landing page */}
      <AboutUs />
    </div>
  );
};

export default App;
