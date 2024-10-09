import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ logoElement, navItems, extraElement, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={`bg-black shadow-md fixed top-0 left-0 right-0 z-50 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {logoElement}
                    <div className="flex items-center space-x-lg">
                        <nav className="hidden md:flex space-x-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    className="text-gray-600 hover:text-gray-900 transition duration-300"
                                >
                                    {item.text}
                                </a>
                            ))}
                        </nav>
                        {extraElement && (
                            <div className="hidden md:block">
                                {extraElement}
                            </div>
                        )}
                        <button
                            className="md:hidden text-gray-600 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden bg-white ${isOpen ? 'block' : 'hidden'}`}
            >
                <nav className="flex flex-col px-4 py-2">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="text-gray-600 hover:text-gray-900 py-2 transition duration-300"
                            onClick={toggleMenu}
                        >
                            {item.text}
                        </a>
                    ))}
                    {extraElement && (
                        <div className="py-2">
                            {extraElement}
                        </div>
                    )}
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;