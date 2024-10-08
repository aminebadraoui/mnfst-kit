import React from 'react';

const PrimaryColorDemo = () => {
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    return (
        <div className="space-y-4">

            <div className="grid grid-cols-2 gap-2">
                {shades.map((shade) => (
                    <div key={shade} className="flex items-center">
                        <div className={`w-16 h-16 bg-primary-${shade}`}></div>
                        <span className="ml-2">primary-{shade}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PrimaryColorDemoDemo = PrimaryColorDemo;

export default PrimaryColorDemo;