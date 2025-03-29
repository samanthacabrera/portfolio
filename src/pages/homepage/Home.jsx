import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import YogaMat from "../../components/YogaMat"; 
import About from "./About";
import ProjectsList from "./ProjectsList";
import Services from "./Services";
import Articles from "./Articles";
import Footer from "../../components/Footer";

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
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    {/* Scene Toggle */}
                    <div 
                        className="fixed bottom-24 flex items-center justify-center gap-4 cursor-pointer select-none z-10"
                        onClick={toggleScene}
                    >
                        <span 
                            className="px-4 py-2 rounded border "
                        >
                            {isYogaMatScene ? "explore my dev side 👩‍💻" : "explore my yogi side 🧘‍♀️"}
                        </span>
                    </div>
                    <Hero is3DView={is3DView}/>
                    {isYogaMatScene ? <YogaMat /> : <Desk />}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center py-40 space-y-40 max-w-2xl mx-auto">
                    <Hero is3DView={is3DView} />
                    <About />
                    <ProjectsList />
                    <Services />
                    <Articles />
                </div>
            )}

            {!is3DView && <Footer />}
        </div>
    );
}

export default Home;
