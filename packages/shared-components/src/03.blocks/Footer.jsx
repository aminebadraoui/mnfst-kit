import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({
    logo,
    description,
    links,
    socialLinks,
    copyrightText,
    className
}) => {
    return (
        <footer className={`bg-gray-800 text-white py-12 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="h-8 mb-4" />
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <a href={link.url} className="text-gray-400 hover:text-white transition duration-300">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => {
                                const Icon = {
                                    facebook: FaFacebook,
                                    twitter: FaTwitter,
                                    instagram: FaInstagram,
                                    linkedin: FaLinkedin
                                }[link.platform];

                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className="text-gray-400 hover:text-white transition duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">{copyrightText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;