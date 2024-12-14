import React, { useEffect, useState } from 'react';
import './FAQs.css';

const faqsData = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days for a full refund."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, you will receive an email with tracking information."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we offer international shipping to select countries."
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact us via email or through our contact form on the website."
  }
];

const SliderFAQs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Create an intersection observer to trigger fade-in when elements are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is in view

    // Target each .faq-item for fade-in
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect(); // Cleanup observer when component unmounts
  }, [currentIndex]);

  const nextFAQ = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faqsData.length);
  };

  const prevFAQ = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + faqsData.length) % faqsData.length);
  };

  return (
    <div className="slider-faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-item">
          <h3>{faqsData[currentIndex].question}</h3>
          <p>{faqsData[currentIndex].answer}</p>
        </div>
      </div>
      <div className="faq-navigation">
        <button onClick={prevFAQ}>&lt; Previous</button>
        <button onClick={nextFAQ}>Next &gt;</button>
      </div>
    </div>
  );
};

export default SliderFAQs;
