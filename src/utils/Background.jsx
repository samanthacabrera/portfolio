import React, { useEffect, useState } from 'react';

const Background = () => {
    const [isDayMode, setIsDayMode] = useState(
        localStorage.getItem('theme') !== 'night-mode'
    );

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            document.body.classList.add(savedMode);
        } else {
            document.body.classList.add('day-mode');
        }
    }, []);

    const toggleDayNight = () => {
        if (isDayMode) {
            document.body.classList.replace('day-mode', 'night-mode');
            localStorage.setItem('theme', 'night-mode');
        } else {
            document.body.classList.replace('night-mode', 'day-mode');
            localStorage.setItem('theme', 'day-mode');
        }
        setIsDayMode(!isDayMode);
    };

    return (
        <>
            {/* <div
                className="fixed inset-0 transition-all duration-300 ease-in-out"
                style={{ zIndex: -1 }}
            ></div>
            <div
                className="fixed top-2 right-2 transition-all duration-300 ease-in-out"
                style={{ zIndex: 1 }}
            >
                <button
                    onClick={toggleDayNight}
                    className={`w-16 h-8 flex items-center relative rounded-full p-1 transition-colors duration-300 ${
                        isDayMode ? 'bg-black' : 'bg-white'
                    }`}
                >
                  
                    <span
                        className={`absolute left-2 text-lg transition-all duration-300 ${
                            isDayMode ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        🌞
                    </span>

                  
                    <span
                        className={`w-6 h-6 rounded-full shadow-lg transform transition-transform duration-300 ${
                            isDayMode ? 'translate-x-0 bg-gray-50' : 'translate-x-8 bg-gray-300'
                        }`}
                    ></span>

                 
                    <span
                        className={`absolute right-2 text-lg transition-all duration-300 ${
                            isDayMode ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        🌜
                    </span>
                </button>
            </div> */}
        </>
    );
};

export default Background;
