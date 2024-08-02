import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';


const App = () => {
  return (
    <div className='w-full h-screen bg-[#f1f1f1]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}


export default App;
