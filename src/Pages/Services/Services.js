import React from 'react';
import './Services.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Services = () => {
  return (
    <>
      <Header />
      
      <div className="services-section">
        <div className="background-imagesvr"></div>
        <div className="services-content">
          <h1>Our Services</h1>
          <p>
            We offer a range of digital solutions including web development, mobile app
            development, UI/UX design, and SEO optimization. Our team is committed to delivering 
            impactful services that help your business grow.
          </p>
        </div>
      </div>
      
      <div className="web-development-section">
        <div className="image-container"></div>
        <div className="course-details">
          <h2>Web Development Course</h2>
          <p>
            Dive into the world of web development with our comprehensive course.
            Learn HTML, CSS, JavaScript, and modern frameworks to build responsive and
            dynamic websites. Whether you are a beginner or looking to enhance your skills,
            our course is designed to help you succeed in today’s tech-driven world.
          </p>
          <p>
            <strong>Topics Covered:</strong>
            <ul>
              <li>HTML & CSS Basics</li>
              <li>JavaScript Essentials</li>
              <li>React.js and modern front-end frameworks</li>
              <li>Responsive Web Design</li>
              <li>Backend integration and API usage</li>
            </ul>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
