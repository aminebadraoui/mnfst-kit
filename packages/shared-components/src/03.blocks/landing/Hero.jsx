import React from 'react'

const Hero = ({
    imageUrl,
    title,
    subtitle,
    buttonTitle,
    secondaryButtonTitle,
    mainAction,
    secondaryAction }) => {
    return (
        <section className="relative h-screen w-full ">
            <img
                src={imageUrl}
                alt="Hero Image"
                className=" absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 mx-auto max-w-4xl">
                    <h1 className="z-50 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-md">
                        {title}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white mb-lg">
                        {subtitle}
                    </p>
                    <div className="flex justify-center space-x-md">
                        <button onClick={mainAction} className="bg-primary-500 text-white px-lg py-sm rounded-md font-semibold hover:bg-primary-600 transition duration-300">
                            {buttonTitle}
                        </button>
                        <button onClick={secondaryAction} className="bg-white text-primary-500 px-lg py-sm rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                            {secondaryButtonTitle}
                        </button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export const HeroDemo = () => {
    return (
        <div className="space-y-4">

            <Hero
                imageUrl="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80"
                title="Welcome to Our Site"
                subtitle="Discover amazing features and services"
                buttonTitle="Get Started"
                secondaryButtonTitle="Learn More"
                mainAction={() => alert('Main action clicked')}
                secondaryAction={() => alert('Secondary action clicked')}
            />
        </div>
    );
};

export default Hero