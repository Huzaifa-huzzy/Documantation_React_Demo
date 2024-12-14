import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import './About.css';
import CodingImage from './Aboutimg/aboutimg3.jpg';
import Footer from '../../Footer/Footer';

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('coding-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="about-section">
        <div className="background-image"></div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            We are a team of passionate developers and designers dedicated to creating
            impactful software solutions. Our mission is to deliver high-quality applications
            that exceed expectations and drive results.
          </p>
        </div>
      </div>

      <div id="coding-section" className={`about-coding-section ${visible ? 'fade-in' : ''}`}>
        <div className="coding-image">
          <img src={CodingImage} alt="Coding" />
        </div>
        <div className="coding-details">
          <h2 className='h2'>Our Coding Standards</h2>
          <p>
            Our development practices follow the highest standards of coding, ensuring
            scalability, maintainability, and readability. We emphasize:
          </p>
          <ul>
            <li><strong>Modularity:</strong> Each component is built to serve a unique purpose.</li>
            <li><strong>Efficiency:</strong> Optimized code to improve performance and reduce load times.</li>
            <li><strong>Documentation:</strong> Clear and thorough documentation to aid future development.</li>
            <li><strong>Testing:</strong> Rigorous testing to ensure reliability and stability.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}
