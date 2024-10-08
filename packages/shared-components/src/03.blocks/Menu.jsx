import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../02.core/Avatar.jsx";

import MenuItem from "../02.core/MenuItem.jsx";


const Menu = () => {
    const [isMenuOpen, setOpenMenu] = useState(false);



    const toggleMenu = () => {
        setOpenMenu(!isMenuOpen);
    }

    const handleMenuItemClick = (item) => {


        setOpenMenu(false);
    }

    return (
        <>
            <div className="relative bg-white p-2 border-[1px] rounded shadow-md w-24">
                <div className="flex flex-row justify-between items-center gap-2 hover:cursor-pointer">
                    <div className="" onClick={toggleMenu} >
                        <AiOutlineMenu />
                    </div>
                    <div>
                        <Avatar size="sm" />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute z-50 bg-white right-0 top-12 py-2 flex flex-col align-middle gap-2 border-[1px] rounded shadow-md w-[25vw]">

                    </div>
                )}
            </div>
        </>
    )
}

export const MenuDemo = () => {
    return (
        <div className="space-y-4">

            <div className="w-64">
                <Menu />
            </div>
        </div>
    );
};

export default Menu;