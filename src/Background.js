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
        <>
            <div className="" style={{ ...styles.container, background: gradient }}>
            </div>
            <h2 className="text-2xl opacity-50" style={styles.text}>[ Press Space Bar ]</h2>
        </>
    );
};

const getRandomGradient = () => {
    const colors = [
        'rgba(102, 77, 0, 0.7)',   // Earthy Brown
        'rgba(110, 42, 12, 0.7)',  // Earthy Red-Brown
        'rgba(105, 19, 18, 0.7)',  // Earthy Deep Red
        'rgba(93, 9, 51, 0.7)',    // Earthy Purple
        'rgba(41, 25, 56, 0.7)',   // Earthy Dark Purple
        'rgba(4, 45, 58, 0.7)',    // Earthy Dark Blue
        'rgba(18, 64, 60, 0.7)',   // Earthy Teal
        'rgba(71, 82, 0, 0.7)'     // Earthy Olive Green
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
    },
    text: {
        position: 'absolute',
        top: '75vh',
        left: '43vw'
    }
};

export default Background;
