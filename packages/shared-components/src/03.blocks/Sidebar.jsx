import React from 'react';

const Sidebar = ({ children, className }) => {
    return (
        <div className={`bg-primary-500 text-white flex flex-col ${className}`}>
            {children}
        </div>
    );
};

export const SidebarDemo = () => {
    return (
        <div className="h-64 w-64">
            <Sidebar className="h-full">

                <ul className="p-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Sidebar>
        </div>
    );
};

export default Sidebar;