import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/landingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/eyes';
import Feature from './components/feature';
import Cards from './components/cards';
import Footer from './components/footer';
import Ready from './components/ready'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-zinc'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Ready/>
      <Footer/>
    </div> 
  )
}

export default App