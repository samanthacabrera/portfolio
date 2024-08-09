import React, { useEffect, useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const calculateProgress = () => {
            const windowScrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const calculatedProgress = (windowScrollTop / (docHeight - windowHeight)) * 100;
            setProgress(calculatedProgress);
        };

        const handleResize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener("scroll", calculateProgress);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", calculateProgress);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`progress-wrapper fixed z-50 ${isMdOrLarger ? 'inset-0' : 'top-0 left-0 w-full'}`}>
            <div
                className={`bar h-1 ${isMdOrLarger ? 'absolute top-0 left-0 w-full' : ''}`}
                style={isMdOrLarger ? { width: `${progress}%` } : { width: `${progress}%` }}
            ></div>
            {isMdOrLarger && (
                <>
                    <div
                        className="bar w-1 absolute top-0 right-0 h-full"
                        style={{ height: `${progress}%` }}
                    ></div>
                    <div
                        className="bar h-1 absolute bottom-0 left-0 w-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                    <div
                        className="bar w-1 absolute top-0 left-0 h-full"
                        style={{ height: `${progress}%` }}
                    ></div>
                </>
            )}
        </div>
    );
}

export default ProgressBar;
