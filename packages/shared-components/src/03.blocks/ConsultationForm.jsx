import React from 'react';
import { motion } from 'framer-motion';
import Input from '../02.core/Input.jsx';
import Button from '../02.core/Button.jsx';
function ConsultationForm({ onSubmit, className }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Collect form data and call onSubmit
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-lg p-md ${className}`}>
            <div className="mb-md">
                <Input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="mb-md">
                <Input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="mb-md">
                <textarea
                    name="message"
                    placeholder="Tell us about your SaaS idea"
                    required
                    className="w-full px-sm py-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 h-32"
                />
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    title="Request Consultation"
                    type="submit"
                    className="w-full"
                />
            </motion.div>
        </form>
    );
}

export default ConsultationForm;