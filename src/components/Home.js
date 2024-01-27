// Home.js
import React from 'react';
import '../styles.css';
import '../Home.css'; // Import the Home-specific styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="text-container">
          <h1>1k+ Successful Deals</h1>
          <p>The best online marketplace to buy and sell startups. Join 200k+ entrepreneurs closing life-changing deals. Buy and sell startups in as little as 30 days, supported by the best advisors and tech.</p>
        </div>
        <div className="image-container">
          <img src="img1.png" alt="Startup Image" />
        </div>
      </div>
      {/* Additional text on scroll down */}
      <div className="text-container additional-text">
        <h1>The World’s Number One Startup Acquisition Marketplace with Attractive UI</h1>
      </div>
    </div>
  );
};

export default Home;

