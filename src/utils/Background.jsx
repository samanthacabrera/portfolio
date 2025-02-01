import React, { useEffect } from 'react';

const Background = () => {
    useEffect(() => {
        document.body.classList.add('night-mode'); 
    }, []);

    return null; 
};

export default Background;
