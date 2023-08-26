import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */} {/* Commented out for now, i don.t have a lot of testimonials atm*/}
    <Footer />
  </div>
);

export default App;
