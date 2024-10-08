import React from 'react'

const RightImageSection = ({ imageUrl, title, description, buttonTitle, mainAction, className, ButtonComponent }) => {
    const Button = ButtonComponent || 'button';

    return (
        <section className={`py-2xl px-md sm:px-lg lg:px-xl bg-gray-50 w-full ${className}`}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-xl">
                    <div className="md:w-1/2">
                        <img src={imageUrl} alt="Right Image" className="rounded-lg shadow-md w-full" />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-3xl font-bold mb-lg text-center md:text-left"> {title} </h2>
                        <div>
                            {description}
                        </div>
                        <Button
                            onClick={mainAction}
                            className="bg-primary-500 mt-lg text-white px-lg py-sm rounded-md font-semibold hover:bg-primary-600 transition duration-300 self-center md:self-start"
                        >
                            {buttonTitle}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const RightImageSectionDemo = () => {
    return (
        <div className="space-y-4">
            <RightImageSection
                imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Right Image Section"
                description="This is a sample description for the right image section. It can contain multiple paragraphs or components."
                buttonTitle="Get Started"
                mainAction={() => alert('Button clicked')}
                className="border-2 border-gray-200"
            />
        </div>
    );
};

export default RightImageSection