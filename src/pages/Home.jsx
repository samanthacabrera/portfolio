import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Desk from "../components/Desk";
import About from "./About";
import ProjectList from "./ProjectList";
import Footer from "../utils/Footer";

const ViewPrompt = ({ onSelect }) => {
    const handleSelect = (choice) => {
        setTimeout(() => onSelect(choice), 100); 
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-md">

            <div 
                className="relative bg-gradient-to-b from-gray-950 to-black w-[80vw] h-[70vh] rounded shadow-[0_0_100px_20px_rgba(255,255,255,0.05)] flex flex-col justify-center items-center"
            >

                <div className="absolute -z-10 -inset-12 blur-2xl bg-white/20" />

                <h1 className="text-lg tracking-wider mb-8">WELCOME TO <span className="font-medium">SAMOONTHA.COM</span></h1>

                <h2 className="text-xl font-light text-center text-white mb-12">
                    Pick your view
                </h2>

                {/* Options */}
                <div className="flex gap-6">
                    <button
                        className="px-6 py-2 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                        onClick={() => handleSelect(false)}
                    >
                        Simple
                    </button>
                    <button
                        className="px-6 py-2 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                        onClick={() => handleSelect(true)}
                    >
                        3D
                    </button>
                </div>
            </div>
        </div>
    );
};

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [is3DView, setIs3DView] = useState(true);
    const [showPrompt, setShowPrompt] = useState(true);

    useEffect(() => {
        const savedChoice = sessionStorage.getItem("userViewChoice");
    
        const mobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) || window.innerWidth < 768;
    
        setIsMobile(mobile); 
    
        if (mobile) {
            setIs3DView(false);      
            setShowPrompt(false);    
        } else if (savedChoice !== null) {
            setIs3DView(savedChoice === "3D");
            setShowPrompt(false);
        }
    }, []);
    
    const handleInitialChoice = (choice) => {
        setIs3DView(choice);
        setShowPrompt(false);
        // sessionStorage.setItem("userViewChoice", choice ? "3D" : "Simple");
    };

    const toggleView = () => {
        setIs3DView(!is3DView);
    };

    const componentCards = [
        { component: <Hero is3DView={is3DView} />, key: "hero" },
        { component: <About />, key: "about" },
        { component: <ProjectList />, key: "projects" },
    ];

    return (
        <div>
            {showPrompt && <ViewPrompt onSelect={handleInitialChoice} />}

            {/* View Toggle */}
            {!isMobile && (
            <div
                className="h-12 w-screen z-10 fixed top-0 left-0 p-4 flex items-center gap-2 cursor-pointer select-none"
               
            >
                <div className="relative w-14 h-7 flex items-center bg-gray-900 border border-gray-700 rounded-full shadow-md"
                    onClick={toggleView}
                >
                    <div
                        className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                            is3DView ? "translate-x-1" : "translate-x-7"
                        }`}
                    ></div>
                </div>
                <span className="text-lg font-semibold uppercase tracking-widest">
                    {is3DView ? "3D View" : "Simple View"}
                </span>
            </div>
            )}

            {/* Main Content */}
            {!showPrompt &&
                (is3DView ? (
                    <div className="flex flex-col justify-between items-center w-screen">
                        <Hero is3DView={is3DView} />
                        <Desk is3DView={is3DView} />
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-screen space-y-6">
                        {componentCards.map(({ component, key }) => (
                            <div key={key} className="w-full max-w-4xl px-4">
                                {component}
                            </div>
                        ))}
                        <Footer/>
                    </div>
                ))}
        </div>
    );
}

export default Home;
