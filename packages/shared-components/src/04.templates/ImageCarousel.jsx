import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const allImages = Array.isArray(images) ? images : [images];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="relative">
            <img src={allImages[currentIndex]} alt="Service" className="w-full h-64 object-cover rounded-lg" />
            {allImages.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">←</button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">→</button>
                </>
            )}
        </div>
    );
};

export const ImageCarouselDemo = () => {
    const demoImages = [
        'https://picsum.photos/id/1018/1000/600',
        'https://picsum.photos/id/1015/1000/600',
        'https://picsum.photos/id/1019/1000/600',
    ];

    return (
        <div className="space-y-4">

            <div className="w-full max-w-2xl mx-auto">
                <ImageCarousel images={demoImages} />
            </div>
        </div>
    );
};

export default ImageCarousel;