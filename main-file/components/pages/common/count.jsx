"use client";
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Count = ({ number }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <>{number}</>;
    }

    return (
        <>
            <CountUp end={number} enableScrollSpy />
        </>
    );
};

export default Count;