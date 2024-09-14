"use client";
import React, { useState, useEffect } from 'react';

const TopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    // Function to scroll to the top
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    // Function to open WhatsApp
    const goToWhatsApp = () => {
        window.open('https://wa.me/+923214455367', '_blank'); // Replace with your WhatsApp number
    };

    // Scroll event to toggle visibility of the button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* WhatsApp Button */}
            <button onClick={goToWhatsApp} className='whatsapp-btn mb-3 rounded-circle px-3 py-2'>
                <i className="bi bi-whatsapp fs-3"></i>
            </button>

            {/* Top Button, only shown when scrolled */}
            {showTopBtn && (
                <button onClick={goToBtn} className='btn topbtn rounded-circle px-3 py-2'>
                    <i className="bi bi-arrow-up fs-3 text-white"></i>
                </button>
            )}
        </>
    );
};

export default TopBtn;
