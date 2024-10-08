import React from "react";

const Logo = ({ className }) => {
    return (
        <h1 className={className}> MNFST KIT </h1>
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