import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import './Styles/mobilemenu.scss';
import { useState, useEffect } from "react";


export const MobileMenu = ({handleHome}) => {

    //check menu is clicked or now
    const [open, setOpen] = useState(false);
    //check if display is mobile view or not (true/false) 
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 769);

    useEffect(() => {
        const dropDown = document.getElementById("leftMenu");

        //toggle the menu
        const toggleMenu = () => {
            setOpen(!open);
        };
        // Change the display screen changes
        const handleResize = () => {
            const screenSize = window.innerWidth;
            const isNowMobile = screenSize <= 769;
            setIsMobileView(isNowMobile);
            if (!isNowMobile) {
                // Desktop view, always display the dropdown
                dropDown.style.display = 'grid';
            } else {
                // Mobile view, adjust the display based on the open state
                open ? (dropDown.style.display = 'grid') : (dropDown.style.display = 'none');
            }
        };
        // Initialize the display state when the component mounts
        handleResize();
        window.addEventListener('resize', handleResize);
        document.getElementById("toggle").addEventListener('click', toggleMenu);

        //clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            document.getElementById("toggle").removeEventListener('click', toggleMenu);
        };
        //Render everytime open changes
    }, [open]);

    return (
        <header className="mobileView">
            <div className="mobileLogo" onClick={handleHome}></div>
            <div className="mobileMenuIcon" id="toggle"><AiOutlineMenu/></div>
        </header> 
    )
}