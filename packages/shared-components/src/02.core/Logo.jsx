import React from "react";

const Logo = ({ title, className }) => {
    return (
        <h1 className={`text-2xl font-bold ${className}`}> {title} </h1>
    );
}

export const LogoDemo = () => {
    return (
        <div className="space-y-4">

            <div className="p-4 bg-gray-100">
                <Logo />
            </div>
        </div>
    );
};

export default Logo;