import React from "react";
import { motion } from "framer-motion";
import { FaLaravel, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaPhp, FaDatabase, FaWordpress, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <div className="relative max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Picture */}
        <motion.div 
          className="flex justify-center mb-8 md:mb-0 md:mr-8 mt-16 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <motion.img 
              src="/my-portfolio/P1.JPG" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div 
          className="bg-gray-800/50 p-3 rounded-xl flex-1 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Tentang Saya</h3>
          <div className="space-y-3 text-center md:text-left">
            <p className="text-gray-300 text-sm">
              Saya adalah pengembang web dan mobile berpengalaman yang fokus pada teknologi modern. Dengan keahlian dalam Laravel dan Node.js untuk pengembangan web, serta Java untuk aplikasi mobile, 
              saya menciptakan solusi digital yang tidak hanya berfungsi dengan baik tetapi juga menarik secara visual.
            </p>
            <p className="text-gray-300 text-sm">
              Saya memiliki passion dalam menciptakan antarmuka pengguna yang menarik, inovatif, dan interaktif dengan animasi yang dinamis.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
        className="max-w-4xl mx-auto bg-gray-800/50 p-6 rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Keahlian Saya</h3>
        <div className="flex flex-wrap justify-center gap-6 text-4xl">
          <FaWordpress className="text-blue-500 hover:scale-110 transition-transform" />
          <FaFileExcel className="text-green-500 hover:scale-110 transition-transform" />
          <FaFilePowerpoint className="text-red-500 hover:scale-110 transition-transform" />
          <FaLaravel className="text-red-600 hover:scale-110 transition-transform" />
          <FaNodeJs className="text-green-600 hover:scale-110 transition-transform" />
          <FaReact className="text-blue-400 hover:scale-110 transition-transform" />
          <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" />
          <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" />
          <FaJs className="text-yellow-400 hover:scale-110 transition-transform" />
          <FaJava className="text-red-500 hover:scale-110 transition-transform" />
          <FaPython className="text-blue-300 hover:scale-110 transition-transform" />
          <FaPhp className="text-purple-600 hover:scale-110 transition-transform" />
          <FaDatabase className="text-gray-400 hover:scale-110 transition-transform" />
          <SiFirebase className="text-yellow-500 hover:scale-110 transition-transform" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;