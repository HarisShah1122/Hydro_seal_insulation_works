"use client"
import { useEffect } from 'react';

const BootstrapProvider = ({ children }) => {
    useEffect(() => {
        // Dynamically import Bootstrap JS only on client side
        import('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return children;
};

export default BootstrapProvider;
