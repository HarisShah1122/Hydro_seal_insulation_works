"use client"
import React, { useEffect } from "react";
import useScrollToTop from "./use-scroll-to-top";

const ScrollToTop = () => {
    const { stick, onClickHandler } = useScrollToTop();
    const phoneNumber = "+971527571873"; // WhatsApp phone number
    
    useEffect(() => {
        const scrollPath = document.querySelector(".scroll-up path");
        if (!scrollPath) return; // Guard clause to prevent null reference
        
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = "none";
        scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = "stroke-dashoffset 10ms linear";
        const updateScroll = () => {
            const scroll = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = progress;
        };
        updateScroll();
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hello! I would like to get more information.");
        window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
    };

    return (
        <>
            <div className={`scroll-up ${stick && "active-scroll"}`} onClick={onClickHandler}>
                <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /></svg>
            </div>
            <div className={`whatsapp-float ${stick && "active-scroll"}`} onClick={handleWhatsAppClick}>
                <i className="fab fa-whatsapp"></i>
                <span className="whatsapp-number" dir="ltr">{phoneNumber}</span>
            </div>
        </>
    );
};

export default ScrollToTop;