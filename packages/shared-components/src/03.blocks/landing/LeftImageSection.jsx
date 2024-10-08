import React from 'react'

const LeftImageSection = ({ imageUrl, title, description, buttonTitle, mainAction, className, ButtonComponent }) => {
    const Button = ButtonComponent || 'button';

    return (
        <section className={`py-2xl px-md sm:px-lg lg:px-xl w-full ${className}`}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row-reverse items-center gap-xl">
                    <div className="md:w-1/2">
                        <img src={imageUrl} alt="left image" className="rounded-lg shadow-md w-full" />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-3xl font-bold mb-lg text-center md:text-left">{title}</h2>
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

export default LeftImageSection