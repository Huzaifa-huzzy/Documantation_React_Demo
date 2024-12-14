import React, { useEffect, useState } from 'react';
import './CTA.css';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleGetStarted = () => {
    navigate('/docs/quick-start');
  };

  const handleScroll = () => {
    const ctaPosition = document.querySelector('.cta').getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the CTA is in the viewport
    if (ctaPosition < windowHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`cta ${isVisible ? 'visible' : ''}`}>
      <div className="cta-content">
        <h2>Join Us Today!</h2>
        <p>Start your journey with us and discover amazing opportunities.</p>
        <button className="cta-btn" data-text="Get Started" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
