import React, { useState } from "react";
import Hero from "./Hero";
import Desk from "../../components/Desk";
import About from "./About";
import Services from "./Services";
import ProjectList from "./ProjectList";
import ArticleList from "./ArticleList";

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
                <>
                {/* Simple View - Mobile */}
                <div className="flex flex-col justify-center items-center py-40 space-y-40 max-w-2xl mx-4 lg:hidden">
                    <Hero is3DView={is3DView} />
                    <About />
                    <Services />
                    <ProjectList />
                    <ArticleList />
                </div>
                {/* Simple View - Desktop */}
                <div className="hidden lg:grid grid-cols-3 gap-8 p-12">
                    <div className="bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md col-span-1">
                        <Hero is3DView={is3DView} />
                    </div>
                    <div className="bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md col-span-2">
                        <About />
                    </div>
                    <div className="bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md col-span-1">
                        <Services />
                    </div>
                    <div className="bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md col-span-1">
                        <ProjectList />
                    </div>
                    <div className="bg-white/5 hover:bg-white/10 hover:scale-[102%] transition-all duration-500 p-6 rounded-xl shadow-md col-span-1">
                        <ArticleList />
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default Home;
