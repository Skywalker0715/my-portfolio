import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-opacity-80 bg-gray-800 text-white py-5 shadow-md fixed top-0 left-0 w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide drop-shadow-md text-white hover:text-blue-300 transition-colors"
        >
          My Portofolio
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
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex flex-row space-x-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
              >
                Contact
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
              <span className="text-sm uppercase tracking-[0.3em] text-blue-200/70">Menu</span>
              <button
                className="text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col items-start gap-4 text-lg px-6 py-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Contact
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
