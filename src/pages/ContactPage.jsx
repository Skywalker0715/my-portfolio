import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center py-20 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("contact.title")}
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 text-3xl md:text-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="https://github.com/Skywalker0715" className="flex items-center text-gray-400 hover:text-white transition">
          <FaGithub className="mr-2" /> {t("contact.github")}
        </a>
        <a href="https://www.linkedin.com/in/rendy-saputra-581044271/" className="flex items-center text-blue-500 hover:text-white transition">
          <FaLinkedin className="mr-2" /> {t("contact.linkedin")}
        </a>
        <a href="https://wa.me/6287881235535" className="flex items-center text-green-500 hover:text-white transition">
          <FaWhatsapp className="mr-2" /> {t("contact.whatsapp")}
        </a>
        <a href="mailto:15rendysaputra@gmail.com" className="flex items-center text-red-500 hover:text-white transition">
          <FaEnvelope className="mr-2" /> {t("contact.email")}
        </a>
      </motion.div>
    </div>
  );
};

export default ContactPage;
