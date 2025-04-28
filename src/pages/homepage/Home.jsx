import React, { useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import About from "./About";
import ProjectList from "./ProjectList";

function Home() {
    const [is3DView, setIs3DView] = useState(true);

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
            {/* View Toggle */}
            <div
                className="h-12 w-screen z-10 backdrop-blur-sm fixed top-0 left-0 p-4 flex items-center gap-2 cursor-pointer select-none"
                onClick={toggleView}
            >
                <div className="relative w-14 h-7 flex items-center bg-gray-900 border border-gray-700 rounded-full shadow-md">
                    <div
                        className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${is3DView ? "translate-x-1" : "translate-x-7"}`}
                    ></div>
                </div>
                <span className="text-lg font-semibold uppercase tracking-widest">
                    {is3DView ? "3D View" : "Simple View"}
                </span>
            </div>

            {is3DView ? (
                // 3D View
                <div className="flex flex-col justify-between items-center w-screen h-[90vh]">
                    <Hero is3DView={is3DView} />
                    <Desk />
                </div>
            ) : (
                // Simple View
                <div className="flex flex-col items-center w-screen p-6 gap-6 pt-20">
                    {componentCards.map(({ component, key }) => (
                        <div key={key} className="w-full max-w-4xl">
                            {component}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
