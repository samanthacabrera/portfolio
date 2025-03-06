import React, { useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import YogaMat from "../../components/YogaMat"; 
import About from "./About";
import ProjectsList from "./ProjectsList";
import Services from "./Services";
import Articles from "./Articles";

function Home() {
    const [is3DView, setIs3DView] = useState(true);
    const [isYogaMatScene, setIsYogaMatScene] = useState(false);

    const toggleView = () => {
        setIs3DView(!is3DView);
    };

    const toggleScene = () => {
        setIsYogaMatScene(!isYogaMatScene);
    };

    return (
        <div className="flex flex-col w-screen min-h-screen justify-center items-center overflow-hidden">
            {/* Toggle View */}
            <div 
                className="fixed top-4 left-4 flex items-center gap-4 cursor-pointer select-none"
                onClick={toggleView}
            >
                <div className="relative w-20 h-8 flex items-center justify-between px-1 bg-gray-900 border border-gray-700 rounded-full shadow-md">
                    <div 
                        className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${is3DView ? "translate-x-10" : "-translate-x-0.5"}`}
                    ></div>
                </div>
                <span className="text-lg font-semibold uppercase tracking-widest">
                    {is3DView ? "3D View" : "Simple View"}
                </span>
            </div>

            {is3DView ? (
                <>
                    {/* Scene Toggle */}
                    <div 
                        className="fixed top-4 right-4 flex items-center gap-2 cursor-pointer select-none"
                        onClick={toggleScene}
                    >
                        <div className="relative w-14 h-7 flex items-center bg-gray-900 border border-gray-700 rounded-full shadow-md">
                            <div 
                                className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${isYogaMatScene ? "translate-x-7" : "translate-x-1"}`}
                            ></div>
                        </div>
                        <span className="text-4xl">
                            {isYogaMatScene ? "🧘‍♀️" : "👩‍💻"}
                        </span>
                    </div>

                    <Hero />
                    {isYogaMatScene ? <YogaMat /> : <Desk />}
                </>
            ) : (
                <div className="flex flex-col py-40 space-y-40 max-w-2xl mx-8">
                    <About />
                    <ProjectsList />
                    <Services />
                    <Articles />
                </div>
            )}
        </div>
    );
}

export default Home;
