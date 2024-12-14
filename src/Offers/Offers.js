import React, { useState, useEffect } from 'react';
import './Offers.css';

const offersData = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
    price: "$199",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Dive into data analysis and machine learning using Python and Pandas.",
    price: "$249",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "React.js for Beginners",
    description: "Master React.js and build dynamic web applications with ease.",
    price: "$199",
    duration: "6 weeks",
  },
];

const Offers = () => {
  const [visibleOffers, setVisibleOffers] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setVisibleOffers((prevVisibleOffers) => [...prevVisibleOffers, index]);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const cards = document.querySelectorAll('.offer-card');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="offers">
      <h2>Our Coding Course Offers</h2>
      <div className="offers-container">
        {offersData.map((offer, index) => (
          <div
            key={offer.id}
            className={`offer-card ${visibleOffers.includes(String(index)) ? 'visible' : ''}`}
          >
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="offer-price">{offer.price}</p>
            <p className="offer-duration">{offer.duration}</p>
            <button className="offer-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
