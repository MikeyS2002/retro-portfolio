"use client"
import React, { useState, useEffect } from 'react';

export default function Time() {
    const [time, setTime] = useState('');


    useEffect(() => {
        const interval = setInterval(() => {
            const amsterdamTime = new Date().toLocaleTimeString('en-GB', {
                timeZone: 'Europe/Amsterdam',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setTime(amsterdamTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <span>{time}</span>
    )
}
