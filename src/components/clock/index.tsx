import React, { useState, useEffect } from 'react';

// Import icon media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/pro-light-svg-icons';

function Clock() {
    // Set state of current time
    const now = new Date().toLocaleTimeString();
    let [time, setTime] = useState(now);
    
    // Function call to update time state
    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    // Automatically update time state after 1000 interval
    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>
            <h2><FontAwesomeIcon icon={faClock} /> {time}</h2>
        </>
    )
};

export default Clock;