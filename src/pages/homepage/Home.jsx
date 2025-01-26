import React, { useState } from "react";
import Hero from "./Hero";
import Room from "../../components/Room";
import About from "./About";
import ProjectsList from "./ProjectsList";
import Services from "./Services";
import Articles from "./Articles";

function Home() {
    const [is3DView, setIs3DView] = useState(true);

    const toggleView = () => {
        setIs3DView(!is3DView);
    };

    return (
        <div className="flex flex-col w-screen min-h-screen justify-center items-center overflow-hidden">
            <div 
                className="fixed top-2 left-2 flex items-center cursor-pointer"
                onClick={toggleView}
            >
                <div 
                    className="w-12 h-6 flex items-center rounded-full p-1 transition-colors bg-gray-300"
                >
                    <div 
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${is3DView ? 'translate-x-6' : 'translate-x-0'}`}
                    ></div>
                </div>
                <span className="ml-2 text-sm">{is3DView ? "3D View" : "Simple View"}</span>
            </div>
            
            {is3DView ?
                <>
                    <Hero />
                    <Room />
                </>
                 :
                <div className="flex flex-col py-40 space-y-20 max-w-2xl mx-8">
                    <About />
                    <ProjectsList />
                    <Services />
                    <Articles />
                </div>
            }
        </div>
    );
}

export default Home;
