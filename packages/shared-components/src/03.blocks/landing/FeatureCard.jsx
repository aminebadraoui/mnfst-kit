import React from 'react'

const FeatureCard = ({ title, description, icon }) => (
    <div className="bg-white p-lg rounded-lg shadow-md text-center  flex flex-col items-center h-full">
        <div className="mb-md flex items-center justify-center h-20">{icon}</div>
        <h3 className="text-xl font-semibold mb-sm">{title}</h3>
        <p>{description}</p>
    </div>
);

export const FeatureCardDemo = () => {
    return (
        <div className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeatureCard
                    title="Feature 1"
                    description="This is a description for Feature 1"
                    icon={<span className="text-3xl">🚀</span>}
                />
                <FeatureCard
                    title="Feature 2"
                    description="This is a description for Feature 2"
                    icon={<span className="text-3xl">💡</span>}
                />
                <FeatureCard
                    title="Feature 3"
                    description="This is a description for Feature 3"
                    icon={<span className="text-3xl">🔧</span>}
                />
            </div>
        </div>
    );
};

export default FeatureCard