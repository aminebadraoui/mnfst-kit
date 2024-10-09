import React from 'react';
import { motion } from 'framer-motion';
import ConsultationForm from '../03.blocks/ConsultationForm.jsx';

function ConsultationSection({
    title = "Request a Consultation",
    imageSrc = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt = "Consultation",
    onSubmit
}) {
    return (
        <section id="consultation" className="snap-start bg-gray-100 flex items-center justify-center py-2xl">
            <div className="container mx-auto px-md">
                <h2 className="text-3xl font-bold mb-xl text-center">{title}</h2>
                <div className="flex flex-col md:flex-row gap-lg">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="relative pb-[56.25%] rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ConsultationForm onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConsultationSection;