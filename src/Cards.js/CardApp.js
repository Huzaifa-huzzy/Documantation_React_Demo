import React, { useEffect, useState } from 'react';
import './CardApp.css';

const CardApp = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const handleScroll = () => {
    const cards = document.querySelectorAll('.card-container');
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;

      // Check if the card is in the viewport
      if (cardPosition < windowHeight) {
        setVisibleCards(prev => [...prev, index]);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {[...Array(4)].map((_, index) => (
        <div key={index} className={`card-container ${visibleCards.includes(index) ? 'visible' : ''}`}>
          <Card
            classname={index === 3 ? "card--dark" : ""}
            href={index === 0 ? "#hottub" : index === 1 ? "#worldweb" : index === 2 ? "#trainthings" : "#androidupdate"}
            iconname={index === 0 ? "hot_tub" : index === 1 ? "public" : index === 2 ? "train" : "android"}
            title={index === 0 ? "Hot Tub Time Machine" : index === 1 ? "World Wide Web" : index === 2 ? "Why I Hate Trains" : "Another Android Update"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      ))}
    </div>
  );
};

const Card = ({ classname, href, iconname, title, description }) => {
  return (
    <div className={`card ${classname}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="card--display">
          <i className="material-icons">{iconname}</i>
          <h2>{title}</h2>
        </div>
        <div className="card--hover">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="link">Click to see project</p>
        </div>
      </a>
      <div className="card--border"></div>
    </div>
  );
};

export default CardApp;
