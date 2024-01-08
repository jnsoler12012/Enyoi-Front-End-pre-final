import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
const randomColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

export default function () {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-end",
            
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const randomColorClass = "w-12 h-12 text-sm text-white inline-flex items-center justify-center rounded-full"


    return (
        <div>
            <a
                className="text-blueGray-500 block"
                href="#user"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
                    <p style={{ background: randomColor }} className={randomColorClass}>
                        R
                    </p>
                </div>
            </a >
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <a
                    href="#user"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Seprated link
                </a>
            </div>
        </div >
    );
};