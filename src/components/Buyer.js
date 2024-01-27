// Buyer.js
import React from 'react';
import '../styles.css';
import '../Buyer.css';

const Buyer = () => {
  return (
    <div className="buyer-container">
      <div className="content-container">
        <div className="text-container">
            
          <h1>The fastest, easiest way to acquire your next startup</h1>
          <p>
            Buy your dream startup in 30 days. Vetted deals. No hassle.
            Acquire your ideal startup from 1,000s of trusted listings. Instantly connect with founders. View real-time metrics. Build LOIs and APAs in minutes.
          </p>
        </div>
        <div className="image-container">
          {/* Vertical Image goes here */}
          <img src="img7.png" alt="Buyer Image" />
        </div>
      </div>
  <div className="additional-section">
        <h1 className="easy-way-text">Everything you need to make an offer</h1>
        <div className="section-content">
          <div className="text-left">
            <p>
             Trusted listings
              <br />
              Tell us your goals and we'll find you matching startups or filter the marketplace to find the right fit. Contact founders instantly.
              <ul>
                <li>Filter listings by industry, price, revenue, profit, and more</li>
                <li>Get instant notifications of new listings matching your criteria</li>
                <li>Unlock acquisition financing with Boopos pre-approved listings</li></ul>
            </p>
          </div>
          <div className="image-right">
            <img src="img8.png" alt="Startup Image" />
          </div>
        </div>
      </div>

      <div className="additional-section">
        <div className="section-content">
          <div className="image-left">
            <img src="img9.png" alt="image" />
          </div>
          <div className="text-right">
            <p>
             Metrics that matter
              <br />
              Measure startup performance across connected web, customer, and financial metrics.
               <ul>
                <li>View financial snapshots and P&L summaries</li>
                <li>Understand revenue, customers, and churn</li>
                <li>Analyze audience and customer acquisition data</li></ul>
            </p>
          </div>
        </div>
      </div>

      <div className="additional-section">
        <div className="section-content">
          <div className="text-left">
<p>Time-saving technology and integrated escrow
              <br />
              TFrom making an offer to closing safely with escrow, our expert tooling streamlines the acquisition process so you can focus on negotiating the best deal.
              <ul>
                <li>Auto-sign NDAs to get instant access to founder data</li>
                <li>Build and send LOIs and APAs in minutes
</li>
                <li>Close safely and securely with Escrow.com</li></ul>
            </p>
          </div>
          <div className="image-right">
            <img src="img10.png" alt="image3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;
