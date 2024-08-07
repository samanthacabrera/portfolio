import React from "react";
import Hero from './Hero';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './ProjectsList';
import Blog from "./Blog";
import Resume from "./Resume";

function Home() {
    return (
        <section className="flex flex-col items-center">
            <Hero />
            <div className="w-2/3 space-y-10 md:space-y-20">
                <Intro />
                <Resume />
                <Projects />
                <Skills />
                <Blog />
            </div>
        </section>
    )
}

export default Home