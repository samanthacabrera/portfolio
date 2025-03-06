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
        <div className="flex flex-col w-screen h-screen justify-center items-center overflow-hidden">
            {/* View Toggle */}
            <div 
                className="fixed top-4 left-4 flex items-center gap-2 cursor-pointer select-none"
                onClick={toggleView}
            >
                <div className="relative w-14 h-7 flex items-center bg-gray-900 border border-gray-700 rounded-full shadow-md">
                    <div 
                        className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform duration-300 ${is3DView ? "translate-x-7" : "translate-x-1"}`}
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
                        className="absolute bottom-40 flex items-center justify-center gap-4 cursor-pointer select-none z-10"
                        onClick={toggleScene}
                    >
                        <span 
                            className="text-lg font-medium transition-all px-6 py-2 rounded-full border border-white"
                        >
                            {isYogaMatScene ? "explore my dev side 👩‍💻" : "explore my yogi side 🧘‍♀️"}
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
