import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="bg-opacity-80 bg-gray-800 text-white py-5 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-3xl font-bold tracking-wide drop-shadow-md">
                    My Portofolio
                </h1>
                <nav className="mr-8">
                    <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">Home</Link>
                    </li>
                        <li>
                            <Link to="/about" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                                About
                            </Link>

                        </li>
                        <li>
                            <Link to="/projects" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                                Projects
                            </Link>

                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-blue-400 font-medium transition-colors duration-300">
                                Contact
                            </Link>

                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
