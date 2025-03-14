import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center py-20 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with me:
      </motion.h1>

      {/* Social Media Links */}
      <motion.div
        className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 text-3xl md:text-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="https://github.com/Skywalker0715" className="flex items-center text-gray-400 hover:text-white transition">
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/rendy-saputra-581044271/" className="flex items-center text-blue-500 hover:text-white transition">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a href="https://www.instagram.com/rendyysaputra25/" className="flex items-center text-pink-500 hover:text-white transition">
          <FaInstagram className="mr-2" /> Instagram
        </a>
        <a href="https://x.com/Rendyy1507sapu1?t=dLKUiotha6RVllSGDoB3xw&s=08" className="flex items-center text-gray-300 hover:text-white transition">
          <FaXTwitter className="mr-2" /> Twitter
        </a>
        <a href="https://wa.me/6287881235535" className="flex items-center text-green-500 hover:text-white transition">
          <FaWhatsapp className="mr-2" /> WhatsApp
        </a>
        <a href="mailto:rendydovisioso@gmail.com" className="flex items-center text-red-500 hover:text-white transition">
          <FaEnvelope className="mr-2" /> Email
        </a>
      </motion.div>
    </div>
  );
};

export default ContactPage;