import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="loading" className={`${isLoading ? 'absolute inset-0 h-screen w-screen flex items-center justify-center' : 'hidden'}`}>
            <div className="flex flex-row items-center space-x-2">
                <FaSpinner className="animate-spin text-2xl" /> 
            </div>
        </section>
    );
};

export default LoadingScreen;

