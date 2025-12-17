"use client";
import { useState, useEffect } from "react";

function useScrollToTop() {
    const [stick, setStick] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const scrollHandler = () => {
            setStick(window.pageYOffset > 50);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    
    return { 
        stick: isClient ? stick : false, 
        onClickHandler: () => {
            if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };
}

export default useScrollToTop;