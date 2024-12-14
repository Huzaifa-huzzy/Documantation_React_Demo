import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  { id: 1, text: 'Slide 1', background: '#ff7f50' },
  { id: 2, text: 'Slide 2', background: '#6a5acd' },
  { id: 3, text: 'Slide 3', background: '#20b2aa' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundColor: slide.background }}
        >
          <h2>{slide.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default Slider;
