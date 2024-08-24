"use client";
import React from 'react';

const TopBtn = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const goToWhatsApp = () => {
        window.open('https://wa.me/+923214455367', '_blank'); // Replace with your WhatsApp number
    };

    return (
        <>
            <button onClick={goToWhatsApp} className='whatsapp-btn mb-3 rounded-circle px-3 py-2'>
                <i className="bi bi-whatsapp fs-3"></i>
            </button>
            <button onClick={goToBtn} className='btn topbtn rounded-circle px-3 py-2'>
                <i className="bi bi-arrow-up fs-3 text-white"></i>
            </button>
        </>
    );
};

export default TopBtn;
