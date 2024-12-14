import React from 'react';
import './Buttons.css';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="button-wrapper">
        <button className="cta-button">Enroll in Web Development</button>
        <p className="button-description">Master HTML, CSS, and JavaScript in 8 weeks!</p>
      </div>
      <div className="button-wrapper">
        <button className="cta-button">Start Data Science</button>
        <p className="button-description">Learn Python and data analysis in 10 weeks!</p>
      </div>
      <div className="button-wrapper">
        <button className="cta-button">Join React.js Course</button>
        <p className="button-description">Build interactive UIs in just 6 weeks!</p>
      </div>
    </div>
  );
};

export default Buttons;
