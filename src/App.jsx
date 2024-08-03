import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Client from './components/Client';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Ready from './components/Ready';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Client />
      <Cards />
      <Ready />
      <Footer />
    </div>
  )
}


export default App;
