// Carousel.js
import React, { useState } from 'react';
import '../Carousel.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div className="carousel-controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
