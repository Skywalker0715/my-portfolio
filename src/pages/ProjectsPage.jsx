import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCertificate } from "react-icons/fa";

const projects = [
  {
    title: "Web Development",
    description: "Membangun website interaktif dengan teknologi modern.",
    icon: <FaCode className="text-blue-400 text-5xl" />,
    link: "https://github.com/Skywalker0715"
  },
  {
    title: "Mobile App",
    description: "Membuat aplikasi mobile yang responsif dan user-friendly.",
    icon: <FaMobileAlt className="text-green-400 text-5xl" />,
    link: "https://github.com/Skywalker0715/PBM-Aplikasi"
  },
  {
    title: "Certificates",
    description: "Sertifikat yang telah saya peroleh.",
    icon: <FaCertificate className="text-yellow-400 text-5xl" />,
    link: "https://drive.google.com/drive/folders/1fBQx6HIylq-Kln7Z0GzmG-Jcg12GV9Ke?usp=sharing"
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="mb-4">{project.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;