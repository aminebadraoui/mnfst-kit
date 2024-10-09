import React from 'react';
import { motion } from 'framer-motion';

const SimpleCategoryCard = ({ name, image, buttonText, onButtonClick }) => {
    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-md flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-sm text-primary-800">{name}</h3>
                <motion.button
                    className="mt-auto bg-primary-500 text-white py-sm px-md rounded-md font-semibold hover:bg-primary-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onButtonClick}
                >
                    {buttonText}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default SimpleCategoryCard;