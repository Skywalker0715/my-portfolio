import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, isEnglish } = useLanguage();

  const IndonesiaFlag = () => (
    <svg className="w-5 h-5" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="300" fill="#FF0000"/>
      <rect y="300" width="900" height="300" fill="#FFFFFF"/>
    </svg>
  );

    const USFlag = () => (
    <svg className="w-5 h-5" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      {/* Red and White Stripes */}
      <rect y="0" width="900" height="46.15" fill="#B22234"/>
      <rect y="46.15" width="900" height="46.15" fill="#FFFFFF"/>
      <rect y="92.3" width="900" height="46.15" fill="#B22234"/>
      <rect y="138.45" width="900" height="46.15" fill="#FFFFFF"/>
      <rect y="184.6" width="900" height="46.15" fill="#B22234"/>
      <rect y="230.75" width="900" height="46.15" fill="#FFFFFF"/>
      <rect y="276.9" width="900" height="46.15" fill="#B22234"/>
      <rect y="323.05" width="900" height="46.15" fill="#FFFFFF"/>
      <rect y="369.2" width="900" height="46.15" fill="#B22234"/>
      <rect y="415.35" width="900" height="46.15" fill="#FFFFFF"/>
      <rect y="461.5" width="900" height="46.15" fill="#B22234"/>
      <rect y="507.65" width="900" height="46.15" fill="#FFFFFF"/>
      
      {/* Blue canton */}
      <rect width="360" height="276.9" fill="#3C3B6B"/>
      
      {/* 50 Stars */}
      <g fill="white">
        {/* Row 1 */}
        <circle cx="32" cy="23" r="9"/><circle cx="96" cy="23" r="9"/><circle cx="160" cy="23" r="9"/><circle cx="224" cy="23" r="9"/><circle cx="288" cy="23" r="9"/><circle cx="352" cy="23" r="9"/>
        {/* Row 2 */}
        <circle cx="64" cy="55" r="9"/><circle cx="128" cy="55" r="9"/><circle cx="192" cy="55" r="9"/><circle cx="256" cy="55" r="9"/><circle cx="320" cy="55" r="9"/>
        {/* Row 3 */}
        <circle cx="32" cy="87" r="9"/><circle cx="96" cy="87" r="9"/><circle cx="160" cy="87" r="9"/><circle cx="224" cy="87" r="9"/><circle cx="288" cy="87" r="9"/><circle cx="352" cy="87" r="9"/>
        {/* Row 4 */}
        <circle cx="64" cy="119" r="9"/><circle cx="128" cy="119" r="9"/><circle cx="192" cy="119" r="9"/><circle cx="256" cy="119" r="9"/><circle cx="320" cy="119" r="9"/>
        {/* Row 5 */}
        <circle cx="32" cy="151" r="9"/><circle cx="96" cy="151" r="9"/><circle cx="160" cy="151" r="9"/><circle cx="224" cy="151" r="9"/><circle cx="288" cy="151" r="9"/><circle cx="352" cy="151" r="9"/>
        {/* Row 6 */}
        <circle cx="64" cy="183" r="9"/><circle cx="128" cy="183" r="9"/><circle cx="192" cy="183" r="9"/><circle cx="256" cy="183" r="9"/><circle cx="320" cy="183" r="9"/>
        {/* Row 7 */}
        <circle cx="32" cy="215" r="9"/><circle cx="96" cy="215" r="9"/><circle cx="160" cy="215" r="9"/><circle cx="224" cy="215" r="9"/><circle cx="288" cy="215" r="9"/><circle cx="352" cy="215" r="9"/>
        {/* Row 8 */}
        <circle cx="64" cy="247" r="9"/><circle cx="128" cy="247" r="9"/><circle cx="192" cy="247" r="9"/><circle cx="256" cy="247" r="9"/><circle cx="320" cy="247" r="9"/>
        {/* Row 9 */}
        <circle cx="32" cy="279" r="9"/><circle cx="96" cy="279" r="9"/><circle cx="160" cy="279" r="9"/><circle cx="224" cy="279" r="9"/><circle cx="288" cy="279" r="9"/><circle cx="352" cy="279" r="9"/>
      </g>
    </svg>
  );

  return (
    <header className="bg-opacity-80 bg-gray-800 text-white py-5 shadow-md fixed top-0 left-0 w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide drop-shadow-md text-white hover:text-blue-300 transition-colors"
        >
          {t("app.brand")}
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
            aria-label="Toggle language"
          >
            {isEnglish ? <IndonesiaFlag /> : <USFlag />}
            <span>{isEnglish ? "ID" : "EN"}</span>
          </button>
          <ul className="flex flex-row space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900/95 border-l border-white/10 shadow-2xl z-50">
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <span className="text-sm uppercase tracking-[0.3em] text-blue-200/70">
                {t("nav.menu")}
              </span>
              <button
                className="text-white"
                onClick={() => setIsOpen(false)}
                aria-label={t("nav.close")}
              >
                ×
              </button>
            </div>

            <div className="px-6 pt-4">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
              >
                {isEnglish ? <IndonesiaFlag /> : <USFlag />}
                <span>{isEnglish ? "ID" : "EN"}</span>
              </button>
            </div>

            <ul className="flex flex-col items-start gap-4 text-lg px-6 py-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;