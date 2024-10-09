import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = ({ testimonials, className, title = "What Our Customers Say" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`bg-gray-100 flex items-center justify-center py-20 border ${className}`}>
            <div className="max-w-4xl w-full mx-auto relative">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>
                <div className="bg-white rounded-lg shadow-lg px-8 relative overflow-hidden h-48">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ x: direction > 0 ? '100%' : '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: direction > 0 ? '-100%' : '100%' }}
                            transition={{ duration: 0.3 }}
                            className="text-center absolute inset-0 flex flex-col justify-center"
                        >
                            <p className="text-xl mb-4 italic">{testimonials[currentIndex].text}</p>
                            <p className="text-lg font-semibold">- {testimonials[currentIndex].name}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button onClick={prevTestimonial} className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-yellow-600 p-2 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
                    <FaChevronLeft />
                </button>
                <button onClick={nextTestimonial} className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-yellow-600 p-2 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default Testimonial;