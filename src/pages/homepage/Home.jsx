import React, { useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import About from "./About";
import ProjectsList from "./ProjectsList";
import Services from "./Services";
import Articles from "./Articles";

function Home() {
    const [is3DView, setIs3DView] = useState(true);

    const toggleView = () => {
        setIs3DView(!is3DView);
    };;

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
                <div className="flex flex-col justify-between items-center w-screen h-[90vh]">
                    <Hero is3DView={is3DView}/>
                    <Desk />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center py-40 space-y-40 max-w-2xl mx-4 md:mx-auto">
                    <Hero is3DView={is3DView} />
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
