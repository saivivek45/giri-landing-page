import React from "react";
import {motion} from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 overflow-hidden pt-20">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
     <source src="/videos/giri.mp4"/> Your Browser does not support video tag
      </video>
    
    <div className="inset-0 absolute bg-black bg-opacity-60"></div>
    <div className="relative z-10 text-center text-white px-4">
      <motion.h1 
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8}}
      className="relative z-10 text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">GIRI</motion.h1>
      <motion.p 
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.3,duration:0.8}}
      className="relative z-10 text-xl md:text-2xl mt-4 text-gray-300 tracking-wide max-w-xl mx-auto">Your Friendly Companion Smart Sleek Future ready</motion.p>
      <motion.button 
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.6,duration:0.8}}
      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
      className="realtive z-10 mt-6 px-8 py-3 bg-white text-black rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold">Discover More</motion.button>
    </div>

    </section>
  );
};

export default Hero;
