import React from "react";

const MenuItem = ({ name, onClick, className }) => {
    return (
        <div
            className={`hover:bg-gray-200 ${onClick ? 'hover:cursor-pointer' : ''} ${className || ''}`}
            onClick={onClick}
        >
            <div className="p-2">
                {name}
            </div>
        </div>
    );
}

export const MenuItemDemo = () => {
    const handleClick = (itemName) => {
        alert(`Clicked on ${itemName}`);
    };

    return (
        <div className="space-y-4">

            <MenuItem name="Home" onClick={() => handleClick("Home")} />
            <MenuItem name="About" onClick={() => handleClick("About")} />
            <MenuItem name="Contact" onClick={() => handleClick("Contact")} />
        </div>
    );
};

export default MenuItem;