import React from "react";
import Hero from "./Hero";
import Intro from "./Intro";
import ProjectsList from "./ProjectsList";
import Services from "./Services";
import Blog from "./Blog";

function Home() {
    return (
        <>
        {/* Desktop Layout */}
        <div 
            className="hidden md:block relative w-screen h-screen overflow-auto scroll-smooth"
            style={{ scrollSnapType: "both mandatory" }}
        >
            <div className="grid grid-cols-3 grid-rows-3 w-[300vw] h-[300vh]">
                {/* Top Row */}
                <section 
                    id="hero" 
                    className="w-screen h-screen flex flex-col items-center justify-center"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <Hero />
                </section>
                <section 
                    className="w-screen h-screen flex items-center justify-center" 
                    style={{ scrollSnapAlign: "start" }}
                >
                    <img src="/doodles/moon1.png" className="size-20"/>
                </section>
                <section 
                    id="projects" 
                    className="w-screen h-screen flex items-center justify-center"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <ProjectsList />
                </section>

                {/* Middle Row */}
                <section 
                    className="w-screen h-screen flex items-center justify-around" 
                    style={{ scrollSnapAlign: "start" }}
                >
                    <img src="/doodles/star4.png" className="size-20" />
                  
                
                </section>
                <section 
                    className="w-screen h-screen flex flex-col items-center justify-center space-y-2"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <Services/>
                </section>
                <section 
                    className="w-screen h-screen flex flex-col items-center justify-center"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <img src="/doodles/paper3.png" className="size-20 scale-x-[-1]" />
                </section>

                {/* Bottom Row */}
                <section 
                    id="intro" 
                    className="w-screen h-screen flex flex-col items-center justify-center"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <Intro />
                </section>
                <section 
                    className="w-screen h-screen flex flex-col items-center justify-around"
                    style={{ scrollSnapAlign: "start" }}
                >
                <img src="/doodles/star3.png" className="size-20 scale-y-[-1] rotate-90 mx-6" />
                </section>
                <section 
                    id="blog" 
                    className="w-screen h-screen flex flex-col items-center justify-center"
                    style={{ scrollSnapAlign: "start" }}
                >
                    <Blog />
                </section>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden flex flex-col w-screen overflow-auto scroll-smooth"
            style={{ scrollSnapType: "y mandatory" }}
        >
            <section className="w-full h-screen flex justify-center items-center" style={{ scrollSnapAlign: "start" }}>
                <Hero />
            </section>
            <section className="w-full h-screen flex justify-center items-center px-12" style={{ scrollSnapAlign: "start" }}>
                <Intro />
            </section>
            <section className="w-full h-screen flex justify-center items-center px-12" style={{ scrollSnapAlign: "start" }}>
                <ProjectsList />
            </section>
            <section className="w-full h-screen flex justify-center items-center px-12" style={{ scrollSnapAlign: "start" }}>
                <Blog />
            </section>
            <section className="w-full h-screen flex justify-center items-center px-12" style={{ scrollSnapAlign: "start" }}>
                <a href="https://calendly.com/samantha-n-cabrera/30min" target="_blank" className="hover:italic hover:underline hover:text-yellow-500">
                    let's get in touch! 
                </a>
            </section>
        </div>
        </>
    );
}

export default Home;
