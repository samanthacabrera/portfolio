import React, { useEffect } from 'react';

const Background = () => {

    useEffect(() => {
      
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            document.body.classList.add(savedMode);
        } else {
            document.body.classList.add('day-mode');
        }
    }, []);


    const toggleDayNight = () => {
        const isDayMode = document.body.classList.contains('day-mode');
        if (isDayMode) {
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
            localStorage.setItem('theme', 'night-mode');
            console.log('Toggled to Night');
        } else {
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
            localStorage.setItem('theme', 'day-mode');
            console.log('Toggled to Day');
        }
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
                    className="text-2xl bg-transparent border-none cursor-pointer"
                >
                    🌞/🌜  
                </button>
            </div>
        </>
    );
};

export default Background;
