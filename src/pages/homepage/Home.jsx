import React, { useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import About from "./About";
import ProjectList from "./ProjectList";

function Home() {
    const [is3DView, setIs3DView] = useState(true);

    const toggleView = () => {
        setIs3DView(!is3DView);
    };;

    const componentCards = [
        { component: <Hero is3DView={is3DView} />, className: "col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1" },
        { component: <About />, className: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3" },
        { component: <ProjectList />, className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1" },
    ];

    return (
        <div >
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
                    <Hero is3DView={is3DView}/>
                    <Desk />
                </div>
            ) : (
                // Simple View
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {componentCards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md ${card.className}`}
                        >
                            {card.component}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
