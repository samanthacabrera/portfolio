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
            <div
                className="fixed inset-0 transition-all duration-300 ease-in-out"
                style={{ zIndex: -1 }}
            ></div>
            <div
                className="absolute top-1 right-2 transition-all duration-300 ease-in-out"
                style={{ zIndex: 1 }}
            >
                <button
                    onClick={toggleDayNight}
                    className={`w-16 h-8 flex items-center relative rounded-full p-1 transition-colors duration-300 ${
                        isDayMode ? 'bg-gray-300' : 'bg-gray-600'
                    }`}
                >
                    {/* Sun Emoji */}
                    <span
                        className={`absolute left-2 text-lg transition-all duration-300 ${
                            isDayMode ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        🌞
                    </span>

                    {/* Toggle Circle */}
                    <span
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            isDayMode ? 'translate-x-0' : 'translate-x-7'
                        }`}
                    ></span>

                    {/* Moon Emoji */}
                    <span
                        className={`absolute right-2 text-lg transition-all duration-300 ${
                            isDayMode ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        🌜
                    </span>
                </button>
            </div>
        </>
    );
};

export default Background;
