import React from 'react';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import CTA from './CTA/CTA';
import FAQs from './FAQs/FAQs';
import Testimonials from './Testimonials/Testimonials';
import Offers from './Offers/Offers';
import Footer from './Footer/Footer';
import CardApp from './Cards.js/CardApp';




function App() {
  return (
    <div className="App">
      <Header />
      <CTA/>
      <CardApp/>  
      <Testimonials/>
      <FAQs/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
