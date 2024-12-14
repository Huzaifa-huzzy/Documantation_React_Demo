import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-details">
          <h3>About Us</h3>
          <p>
            We are a leading provider of coding courses, dedicated to helping 
            individuals learn and succeed in the tech industry. Join us and start your journey today!
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@codingcourses.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">🌐</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Coding Courses. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
