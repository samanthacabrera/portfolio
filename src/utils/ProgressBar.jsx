import React, { useEffect, useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const windowScrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const calculatedProgress = (windowScrollTop / (docHeight - windowHeight)) * 100;
            setProgress(calculatedProgress);
        };

        window.addEventListener('scroll', calculateProgress);
        return () => window.removeEventListener('scroll', calculateProgress);
    }, []);

    return (
        <div className="progress-wrapper fixed top-0 left-0 w-full z-50">
            <div className="bar h-1 progress" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;