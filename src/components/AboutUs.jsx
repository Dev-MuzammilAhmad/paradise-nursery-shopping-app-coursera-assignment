import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header animate-fade-in">
        <h1>About Paradise Nursery</h1>
        <p className="subtitle">Where green dreams come to life</p>
      </div>

      <div className="about-us-content">
        <div className="about-us-section card-glow animate-slide-up">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to bring the calming, purifying, and rejuvenating power of nature into every home and office. We curate the healthiest, most vibrant houseplants, helping you create your own indoor oasis and connect with the natural world. We believe that caring for plants fosters mindfulness, improves well-being, and inspires sustainable living.
          </p>
        </div>

        <div className="about-us-grid">
          <div className="about-us-card animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="card-icon">🌿</div>
            <h3>Premium Quality</h3>
            <p>Our plants are hand-selected and nurtured by horticultural specialists, ensuring they arrive at your doorstep in peak condition.</p>
          </div>

          <div className="about-us-card animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="card-icon">💚</div>
            <h3>Expert Plant Care</h3>
            <p>We don't just sell plants; we empower you to grow them. Receive life-long guide support and customized care instructions for every plant.</p>
          </div>

          <div className="about-us-card animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="card-icon">🌎</div>
            <h3>Eco-Conscious</h3>
            <p>We utilize biodegradable nursery pots, organic soils, and eco-friendly packaging materials to preserve our precious environment.</p>
          </div>
        </div>

        <div className="about-us-section card-glow animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h2>Our Story</h2>
          <p>
            Founded in 2023 by a passionate team of plant enthusiasts and environmental scientists, Paradise Nursery started in a small greenhouse in California. What began as a dream to share the joy of gardening has blossomed into a trusted national supplier of exotic and standard houseplants. Today, our team of experts continues to search for rare varieties and pioneer sustainable shipping methods to bring you the best green companions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
