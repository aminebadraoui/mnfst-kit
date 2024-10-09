import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Hero({ title, subtitle, backgroundImage, ctaText, ctaAction }) {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.snap-start:nth-child(2)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <motion.div
                className="relative z-20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold mb-4">{title}</h1>
                <p className="text-2xl mb-8">{subtitle}</p>
                <motion.button
                    onClick={ctaAction}
                    className="bg-primary-500 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block hover:bg-yellow-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {ctaText}
                </motion.button>
            </motion.div>
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-50 text-4xl cursor-pointer z-20"
                onClick={scrollToNextSection}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
}

export default Hero;