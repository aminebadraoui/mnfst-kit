import React from 'react';

function FullScreenSection({ title, subtitle, image, textOnTheRight }) {
    return (
        <section className="min-h-screen w-full relative bg-gray-50 text-gray-800">
            <ImageSection image={image} />
            <TextSection title={title} subtitle={subtitle} textOnTheRight={textOnTheRight} />
        </section>
    );
}

function ImageSection({ image }) {
    return (
        <div className="absolute inset-0 w-full h-full">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0  md:hidden"></div>
        </div>
    );
}

function TextSection({ title, subtitle, textOnTheRight }) {
    return (
        <div className={`absolute w-full md:top-0 bottom-0 z-10  md:w-1/2 md:h-full md:flex md:flex-col md:justify-center ${textOnTheRight ? 'md:right-0' : 'md:left-0'}`}>
            <div className="flex flex-col items-center md:items-start bg-white bg-opacity-90 p-6 ">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">{title}</h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-center md:text-left text-gray-800">{subtitle}</p>
                <a href="#contact" className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block w-full md:w-auto text-center hover:bg-yellow-700">
                    Explore
                </a>
            </div>
        </div>
    );
}

export default FullScreenSection;