import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="hero-section bg-gradient-to-r from-blue-900 to-gray-900 py-10 mt-16 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-5xl">
          {/* Foto Profil */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <img 
              src="/profile.JPG" 
              alt="Profile Picture"
              className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Teks & Animasi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-2 md:ml-8"
          >
            <h1 className="text-3xl font-bold text-white">
              Hi, I'm <span className="text-white-400">Rendy Saputra</span>
            </h1>
            <p className="text-lg text-gray-300">Junior Web Developer</p>
            <div className="text-xl text-gray-300">
              <TypeAnimation
                sequence={[
                  'Web Development',
                  1200,
                  'Software Engineer',
                  1200,
                  'Laravel Developer',
                  1200
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <Link to="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm mt-2"
              >
                View My Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Ilustrasi Developer dengan Animasi */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center justify-end md:ml-8"
          >
            <motion.img
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              src="/971.jpg" 
              alt="971"
              className="w-72 h-44 rounded-lg shadow-xl hover:rotate-2"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;