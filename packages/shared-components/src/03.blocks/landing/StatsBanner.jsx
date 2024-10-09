import React from 'react';
import { motion } from 'framer-motion';

const StatsBanner = ({ stats, className }) => {
    return (
        <section className={`bg-gray-900 py-2xl ${className}`}>
            <div className="container mx-auto px-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-4xl font-bold mb-sm">{stat.value}</h3>
                            <p className="text-xl">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;