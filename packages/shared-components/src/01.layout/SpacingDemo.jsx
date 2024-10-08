import React from 'react';

const SpacingDemo = () => {
    const spacings = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
    const spacingValues = {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px'
    };

    return (
        <div className="space-y-4">


            <h3 className="text-xl font-semibold">Padding</h3>
            <div className="flex flex-wrap gap-4">
                {spacings.map((spacing) => (
                    <div key={`padding-${spacing}`} className="flex flex-col items-center">
                        <div className={`bg-primary-500 p-${spacing} w-16 h-16 flex items-center justify-center`}

                        >
                            <div className="bg-white text-xs p-1">p-{spacing}</div>
                        </div>
                        <div className="mt-2 text-xs">{spacing}</div>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-semibold mt-8">Margin</h3>
            <div className="space-y-4 bg-gray-200 p-4">
                {spacings.map((spacing) => (
                    <div key={`margin-${spacing}`} className="flex items-center">
                        <div className={`bg-primary-500 m-${spacing} w-16 h-16 flex items-center justify-center`}

                        >
                            <div className="bg-white text-xs p-1">m-{spacing}</div>
                        </div>
                        <div className="ml-4 text-xs">{spacing}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SpacingDemoDemo = SpacingDemo;

export default SpacingDemo;