import React from "react";


import Menu from "./Menu.jsx";
import Logo from "../02.core/Logo.jsx";


const Navbar = ({ className }) => {


    return (
        <div className={`bg-white fixed z-50 w-full h-[80px] flex flex-col justify-center ${className}`}>
            <div className="flex flex-row justify-between h-full mx-3xl">

                <Logo />


                <div className="flex flex-row gap-4 items-center">
                    {(
                        <>

                        </>
                    )}
                    <Menu />
                </div>
            </div>
        </div>
    );
}


export const NavbarDemo = () => {
    return (
        <div className="">

            <div className="m-lg">
                <Navbar className="border-2 border-gray-200" />
            </div>
        </div>
    );
};

export default Navbar;