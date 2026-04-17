import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// komentar untuk testing
const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient-to-b from-slate-950 via-gray-900 to-black pt-12 pb-20 md:pt-16 overflow-hidden relative">
      <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/25 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-[160px]" />

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Rendy Saputra
            <span className="block text-xl md:text-2xl font-medium text-blue-200/80 mt-3">
              Software Engineer - Data & AI
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl">
            Membangun aplikasi yang rapi, scalable, dan siap digunakan, dengan pendekatan data-driven untuk menghasilkan
            solusi yang presisi.
          </p>
          <div className="text-base sm:text-lg text-gray-200 min-h-[28px]">
            <TypeAnimation
              sequence={[
                "Web Development",
                1200,
                "Software Engineering",
                1200,
                "Fullstack Developer",
                1200,
                "Data Analytics",
                1200,
                "Machine Learning",
                1200
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row justify-start">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-full transition-all duration-300 text-sm w-full sm:w-auto"
              >
                Explore Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-5 rounded-full transition-all duration-300 text-sm w-full sm:w-auto"
              >
                Let's Collaborate
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end perspective-[1200px]"
        >
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
              <span>Updated 2026</span>
              <span className="text-blue-300">AI - Data - Apps</span>
            </div>
            <motion.img
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="971.jpg"
              alt="Visual"
              className="w-full max-w-[360px] h-52 rounded-2xl object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
