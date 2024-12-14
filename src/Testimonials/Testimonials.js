import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: "This service is fantastic! I couldn't be happier with the results.",
    author: "Jane Doe",
    position: "CEO, Company A"
  },
  {
    id: 2,
    text: "A game-changer for our business. Highly recommend it!",
    author: "John Smith",
    position: "Marketing Director, Company B"
  },
  {
    id: 3,
    text: "Exceptional quality and support. Will definitely use again.",
    author: "Alice Johnson",
    position: "Product Manager, Company C"
  },
];

const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleTestimonials((prev) => [
              ...prev,
              parseInt(entry.target.dataset.index, 10),
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              visibleTestimonials.includes(index) ? 'visible' : ''
            }`}
          >
            <p>"{testimonial.text}"</p>
            <h4>{testimonial.author}</h4>
            <p>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
