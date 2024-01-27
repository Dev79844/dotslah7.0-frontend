// Seller.js
import React from 'react';
import Carousel from './Carousel'; // Assuming Carousel.js is in the same directory
import '../styles.css';
import '../Seller.css';


const Seller = () => {
  const subOptions = ['Prepare and search', 'Present', 'Close and transition'];

  const carouselImages = ['img2.png', 'img3.jpg'];

  return (
    <div className="seller-container">
      <div className="content-container">
        <div className="text-container">
          <h1>The fastest, easiest way to sell your startup</h1>
          <p>Sell your business fast and for the highest price. Connect with 200k+ buyers to get acquired in as little as 30 days. Expert help, vetting, and technology included. Always private.</p>
        </div>
        <div className="image-container">
          <Carousel images={carouselImages} />
        </div>
      </div>

      {/* Additional sections */}
      <div className="additional-section">
        <h1>The hard way to sell your startup</h1>
        <div className="sub-options">{subOptions.map((option, index) => <span key={index}>{option}{index < subOptions.length - 1 ? ', ' : ''}</span>)}</div>
      </div>

      <div className="additional-section">
        <h1 className="easy-way-text">The easy way to sell your startup</h1>
        <div className="section-content">
          <div className="text-left">
            <p>
              1 - Prepare your listing
              <br />
              Enter basic details about the startup you want to sell.
              <br />
              Describe your business
              <br />
              Explain why you're selling
              <br />
              Sync your metrics
            </p>
          </div>
          <div className="image-right">
            <img src="img4.png" alt="Startup Image" />
          </div>
        </div>
      </div>

      <div className="additional-section">
        <div className="section-content">
          <div className="image-left">
            <img src="img5.png" alt="image" />
          </div>
          <div className="text-right">
            <p>
              2 - Get help to sell
              <br />
              Our experts will optimize your listing and help you sell quickly, easily, and for the highest price.
              <br />
              Create the perfect listing with help from our customer success teams
              <br />
              Attract more buyer interest with multi-channel marketing campaigns
              <br />
              Get expert help throughout the acquisition process to close smoothly
            </p>
          </div>
        </div>
      </div>

      <div className="additional-section">
        <div className="section-content">
          <div className="text-left">
            <p>
              3 - Find your ideal buyer
              <br />
              Vet buyers and offers to find the right fit. Negotiate the best deal with expert guidance from our customer success team
              <br />
              Evaluate buyers on experience and acquisition goals
              <br />
              Prioritize buyers with verified identities and ready funds
              <br />
              Safely close with free escrow from Escrow.com
            </p>
          </div>
          <div className="image-right">
            <img src="img6.png" alt="image3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
