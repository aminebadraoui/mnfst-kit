import React from 'react'

const AppLayout = ({ children, className }) => {
    return (
        <div className={`mx-3xl flex flex-col items-center ${className}`}>
            {children}
        </div>
    )
}

export const AppLayoutDemo = () => {
    return (
        <div className='bg-primary-500 w-full'>
            <AppLayout>
                <div className="bg-gray-200 p-4 m-2 w-full text-center">Header Content</div>
                <div className="bg-gray-300 p-4 m-2 w-full text-center">Main Content</div>
                <div className="bg-gray-200 p-4 m-2 w-full text-center">Footer Content</div>
            </AppLayout>

        </div>

    )
}

export default AppLayout