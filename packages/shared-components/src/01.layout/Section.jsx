import React from 'react';


const Section = ({ title, children, className }) => (
    <section className={`mt-md p-md w-full ${className}`}>
        <h2 className="text-3xl font-semibold mb-8">{title}</h2>
        {children}
    </section>
);

export const SectionDemo = () => {
    return (
        <Section title="Demo Section" className="bg-primary-50">
            <p>This is some sample content for the Section component.</p>
            <p>You can add any content here.</p>
        </Section>
    );
};

export default Section;
