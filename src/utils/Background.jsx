import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Background = () => {
    const [gradient, setGradient] = useState(getRandomGradient());
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [spaceCount, setSpaceCount] = useState(0);
    const [timer, setTimer] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                event.preventDefault();
                setGradient(getRandomGradient());

                setSpaceCount((prevCount) => prevCount + 1);

                if (spaceCount === 0) {
                    const newTimer = setTimeout(() => {
                        setSpaceCount(0); 
                    }, 500);
                    setTimer(newTimer);
                }
                if (spaceCount + 1 > 5) {
                    setIsVisible(true);
                    setTimeout(() => {
                        setIsVisible(false);
                    }, 5000);
                }
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleClick = () => {
            setGradient(getRandomGradient());
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);

        if (windowWidth <= 768) {
            window.addEventListener('click', handleClick);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
            if (windowWidth <= 768) {
                window.removeEventListener('click', handleClick);
            }
            clearTimeout(timer);
        };
    }, [windowWidth, spaceCount, timer]);

    const showText = location.pathname === '/';
    const isSmallDevice = windowWidth <= 768;

    return (
        <>
            <div className="fixed inset-0" style={{ ...styles.container, background: gradient }}></div>
            {showText && (
                <div style={{ ...styles.textContainer, cursor: isSmallDevice ? 'pointer' : 'default' }}>
                    <h2 className="text-black opacity-20">{isSmallDevice ? '[Tap Screen]' : '[Press Spacebar]'}</h2>
                </div>
            )}
            {isVisible && (
               <p id="content" className="z-50 w-full flex justify-center items-center bg-black text-gray-50 font-light text-xs">Whoa, slow down buddy</p>
            )}
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
        zIndex: -1,
        transition: 'background 0.5s ease',
        opacity: 0.7
    },
    textContainer: {
        position: 'absolute',
        bottom: '2%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    popupImage: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, 
        width: '150px',
        height: '150px',
        border: '2px solid #fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
    }
};

export default Background;
