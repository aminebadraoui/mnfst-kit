import React from 'react';

const FontSizesDemo = () => {
    const fontSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];

    return (
        <div className="space-y-4">

            {fontSizes.map((size) => (
                <div key={size} className={`text-${size}`}>
                    This is text-{size}
                </div>
            ))}
        </div>
    );
};

export const FontSizesDemoDemo = FontSizesDemo;

export default FontSizesDemo;