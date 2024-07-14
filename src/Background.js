import React, { useState, useEffect } from 'react';

const Background = () => {
    const [gradient, setGradient] = useState(getRandomGradient());

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                setGradient(getRandomGradient());
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="flex justify-center items-center" style={{ ...styles.container, background: gradient }}>
            <h2 className="text-2xl opacity-50 pt-52">[ Press Space Bar ]</h2>
        </div>
    );
};

const getRandomGradient = () => {
    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF33F6', '#33FFF6'
    ];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
};

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        transition: 'background 0.5s ease'
    }
};

export default Background;
